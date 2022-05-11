import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataFormProducts {
  constructor() {}

  postDataFormProducts() {
    const dataForm = {
      Id_nombre_articulo: 1,
      descripcion_articulo: '',
      Longitud: '',
      Latitud: '',
      ArticuloTieneCategoria: [

      ],
      detalleArticulo: [
        {
          multimedia: [
            {
              archivo: '',
            },
          ],
          atributes: {
            id_Color: 1,
            id_compontente: 1,
            id_marca: 6,
            id_material: 7,
            id_peso: 1,
            id_potencia: 19,
            id_tamaño_articulo: 65,
          },
          cantidad: 1,
          valor_unitario: 25.0,
          valortotal: 25.0,
/*           precioVariados: [
            {
              precio: 25.15,
              cantidad: 1,
              nombre_regla: '1',
              descripcion_regla: '1',
            },
          ], */
        },
      ],
    };
  }
  getDataFormProducts(){

  }
}
