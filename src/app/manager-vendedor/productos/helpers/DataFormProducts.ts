import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/login/services/token.service';
import { BaseFormCategorias } from '../../categorias/models/categorias.models';
import { BaseFormConfigAtributos } from '../components/configuracion-producto/configuracion-atributos/models/BaseFormConfigAtributos';
import { BaseFormConfigAtributos2 } from '../components/configuracion-producto/configuracion-atributos/models/BaseFormConfigAtributos2';
import { BaseFormGlobalPrecio } from '../components/configuracion-producto/configuracion-atributos/models/BasePrecioGlobal';
import { BaseFormAtributosConfig } from '../components/configuracion-productos-tercera/models/BaseFormAtrtibutos';
import { BaseFormEtiquetas } from '../components/create-products/form-etiquetas/models/BaseFormEtiquetas';
import { EditFormProducts } from '../components/edit-product/model/FormEditProduct';
import { BaseFormTamanoProducto } from '../components/logistica-producto/models/BaseFormTamano';
import { BaseFormLogisticaProducto } from '../components/logistica-producto/models/BaseFormubicacion';
import { BaseFormProducts } from '../models/BaseformProduct';

@Injectable({ providedIn: 'root' })
export class DataFormProducts {
  arrayCategorias: any = [];
  arrayEtiquetas: any = [];
  arrayAtributos: any = [];
  arrayUbicacion: any = [];
  arrayImagenes: any = [];
  constructor(
    private formProduct: BaseFormProducts,
    private edit: EditFormProducts,
    private formCategoria: BaseFormCategorias,
    private formEtiquetas: BaseFormEtiquetas,
    private formAtributo: BaseFormConfigAtributos,
    private formTamano: BaseFormTamanoProducto,
    private formUbicacion: BaseFormLogisticaProducto,
    private baseGlobalPrecio: BaseFormGlobalPrecio,
    private atributoConfig: BaseFormAtributosConfig,
    private attributosConfig2: BaseFormConfigAtributos2,
    private token: TokenService
  ) {}
  //OBTENGO TODAS LAS CATEGORIAS
  getCategorias() {
    this.formCategoria.getCategorias.controls.map((res) => {
      this.arrayCategorias.push(res.value);
    });
  }
  //OBTENGO TODAS LAS ETIQUETAS
  getEtiquetas() {
    this.formEtiquetas.etiquetas.controls.map((res) => {
      this.arrayEtiquetas.push(res.value);
    });
  }
  //GET ATRIBUTOS
  getAtributosImagenes() {
    this.formAtributo.atributosVariacion.controls.map((res) => {
      this.arrayAtributos.push(res.value);
    });
  }
  //GET UBICACION
  getUbicacion() {
    /*     this.formUbicacion.ubicacionProducto.controls.map((res) => {
      this.arrayUbicacion.push(res.value);
    }); */
    //OBTENGO EL TAMANO DEL PRODUCTO PARTE 3 LOGISTICA
    const Longitud_x =
      this.formTamano.formTamanoProducto.get('Longitud_x')?.value;
    const Longitud_y =
      this.formTamano.formTamanoProducto.get('Longitud_y')?.value;
    const Longitud_z =
      this.formTamano.formTamanoProducto.get('Longitud_z')?.value;
    const Peso = this.formTamano.formTamanoProducto.get('Peso')?.value;
    const TiempoDespacho =
      this.formTamano.formTamanoProducto.get('TiempoDespacho')?.value;
    //CREO EL OBJETO CON LAS DIMENSIONES DEL PRODUCTO
    const dimensiones = {
      Longitud_x,
      Longitud_y,
      Longitud_z,
      Peso,
      TiempoDespacho,
    };
    return dimensiones;
  }
  //OBTENGO DEL FORM PRODUCTOS
  getProducts() {
    const descripcion = this.formProduct.formProducts.get(
      'descripcion_articulo'
    )?.value;
    const caracteristicas =
      this.formProduct.formProducts.get('caracteristicas')?.value;
    const marca = this.formProduct.formProducts.get('marca')?.value;
    const sku = this.formProduct.formProducts.get('sku')?.value;
    const id_nombre_articulo =
      this.formProduct.formProducts.get('id_nombre_articulo')?.value;
    const archivo = this.formProduct.formProducts.get('archivo')?.value;
    const garantia = this.formProduct.formProducts.get('Tipo_Garantia')?.value;
    const disponibilidad =
      this.formProduct.formProducts.get('Disponibilidad')?.value;
    const restricciones =
      this.formProduct.formProducts.get('Restricciones')?.value;
    const Id_articulo = this.formProduct.formProducts.get('id_product')?.value;
    return {
      descripcion,
      marca,
      sku,
      caracteristicas,
      id_nombre_articulo,
      archivo,
      garantia,
      disponibilidad,
      restricciones,
      Id_articulo,
    };
  }

