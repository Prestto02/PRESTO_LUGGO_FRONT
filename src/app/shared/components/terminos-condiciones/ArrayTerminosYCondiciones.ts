export interface TerminosCondiciones {
  id: number;
  nombre: string;
  identify: string;
  items?: ReadonlyArray<ItemsTerminosCondiciones>;
}

interface ItemsTerminosCondiciones {
  id: number;
  nombre: string;
  identify: string;
}
export const ArrayTerminos: ReadonlyArray<TerminosCondiciones> = [
  {
    id: 1,
    nombre: 'Seccion 1',
    identify: 'section1',
    items: [
      {
        id: 1,
        nombre: 'Seccion 1.1',
        identify: 'seccion1_1',
      },
      {
        id: 2,
        nombre: 'Seccion 1.2',
        identify: 'seccion1_2',
      },
      {
        id: 3,
        nombre: 'Seccion 1.3',
        identify: 'seccion1_3',
      },
    ],
  },
  {
    id: 2,
    nombre: 'Seccion 2',
    identify: 'section2',
    items: [
      {
        id: 1,
        nombre: 'Seccion 2.1',
        identify: 'seccion2_1',
      },
      {
        id: 2,
        nombre: 'Seccion 2.1',
        identify: 'seccion2_2',
      },
      {
        id: 3,
        nombre: 'Seccion 2.3',
        identify: 'seccion2_3',
      },
    ],
  },
  {
    id: 3,
    nombre: 'Seccion 3',
    identify: 'section3',
    items: [
      {
        id: 1,
        nombre: 'Seccion 3.1',
        identify: 'seccion3_1',
      },
      {
        id: 2,
        nombre: 'Seccion 3.1',
        identify: 'seccion3_2',
      },
      {
        id: 3,
        nombre: 'Seccion 3.3',
        identify: 'seccion3_3',
      },
    ],
  },
  {
    id: 4,
    nombre: 'Seccion 4',
    identify: 'section4',
  },
  {
    id: 5,
    nombre: 'Seccion 5',
    identify: 'section5',
  },
];
