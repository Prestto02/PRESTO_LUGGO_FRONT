export interface ListDesireUser {
  id_lista: number;
  Id_usuario: number;
  Detalle_Lista_deseos: Detalle_Lista_deseos[];
  nombre: string;
  Latitud: number;
  Longitud: number;
}

interface Detalle_Lista_deseos {
  id_detalle_list: number;
  id_detalle_articulo: number;
}

export interface CollecionUser {
  id_lista: number;
  nombre: string;
}
