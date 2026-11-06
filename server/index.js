// Backend de contacto: valida, filtra spam y envía por SMTP. Sin SMTP configurado responde error (no simula envíos).
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import path from 'node:path';

const app = express();
app.use(express.json({ limit: '20kb' }));

const { SMTP_HOST, SMTP_PORT = 587, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM, PORT = 3001 } = process.env;
const configured = SMTP_HOST && SMTP_USER && SMTP_PASS && MAIL_TO;
const transporter = configured
  ? nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), secure: Number(SMTP_PORT) === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } })
  : null;

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false,
  message: { ok: false, error: 'Demasiados intentos. Intente más tarde.' } });

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (s, max) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

app.post('/api/contacto', limiter, async (req, res) => {
  const b = req.body ?? {};
  // Anti-spam: honeypot y tiempo mínimo de completado
  if (b.web || Number(b.t) < 3000) return res.json({ ok: true }); // se descarta en silencio
  const nombre = clean(b.nombre, 100), empresa = clean(b.empresa, 100), email = clean(b.email, 120),
    telefono = clean(b.telefono, 40), servicio = clean(b.servicio, 120), mensaje = String(b.mensaje ?? '').trim().slice(0, 4000);
  if (nombre.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || telefono.replace(/\D/g, '').length < 8
      || !servicio || mensaje.length < 10 || b.privacidad !== true)
    return res.status(400).json({ ok: false, error: 'Datos inválidos.' });
  if (!transporter) return res.status(503).json({ ok: false, error: 'El envío de correo no está configurado.' });
  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER, to: MAIL_TO, replyTo: email,
      subject: `Consulta web: ${servicio} - ${nombre}`,
      text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\nTeléfono: ${telefono}\nServicio: ${servicio}\n\n${mensaje}`,
      html: `<p><b>Nombre:</b> ${esc(nombre)}<br><b>Empresa:</b> ${esc(empresa)}<br><b>Email:</b> ${esc(email)}<br><b>Teléfono:</b> ${esc(telefono)}<br><b>Servicio:</b> ${esc(servicio)}</p><p>${esc(mensaje).replace(/\n/g, '<br>')}</p>`,
    });
    res.json({ ok: true });
  } catch (e) {
    console.error('SMTP error:', e.message);
    res.status(502).json({ ok: false, error: 'No se pudo enviar el correo.' });
  }
});

// En producción sirve también el sitio estático compilado
app.use(express.static(path.resolve('dist')));
app.listen(PORT, () => console.log(`Servidor en :${PORT} (SMTP ${configured ? 'configurado' : 'NO configurado'})`));
