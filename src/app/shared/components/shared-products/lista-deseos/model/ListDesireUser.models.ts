export interface ListDesireUser {
  id_lista: number;
  Id_usuario: number;
  Detalle_Lista_deseos: Detalle_Lista_deseos[];
  nombre: string;
  Latitud: number;
  Longitud: number;
}

interface Detalle_Lista_deseos {
  id_articulo: number;
}
