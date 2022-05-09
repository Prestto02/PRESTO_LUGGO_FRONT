import { ConfiguracionCapacidadComponent } from '../components/configuracion-producto/configuracion-capacidad/configuracion-capacidad.component';
import { ConfiguracionColorComponent } from '../components/configuracion-producto/configuracion-color/configuracion-color.component';
import { BaseFormColors } from '../components/configuracion-producto/configuracion-color/models/BaseFormColors';
import { ConfiguracionProductoComponent } from '../components/configuracion-producto/configuracion-producto.component';
import { ConfiguracionTamanoComponent } from '../components/configuracion-producto/configuracion-tamano/configuracion-tamano.component';
import { BaseFormTamano } from '../components/configuracion-producto/configuracion-tamano/models/BaseFormTamano';
import { CreateProductsComponent } from '../components/create-products/create-products.component';
import { ImagenProductosComponent } from '../components/imagen-productos/imagen-productos.component';
import { ImgIconosDescripcionComponent } from '../components/imagen-productos/img-iconos-descripcion/img-iconos-descripcion.component';
import { ImgIconosComponent } from '../components/imagen-productos/img-iconos/img-iconos.component';
import { ListadoProductosComponent } from '../components/listado-productos/listado-productos.component';
import { ProductsComponent } from '../components/products.component';
import { ProgressStepperComponent } from '../components/progress-stepper/progress-stepper.component';
import { BaseFormProducts } from '../models/BaseformProduct';

export const ProductoModuleDeclarations = [
  ProductsComponent, //INDEX PRODUCTOS
  CreateProductsComponent, //CREAR PRODUCTOS
  ListadoProductosComponent, // LISTADO DE PRODUCTOS
  ProgressStepperComponent,
  ConfiguracionProductoComponent, //CONFIGURACION DEL PRODUCTO
  ConfiguracionCapacidadComponent, //CONFIGURACION CAPACIDAD
  ConfiguracionColorComponent, //CONFIGURACION DEL COLOR
  ConfiguracionTamanoComponent, //CONFIGURACION DEL TAMANO
  ImagenProductosComponent, //IMAGEN DEL PRODUCTO
  ImgIconosComponent, //IMAGENES PEQUEÑAS COMPONENTS
  ImgIconosDescripcionComponent,
];

export const ProductoModuleProviders = [
  BaseFormProducts,
  BaseFormColors,
  BaseFormTamano,
  CreateProductsComponent,
];
