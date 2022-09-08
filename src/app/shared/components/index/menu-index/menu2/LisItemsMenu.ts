import { UrlFront } from 'src/app/shared/routes/RoutesFront';

//MENU 2 PARA LA LISTA DE MENU ITEMS
export interface ListeMenu {
  id: number;
  name: string;
  link: string;
}
export const arrayListItemsMenu: ReadonlyArray<ListeMenu> = [
  {
    id: 1,
    name: 'Atención al cliente',
    link: `#`,
  },
  {
    id: 2,
    name: 'Vende con nosotros',
    link: `${UrlFront.Users.users}/${UrlFront.Users.adnRegistrar}`,
  },
];
//ARRAY LA LISTA DE LOS MAS VENDEDIDOS DEL OFF CANVAS MENU
export const arrayListMasVendidos: ReadonlyArray<ListeMenu> = [
  {
    id: 1,
    name: 'Lo más vendido',
    link: '#',
  },
  {
    id: 2,
    name: 'Lo más nuevo',
    link: '#',
  },
  {
    id: 3,
    name: 'Productos del momento',
    link: '#',
  },
];
//ARRAY PARA LA VALIDACION SI EXISTE O NO USUARIO
export const arrayListIdentifyUser: ReadonlyArray<ListeMenu> = [
 /*  {
    id: 1,
    name: 'Mi cuenta',
    link: '',
  },
  {
    id: 2,
    name: 'Atención al cliente',
    link: '',
  }, */
  {
    id: 3,
    name: ' Cerrar Sesión',
    link: `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`,
  },
];
//ARRAY PARA LOS USUARIOS QUE NO HAN SIDO IDENTIFICADO
export const arrayListNotIdenfityUser: ReadonlyArray<ListeMenu> = [
  {
    id: 1,
    name: 'Iniciar Sesión',
    link: `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`,
  },
  {
    id: 2,
    name: 'Registrarse',
    link: `${UrlFront.Login.login}/${UrlFront.Login.postRegister}`,
  },
  {
    id: 3,
    name: 'Vender con Puertto',
    link: `${UrlFront.InformativeAdn.informative}/${UrlFront.InformativeAdn.adn}`,
  },
];
