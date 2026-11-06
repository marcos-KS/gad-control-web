// Marcas con las que trabaja G.A.D. Control (confirmadas por el titular).
// Para usar el logo oficial: colocar el archivo en /public/img/marcas/ y completar `logo`.
// Sin logo se muestra el nombre con el color de la marca.

export interface Brand { name: string; color: string; logo?: string; }

export const brands: Brand[] = [
  { name: 'Delta', color: '#0098DA' },
  { name: 'Siemens', color: '#009999' },
  { name: 'Keyence', color: '#E60012' },
  { name: 'Scancon', color: '#D7141A' },
  { name: 'Hakko Electronics', color: '#1F3A93' },
  { name: 'Tyco Electronics', color: '#0067B1' },
  { name: 'Danfoss', color: '#E2000F' },
];
