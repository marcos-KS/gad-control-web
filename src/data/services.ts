// Catálogo de servicios: PROPUESTA INICIAL, pendiente de confirmación.
// Con ilustraciones técnicas vectoriales de alta calidad en formato SVG adaptativo.

export interface Service {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  applications: string[];
  active: boolean;
  image?: string;
}

export const services: Service[] = [
  {
    slug: 'instrumentacion-industrial',
    title: 'Instrumentación industrial',
    icon: 'gauge',
    summary: 'Selección, instalación y puesta en marcha de instrumentos para medir variables de proceso con confiabilidad.',
    applications: ['Plantas de proceso', 'Bodegas y agroindustria', 'Servicios auxiliares'],
    active: true,
    image: '/img/servicios/instrumentacion.svg',
  },
  {
    slug: 'sensores-transmisores',
    title: 'Sensores y transmisores de proceso',
    icon: 'sensor',
    summary: 'Incorporación y reemplazo de sensores y transmisores, con configuración y verificación de señal.',
    applications: ['Reemplazo de equipos', 'Nuevas mediciones', 'Monitoreo remoto'],
    active: true,
    image: '/img/servicios/sensores.svg',
  },
  {
    slug: 'temperatura-presion-nivel-caudal',
    title: 'Medición de temperatura, presión, nivel y caudal',
    icon: 'thermo',
    summary: 'Medición de las variables principales de proceso, adaptada al fluido y a las condiciones de la instalación.',
    applications: ['Tanques y recipientes', 'Cañerías', 'Intercambiadores de calor'],
    active: true,
    image: '/img/servicios/variables.svg',
  },
  {
    slug: 'automatizacion-control-procesos',
    title: 'Automatización y control de procesos',
    icon: 'flow',
    summary: 'Diseño de lazos de control y lógica de operación para procesos más estables y repetibles.',
    applications: ['Control de lazo', 'Secuencias de proceso', 'Automatización de equipos'],
    active: true,
    image: '/img/servicios/automatizacion-linea.png',
  },
  {
    slug: 'plc-hmi',
    title: 'PLC y pantallas HMI',
    icon: 'cpu',
    summary: 'Programación y puesta en marcha de PLC e interfaces HMI para operar y supervisar el proceso.',
    applications: ['Control de máquinas', 'Supervisión local', 'Modernización de comandos'],
    active: true,
    image: '/img/servicios/plc-hmi.svg',
  },
  {
    slug: 'tableros-electricos-control',
    title: 'Tableros eléctricos y de control',
    icon: 'panel',
    summary: 'Armado, adecuación y documentación de tableros de potencia y control.',
    applications: ['Tableros de comando', 'Gabinetes de PLC', 'Adecuaciones'],
    active: true,
    image: '/img/servicios/tablero-completo.jpg',
  },
  {
    slug: 'senales-4-20ma',
    title: 'Señales industriales de 4–20 mA',
    icon: 'wave',
    summary: 'Cableado, calibración, verificación y diagnóstico de lazos de corriente 4–20 mA.',
    applications: ['Lazos de medición', 'Señales a PLC', 'Verificación de campo'],
    active: true,
    image: '/img/servicios/senales-4-20ma.svg',
  },
  {
    slug: 'diagnostico-mantenimiento',
    title: 'Diagnóstico, mantenimiento y mejoras',
    icon: 'wrench',
    summary: 'Detección de fallas en instrumentación y control, mantenimiento y propuestas de mejora.',
    applications: ['Fallas intermitentes', 'Mantenimiento preventivo', 'Optimización'],
    active: true,
    image: '/img/servicios/termografia-diagnostico.png',
  },
  {
    slug: 'integracion-equipos-sistemas',
    title: 'Integración de equipos y sistemas',
    icon: 'link',
    summary: 'Integración de equipos de distintos fabricantes en un sistema coherente de control y supervisión.',
    applications: ['Comunicación entre equipos', 'Ampliaciones', 'Supervisión centralizada'],
    active: true,
    image: '/img/servicios/componentes-tablero.png',
  },
];
