import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfiguracionAtributosComponent } from '../components/configuracion-producto/configuracion-atributos/configuracion-atributos.component';
import { BaseFormConfigAtributos } from '../components/configuracion-producto/configuracion-atributos/models/BaseFormConfigAtributos';
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
import { FilterMarcaPipe } from '../components/create-products/pipe/filter-marca.pipe';
import { SelectAtributosComponent } from '../components/configuracion-producto/select-atributos/select-atributos.component';
import { TercerPasoComponent } from '../components/tercer-paso/tercer-paso.component';
import { BaseFormGlobalPrecio } from '../components/configuracion-producto/configuracion-atributos/models/BasePrecioGlobal';
import { ConfiguracionProductosTerceraComponent } from '../components/configuracion-productos-tercera/configuracion-productos-tercera.component';
import { BaseFormAtributosConfig } from '../components/configuracion-productos-tercera/models/BaseFormAtrtibutos';
import { BaseFormConfigAtributos2 } from '../components/configuracion-producto/configuracion-atributos/models/BaseFormConfigAtributos2';
import {
  DeclarationEditProduct,
  ProviderEditProduct,
} from '../components/edit-product/module/edit-product.module';

export const ProductoModuleDeclarations = [
  ProductsComponent, //INDEX PRODUCTOS
  CreateProductsComponent, //CREAR PRODUCTOS
  ListadoProductosComponent, // LISTADO DE PRODUCTOS
  ProgressStepperComponent,
  ConfiguracionProductoComponent, //CONFIGURACION DEL PRODUCTO
  ConfiguracionAtributosComponent, //CONFIGURACION DE LOS PRODUCTOS
  ImagenProductosComponent, //IMAGEN DEL PRODUCTO
  LogisticaProductoComponent, //LOGITICA DE PRODUCTO
  ImgIconosComponent, //IMAGENES PEQUEÑAS COMPONENTS
  SelectAtributosComponent, //SELECCION POR ATRIBUTOS
  ImgIconosDescripcionComponent, //IMG ICONOS DESCRIPCION COMPONENTES
  FormEtiquetasComponent, //FORM ETIQUETAS
  GestionDimensionComponent, //GESTION COMPONENTS
  FilterMarcaPipe, //FILTER PIPE DE MARCAS
  TercerPasoComponent, //TERCER PASO DEL PRODUCTO
  ConfiguracionProductosTerceraComponent,
  DeclarationEditProduct, //EDITAR LOS PRODUCTOS
];
export const ProductModuleImport = [
  GMapModule, //MODULE MAP
  DialogModule, //DIALOG MODULE
  ToastModule, //TOAST MODULE
  ButtonModule, //BUTTON MODULE
];
export const ProductoModuleProviders = [
  BaseFormProducts,
  BaseFormConfigAtributos,
  BaseFormEtiquetas,
  BaseFormConfigProducts,
  BaseFormTamanoProducto,
  DataFormProducts, //DATA FORMULARIO PRODUCTO ENVIAR
  ImgIconosComponent,
  CreateProductsComponent,
  BaseFormGlobalPrecio,
  BaseFormLogisticaProducto,
  ListadoProductosComponent,
  BaseFormConfigAtributos2, //OPCIONAL ATRIBUTOS 2 PARTE
  BaseFormAtributosConfig, //ATRIBUTOS CONFIGURACION
  ProviderEditProduct, //BASE FORM EDIT PRODUCT
];
