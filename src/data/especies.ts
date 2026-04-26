export interface Especie {
  slug: string;
  nombre: string;
  nombreCientifico: string;
  descripcionCorta: string;
  colorClass: string;
  stats: { valor: string; etiqueta: string; nota?: string }[];
  prev?: { slug: string; nombre: string };
  next?: { slug: string; nombre: string };
}

export const especies: Especie[] = [
  {
    slug: 'bovinos',
    nombre: 'Bovinos',
    nombreCientifico: 'Bos taurus / Bos indicus',
    descripcionCorta: 'Ciclo estral, anatomía reproductiva, gestación y manejo del parto en ganado bovino.',
    colorClass: 'bovino',
    stats: [
      { valor: '280 días', etiqueta: 'Gestación', nota: '± 10 días' },
      { valor: '21 días',  etiqueta: 'Ciclo estral', nota: '18–24 días' },
      { valor: '12–18 h',  etiqueta: 'Duración del celo' },
      { valor: '6–18 m',   etiqueta: 'Pubertad', nota: 'según raza' },
    ],
    prev: { slug: 'ovinos',   nombre: 'Ovinos' },
    next: { slug: 'porcinos', nombre: 'Porcinos' },
  },
  {
    slug: 'porcinos',
    nombre: 'Porcinos',
    nombreCientifico: 'Sus scrofa domesticus',
    descripcionCorta: 'Reproducción porcina, manejo reproductivo e inseminación artificial en granjas.',
    colorClass: 'porcino',
    stats: [
      { valor: '114 días', etiqueta: 'Gestación', nota: '3-3-3' },
      { valor: '21 días',  etiqueta: 'Ciclo estral', nota: '18–24 días' },
      { valor: '2–3 días', etiqueta: 'Duración del celo' },
      { valor: '5–8 m',   etiqueta: 'Pubertad' },
    ],
    prev: { slug: 'bovinos', nombre: 'Bovinos' },
    next: { slug: 'equinos', nombre: 'Equinos' },
  },
  {
    slug: 'equinos',
    nombre: 'Equinos',
    nombreCientifico: 'Equus caballus',
    descripcionCorta: 'Fisiología reproductiva equina, estacionalidad y técnicas modernas de reproducción.',
    colorClass: 'equino',
    stats: [
      { valor: '340 días', etiqueta: 'Gestación', nota: '335–345 días' },
      { valor: '21 días',  etiqueta: 'Ciclo estral' },
      { valor: '5–7 días', etiqueta: 'Duración del celo' },
      { valor: '12–18 m',  etiqueta: 'Pubertad' },
    ],
    prev: { slug: 'porcinos', nombre: 'Porcinos' },
    next: { slug: 'caninos',  nombre: 'Caninos' },
  },
  {
    slug: 'caninos',
    nombre: 'Caninos',
    nombreCientifico: 'Canis lupus familiaris',
    descripcionCorta: 'Ciclo reproductivo canino, gestación, lactancia y atención neonatal.',
    colorClass: 'canino',
    stats: [
      { valor: '63 días',  etiqueta: 'Gestación', nota: '58–68 días' },
      { valor: 'Monoéstr.', etiqueta: 'Tipo de ciclo' },
      { valor: '9–21 días', etiqueta: 'Duración del celo' },
      { valor: '6–12 m',  etiqueta: 'Pubertad' },
    ],
    prev: { slug: 'equinos', nombre: 'Equinos' },
    next: { slug: 'felinos', nombre: 'Felinos' },
  },
  {
    slug: 'felinos',
    nombre: 'Felinos',
    nombreCientifico: 'Felis catus',
    descripcionCorta: 'Ovulación inducida, comportamiento reproductivo y gestación en felinos domésticos.',
    colorClass: 'felino',
    stats: [
      { valor: '64 días',  etiqueta: 'Gestación', nota: '63–65 días' },
      { valor: 'Inducida', etiqueta: 'Ovulación' },
      { valor: '4–7 días', etiqueta: 'Duración del celo' },
      { valor: '5–9 m',   etiqueta: 'Pubertad' },
    ],
    prev: { slug: 'caninos', nombre: 'Caninos' },
    next: { slug: 'ovinos',  nombre: 'Ovinos' },
  },
  {
    slug: 'ovinos',
    nombre: 'Ovinos',
    nombreCientifico: 'Ovis aries',
    descripcionCorta: 'Estacionalidad reproductiva, ciclo estral y manejo integral de rebaños ovinos.',
    colorClass: 'ovino',
    stats: [
      { valor: '148 días', etiqueta: 'Gestación', nota: '144–152 días' },
      { valor: '17 días',  etiqueta: 'Ciclo estral', nota: '14–19 días' },
      { valor: '24–36 h',  etiqueta: 'Duración del celo' },
      { valor: '6–9 m',   etiqueta: 'Pubertad' },
    ],
    prev: { slug: 'felinos',  nombre: 'Felinos' },
    next: { slug: 'bovinos',  nombre: 'Bovinos' },
  },
];

export function getEspecie(slug: string): Especie | undefined {
  return especies.find(e => e.slug === slug);
}