  getEditFormProduct() {
    const descripcion = this.edit.formEditProducts.get(
      'descripcion_articulo'
    )?.value;
    const caracteristicas =
      this.edit.formEditProducts.get('caracteristicas')?.value;
    const marca = this.edit.formEditProducts.get('marca')?.value;
    const sku = this.edit.formEditProducts.get('sku')?.value;
    const id_nombre_articulo =
      this.edit.formEditProducts.get('id_nombre_articulo')?.value;
    const archivo = this.edit.formEditProducts.get('multimedia.archivo')?.value;
    const garantia = this.edit.formEditProducts.get('Tipo_Garantia')?.value;
    const disponibilidad =
      this.edit.formEditProducts.get('Disponibilidad')?.value;
    const restricciones =
      this.edit.formEditProducts.get('Restricciones')?.value;
    const Id_articulo = this.edit.formEditProducts.get('id_product')?.value;
    return {
      descripcion,
      marca,
      sku,
      caracteristicas,
      id_nombre_articulo,
      archivo,
      garantia,
      disponibilidad,
      restricciones,
      Id_articulo,
    };
  }

  //PARA HACER EL POST A LA API

  getDataFormProducts(longitud: any, latitud: any) {
    const dimensiones = this.getUbicacion();
    const {
      descripcion,
      sku,
      caracteristicas,
      marca,
      id_nombre_articulo,
      archivo,
      garantia,
      disponibilidad,
      restricciones,
      Id_articulo,
    } = this.getProducts();
    return {
      Id_articulo: Id_articulo,
      id_vendedor: this.token.getTokenId(),
      id_nombre_articulo: id_nombre_articulo,
      descripcion_articulo: descripcion,
      sku: sku,
      caracteristicas: caracteristicas,
      marca: marca,
      Restricciones: restricciones,
      Disponibilidad: disponibilidad,
      Garantia: garantia,
      etiquetas: this.formEtiquetas.formEtiquetas.get('etiqueta')?.value,
      articuloTieneCategoria: this.formCategoria.formCategorias.get(
        'ArticuloTieneCategoria'
      )?.value,
      multimedia: {
        archivo: archivo,
      },
      detalleArticulo: [
        {
          stockMinimo:
            this.attributosConfig2.formAtributosDos.get('Stock_Minimo')?.value,
          stockItems: parseInt(
            this.attributosConfig2.formAtributosDos.get('Stock_General')?.value
          ),
          precioPorVariacion:
            this.attributosConfig2.formAtributosDos.get('PrecioGlobal')?.value,
          Iva: this.attributosConfig2.formAtributosDos.get('Iva')?.value,
          Ice: this.attributosConfig2.formAtributosDos.get('Ice')?.value,
          Atributes: this.atributoConfig.formAtributos.value,
        },
      ],
      logistica: {
        Gestion_Envio:
          this.formTamano.formTamanoProducto.get('GestionEnvio')?.value,
        precio_envio: this.formTamano.formTamanoProducto.get('Precio')?.value,
        dimensiones,
        ubicacion:
          this.formUbicacion.formLogistica.get('ubicacionProducto')?.value,
      },
      longitud: longitud,
      latitud: latitud,
    };
  }
  getEditFormProducts(longitud: any, latitud: any) {
    const dimensiones = this.getUbicacion();
    const {
      descripcion,
      sku,
      caracteristicas,
      marca,
      id_nombre_articulo,
      archivo,
      garantia,
      disponibilidad,
      restricciones,
      Id_articulo,
    } = this.getEditFormProduct();
    return {
      Id_articulo: Id_articulo,
      id_vendedor: this.token.getTokenId(),
      id_nombre_articulo: id_nombre_articulo,
      descripcion_articulo: descripcion,
      sku: sku,
      caracteristicas: caracteristicas,
      marca: marca,
      Restricciones: restricciones,
      Disponibilidad: disponibilidad,
      Garantia: garantia,
      etiquetas: this.formEtiquetas.formEtiquetas.get('etiqueta')?.value,
      articuloTieneCategoria: this.formCategoria.formCategorias.get(
        'ArticuloTieneCategoria'
      )?.value,
      multimedia: {
        archivo: archivo,
      },
      detalleArticulo: [
        {
          stockMinimo:
            this.attributosConfig2.formAtributosDos.get('Stock_Minimo')?.value,
          stockItems: parseInt(
            this.attributosConfig2.formAtributosDos.get('Stock_General')?.value
          ),
          precioPorVariacion:
            this.attributosConfig2.formAtributosDos.get('PrecioGlobal')?.value,
          Iva: this.attributosConfig2.formAtributosDos.get('Iva')?.value,
          Ice: this.attributosConfig2.formAtributosDos.get('Ice')?.value,
          Atributes: this.atributoConfig.formAtributos.value,
        },
      ],
      logistica: {
        Gestion_Envio:
          this.formTamano.formTamanoProducto.get('GestionEnvio')?.value,
        precio_envio: this.formTamano.formTamanoProducto.get('Precio')?.value,
        dimensiones,
        ubicacion:
          this.formUbicacion.formLogistica.get('ubicacionProducto')?.value,
      },
      longitud: longitud,
      latitud: latitud,
    };
  }

  limpiarTodoForm() {
    this.arrayAtributos = null;
    this.arrayCategorias = null;
    this.arrayEtiquetas = null;
    this.arrayUbicacion = null;
    this.formProduct.limpiarForm();
    this.formAtributo.limpiarForm();
    this.formEtiquetas.limpiarForm();
    this.formCategoria.limpiarForm();
    this.atributoConfig.limpiarFormulario();
    this.baseGlobalPrecio.limpiarForm();
    this.attributosConfig2.limpiarFormulario();
    this.formTamano.limpiarForm();
    this.formUbicacion.limpiarForm();
  }
}
