// Proyectos. IMPORTANTE: los siguientes son DEMOSTRACIONES EDITABLES, no trabajos reales.
// Para agregar uno real: copiar un bloque, poner `demo: false`, completar los datos y,
// opcionalmente, `image` y `gallery` con rutas en /public/img/proyectos/. La página
// /proyectos/<slug> se genera automáticamente con la plantilla.

export const categories = ['Instrumentación', 'Automatización', 'Tableros', 'Control de procesos', 'Instalaciones'] as const;
export type Category = (typeof categories)[number];

export interface Project {
  slug: string;
  title: string;
  category: Category;
  demo: boolean;
  summary: string;
  need: string;
  solution: string;
  equipment: string[];
  results: string[]; // vacío si no hay resultados documentados
  image?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: 'paletizadora-de-cajas',
    title: 'Paletizadora de cajas automática',
    category: 'Automatización',
    demo: false,
    summary: 'Diseño y automatización de sistema de paletizado de cajas con control secuencial y accionamientos sincronizados.',
    need: 'Optimizar el final de línea de empaque mediante el apilado y conformado automático de pallets, eliminando cuellos de botella y minimizando la intervención manual.',
    solution: 'Desarrollo de lógica en PLC, control de transportadores de rodillos motorizados, tope neumático de formación de capas y mesa de elevación coordinada.',
    equipment: ['PLC industrial de control', 'Motorreductores y variadores de velocidad', 'Sensores fotoeléctricos de presencia', 'Accionamientos neumáticos', 'Tablero de comando integrado'],
    results: ['Cadencia de paletizado continua y repetible', 'Operación segura con barreras y paradas de emergencia', 'Reducción de tiempos muertos en final de línea'],
    image: '/img/proyectos/paletizadora-cajas.jpg',
  },
  {
    slug: 'control-enfriador-mosto',
    title: 'Automatización y control de enfriador de mosto',
    category: 'Control de procesos',
    demo: false,
    summary: 'Lazo de control de temperatura de precisión para enfriador de mosto con intercambiador de placas.',
    need: 'Garantizar el enfriamiento continuo y uniforme del mosto enológico a la temperatura exacta requerida para fermentación, previniendo variaciones que comprometan la calidad del producto.',
    solution: 'Integración de intercambiador de placas, sensores de temperatura sanitarios RTD Pt100, válvula de regulación modulante (4–20 mA), bomba de trasvase y tablero de control centralizado.',
    equipment: ['Intercambiador térmico de placas', 'Transmisores de temperatura sanitarios RTD Pt100', 'Válvula de control modulante proporcional', 'Bomba centrífuga sanitaria', 'Tablero con instrumentación y registradores'],
    results: ['Control térmico estable dentro de ± 0.5 °C', 'Mayor eficiencia en el consumo de glicol/agua fría', 'Registro y repetibilidad lote a lote'],
    image: '/img/proyectos/enfriador-mosto.jpg',
  },
  {
    slug: 'tablero-de-comando',
    title: 'Tablero de comando y control de potencia',
    category: 'Tableros',
    demo: false,
    summary: 'Diseño, montaje y cableado de tablero industrial con protecciones Siemens y canalizado ordenado.',
    need: 'Montaje de tablero principal de potencia y control con distribución normalizada para planta.',
    solution: 'Armado en gabinete autoportante con interruptor de corte en carga, protecciones modulares, PLC y borneras identificadas.',
    equipment: ['Gabinete industrial IP65', 'Interruptor termomagnético en caja moldeada', 'Guardamotores y contactores Siemens Sirius', 'Borneras numeradas'],
    results: ['Distribución normalizada según IEC', 'Fácil diagnóstico y mantenimiento futuro'],
    image: '/img/servicios/tablero-completo.jpg',
    gallery: ['/img/servicios/componentes-tablero.png'],
  },
  {
    slug: 'control-temperatura',
    title: 'Control de temperatura de proceso',
    category: 'Control de procesos',
    demo: true,
    summary: 'Ejemplo de lazo de control de temperatura con sensor y controlador.',
    need: 'Texto de ejemplo: la temperatura del proceso varía y afecta la repetibilidad.',
    solution: 'Texto de ejemplo: sensor de temperatura, lazo PID y ajuste de parámetros.',
    equipment: ['Sensor de temperatura (RTD)', 'Controlador PID', 'Actuador'],
    results: [],
  },
  {
    slug: 'instalacion-instrumentos-campo',
    title: 'Instalación de instrumentos en campo',
    category: 'Instalaciones',
    demo: true,
    summary: 'Ejemplo de montaje, cableado y rotulado de instrumentos de campo.',
    need: 'Texto de ejemplo: nueva línea que requiere instrumentos y cableado ordenado.',
    solution: 'Texto de ejemplo: montaje, bandejas, cableado, identificación y pruebas de lazo.',
    equipment: ['Transmisores', 'Cable apantallado', 'Cajas de conexión'],
    results: [],
  },
];
