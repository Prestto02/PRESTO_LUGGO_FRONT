interface tableCategoryProduct {
  name: string;
  example: string;
  state: string;
}

export const arrayTable: ReadonlyArray<tableCategoryProduct> = [
  {
    name: 'Belleza',
    example:
      'Fragancias, cuidado de la piel, maquillaje, cuidado del cabello, baño y ducha.',
    state: 'Nuevo',
  },
  {
    name: 'Ropa y Accesorios',
    example:
      'Ropa de abrigo, ropa deportiva, ropa interior, cinturones, billeteras.',
    state: 'Nuevo',
  },
  {
    name: 'Hogar y Cocina',
    example:
      'Incluye cocina, comedor, artículos para mascotas, muebles, decoración, ropa de cama, baño, manualidades, pasatiempos, electrodomésticos, almacenamiento, patio, pasto, jardín, artículos para piscina, paisaje terrestre, remoción de nieve, generadores',
    state: 'Nuevo',
  },
  {
    name: 'Maletas, Bolsas y Accesorios',
    example:
      'Maletas, bolsas, mochilas, maletines, paraguas, accesorios de viaje',
    state: 'Nuevo',
  },
  {
    name: 'Oficina y Papelería',
    example: 'Artículos de oficina, muebles, impresoras, calculadoras',
    state: 'Nuevo',
  },
  {
    name: 'Zapatos, Bolsos y Lentes de sol',
    example:
      'Zapatos, botas, sandalias, pantuflas, bolsos, lentes de sol, monturas de lentes',
    state: 'Nuevo',
  },
  {
    name: 'Deportes',
    example:
      'Artículos para ejercicios y entrenamiento físico, accesorios de caza, deportes de equipo, tienda licenciada o para seguidores, ropa deportiva, navegación y pesca, salón de juegos',
    state: 'Nuevo',
  },
];
