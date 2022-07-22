import { AtributosDescripcionComponent } from '../atributos-descripcion/atributos-descripcion.component';
import { SeparedComaColorBg } from '../atributos-descripcion/pipe/SeparedColorsBg.pipe';
import { ButtonAddOrListComponent } from '../button-add-or-list/button-add-or-list.component';
import { DetalleProductosComponent } from '../detalle-productos.component';
import { InputProductsComponents } from '../product-description/input-products/input-products.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { GalleriaModule } from 'primeng/galleria';

export const DetalleProductDecalarations = [
  DetalleProductosComponent,
  InputProductsComponents,
  ProductDescriptionComponent, //PRODUCTO DESCRIPTION
  AtributosDescripcionComponent, //ATRIBUTOS DESCRIPCION COMPONENT
  ButtonAddOrListComponent, //ADD OR LIST COMPONENT
  SeparedComaColorBg,
];

export const DetalleProductModule = [GalleriaModule];
