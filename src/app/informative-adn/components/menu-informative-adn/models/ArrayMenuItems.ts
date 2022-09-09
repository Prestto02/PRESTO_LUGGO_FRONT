import { UrlFront } from "src/app/shared/routes/RoutesFront";

export interface MenuItemsADN {
  readonly id: number;
  readonly name: string;
  readonly route: string;
}

export const ItemsAdnMenu: ReadonlyArray<MenuItemsADN> = [
  {
    id: 1,
    name: 'Empezar',
    route: `${UrlFront.InformativeAdn.informative}/${UrlFront.InformativeAdn.adn}#container-items`,
  },
  {
    id: 2,
    name: 'Planes y Tarifas',
    route: `${UrlFront.InformativeAdn.informative}/${UrlFront.InformativeAdn.adn}`,
  },
  {
    id: 3,
    name: 'Comunidad',
    route: `${UrlFront.InformativeAdn.informative}/${UrlFront.InformativeAdn.adn}`,
  },
];
