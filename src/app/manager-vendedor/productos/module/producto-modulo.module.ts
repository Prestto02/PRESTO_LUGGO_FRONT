import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfiguracionAtributosComponent } from '../components/configuracion-producto/configuracion-atributos/configuracion-atributos.component';
import { BaseFormConfigAtributos } from '../components/configuracion-producto/configuracion-atributos/models/BaseFormConfigAtributos';
import { ConfiguracionColorComponent } from '../components/configuracion-producto/configuracion-color/configuracion-color.component';
import { BaseFormColors } from '../components/configuracion-producto/configuracion-color/models/BaseFormColors';
import { ConfiguracionProductoComponent } from '../components/configuracion-producto/configuracion-producto.component';
import { BaseFormConfigProducts } from '../components/configuracion-producto/models/BaseFormCongifProduct';
import { CreateProductsComponent } from '../components/create-products/create-products.component';
import { FormEtiquetasComponent } from '../components/create-products/form-etiquetas/form-etiquetas.component';
import { BaseFormEtiquetas } from '../components/create-products/form-etiquetas/models/BaseFormEtiquetas';
import { ImagenProductosComponent } from '../components/imagen-productos/imagen-productos.component';
import { ImgIconosDescripcionComponent } from '../components/imagen-productos/img-iconos-descripcion/img-iconos-descripcion.component';
import { ImgIconosComponent } from '../components/imagen-productos/img-iconos/img-iconos.component';
import { ListadoProductosComponent } from '../components/listado-productos/listado-productos.component';
import { LogisticaProductoComponent } from '../components/logistica-producto/logistica-producto.component';
import { ProductsComponent } from '../components/products.component';
import { ProgressStepperComponent } from '../components/progress-stepper/progress-stepper.component';
import { BaseFormProducts } from '../models/BaseformProduct';
import { BaseFormLogisticaProducto } from '../components/logistica-producto/models/BaseFormubicacion';
import { GestionDimensionComponent } from '../components/logistica-producto/gestion-dimension/gestion-dimension.component';
import { BaseFormTamanoProducto } from '../components/logistica-producto/models/BaseFormTamano';
import { DataFormProducts } from '../helpers/DataFormProducts';

export const ProductoModuleDeclarations = [
  ProductsComponent, //INDEX PRODUCTOS
  CreateProductsComponent, //CREAR PRODUCTOS
  ListadoProductosComponent, // LISTADO DE PRODUCTOS
  ProgressStepperComponent,
  ConfiguracionProductoComponent, //CONFIGURACION DEL PRODUCTO
  ConfiguracionAtributosComponent, //CONFIGURACION DE LOS PRODUCTOS
  ConfiguracionColorComponent, //CONFIGURACION DEL COLOR
  ImagenProductosComponent, //IMAGEN DEL PRODUCTO
  LogisticaProductoComponent, //LOGITICA DE PRODUCTO
  ImgIconosComponent, //IMAGENES PEQUEÑAS COMPONENTS
  ImgIconosDescripcionComponent,
  FormEtiquetasComponent, //FORM ETIQUETAS
  GestionDimensionComponent, //GESTION COMPONENTS
];
export const ProductModuleImport = [
  GMapModule, //MODULE MAP
  DialogModule, //DIALOG MODULE
  ToastModule, //TOAST MODULE
  ButtonModule, //BUTTON MODULE
];
export const ProductoModuleProviders = [
  BaseFormProducts,
  BaseFormColors,
  BaseFormConfigAtributos,
  BaseFormEtiquetas,
  BaseFormConfigProducts,
  BaseFormTamanoProducto,
  DataFormProducts, //DATA FORMULARIO PRODUCTO ENVIAR
  ImgIconosComponent,
  CreateProductsComponent,
  BaseFormLogisticaProducto,
  ListadoProductosComponent,
];
