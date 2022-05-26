import { Injectable } from '@angular/core';
import { BaseFormCategorias } from '../../categorias/models/categorias.models';
import { BaseFormConfigAtributos } from '../components/configuracion-producto/configuracion-atributos/models/BaseFormConfigAtributos';
import { BaseFormEtiquetas } from '../components/create-products/form-etiquetas/models/BaseFormEtiquetas';
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
    private formCategoria: BaseFormCategorias,
    private formEtiquetas: BaseFormEtiquetas,
    private formAtributo: BaseFormConfigAtributos,
    private formTamano: BaseFormTamanoProducto,
    private formUbicacion: BaseFormLogisticaProducto
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
    this.formUbicacion.ubicacionProducto.controls.map((res) => {
      this.arrayUbicacion.push(res.value);
    });
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
    return {
      descripcion,
      marca,
      sku,
      caracteristicas,
      id_nombre_articulo,
      archivo,
    };
  }
  //PARA HACER EL POST A LA API
  getDataFormProducts(longitud: any, latitud: any) {
    this.getAtributosImagenes();
    this.getCategorias();
    this.getEtiquetas();
    //this.getColors();
    const dimensiones = this.getUbicacion();
    const {
      descripcion,
      sku,
      caracteristicas,
      marca,
      id_nombre_articulo,
      archivo,
    } = this.getProducts();
    return {
      id_nombre_articulo: id_nombre_articulo,
      descripcion_articulo: descripcion,
      sku: sku,
      caracteristicas: caracteristicas,
      marca: marca,
      Multimedia: { archivo: archivo },
      etiquetas: this.arrayEtiquetas,
      articuloTieneCategoria: this.arrayCategorias,
      detalleArticulo: this.arrayAtributos,
      logistica: { dimensiones, ubicacion: this.arrayUbicacion },
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
    this.formTamano.limpiarForm();
    this.formUbicacion.limpiarForm();
  }
}
