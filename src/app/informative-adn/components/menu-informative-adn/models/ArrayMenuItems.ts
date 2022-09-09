export interface MenuItemsADN {
  readonly id: number;
  readonly name: string;
  readonly route: string;
}

export const ItemsAdnMenu: ReadonlyArray<MenuItemsADN> = [
  {
    id: 1,
    name: 'Empezar',
    route: '#container-items',
  },
  {
    id: 2,
    name: 'Planes y Tarifas',
    route: '',
  },
  {
    id: 3,
    name: 'Comunidad',
    route: '',
  },
];
