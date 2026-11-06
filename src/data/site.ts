// Datos generales del sitio. Editar aquí; se reflejan en todas las páginas.
// Los valores marcados con PENDIENTE no están confirmados y se muestran como "a confirmar".

export const site = {
  name: 'G.A.D. Control',
  tagline: 'Instrumentación y Control Industrial',
  city: 'San Martín, Mendoza, Argentina',
  // WhatsApp real indicado por el titular (formato internacional, sin + ni espacios)
  whatsapp: '5492634352313',
  whatsappDisplay: '+54 9 2634 35-2313',
  whatsappMessage:
    'Hola, quisiera realizar una consulta sobre los servicios de G.A.D. Control en instrumentación y control industrial.',
  phone: '+54 9 2634 35-2313', // Confirmado
  phoneHref: 'tel:+5492634352313',
  email: 'nelson@gadcontrol.com.ar',
  // Clave de Web3Forms para recibir los formularios directo a nelson@gadcontrol.com.ar
  // Se obtiene gratis en https://web3forms.com ingresando el correo
  web3formsKey: 'YOUR_ACCESS_KEY_HERE',
  address: null as string | null, // Se coordina al consultar
  hours: null as string | null, // PENDIENTE: horarios a confirmar
  // Coordenadas de referencia de la ciudad (no de un domicilio)
  map: { lat: -33.0817, lon: -68.4719 },
  coverage: [
    'San Martín',
    'Zona Este de Mendoza',
    'Resto de Mendoza (a consultar)',
    'Otras provincias (a consultar)',
  ],
};

export const whatsappUrl = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];
