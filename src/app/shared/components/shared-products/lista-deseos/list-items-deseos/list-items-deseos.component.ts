import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ProductListApi } from '../../models/ProducstList';
import { BaseFormListaDeseos } from '../model/BaseFormListaDeseos.model';
import { CollecionUser } from '../model/ListDesireUser.models';
import { ListaDeseosService } from '../services/lista-deseos.service';

@Component({
  selector: 'app-list-items-deseos',
  templateUrl: './list-items-deseos.component.html',
  styleUrls: ['./list-items-deseos.component.css'],
})
export class ListItemsDeseosComponent implements OnChanges {
  @Input('dataListDeseos') dataListDeseos: any = [];
  @Input('coleccionDeseo') coleccionDeseo: ReadonlyArray<CollecionUser> = [];
  public urlImg = RepositorioImg.urlRepositorio;
  imgEmptyListDeseos = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/lista-deseos/empty-wishlist.png`;
  constructor(
    private apiListDeseos: ListaDeseosService, //LISTADO DESEOS SERVICES
    private addCars: AddCarsOrListDesire,
    public formB: BaseFormListaDeseos
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    /*   if (
      changes.coleccionDeseo.currentValue !=
      changes.coleccionDeseo.previousValue
    ) {
      this.coleccionDeseo = changes.coleccionDeseo.currentValue;
    } */
  }
  //AGREGAR AL CARRITO
  agregarAlCarrito(id: number) {
    this.addCars.addProductCars(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
  }
  //ELIMINAR DE LA LISTA DE DESEOS
  eliminarListaDeseos(id: number, id_detalle_arcitulo?: number) {
    this.apiListDeseos.eliminarListaDeseos(id); //ELIMINAR DE LA LISTAff
    if (id_detalle_arcitulo) {
      this.apiListDeseos.deleteListProductCollection(id).subscribe((res) => {
        console.log(res);
      });
    }
    //
    /* this.checkIcon.removeCheckDesire(id); //QUITAR EL CHECK DE LOS PRODUCTOS */
  }
  //AGREGAR A LA COLECCION
  editarColeccionProduct(id_detalle_articulo: number, id_lista: number) {
    const form = { id_detalle_articulo, id_lista };
    this.apiListDeseos.putListaColeccion(form).subscribe((res) => {
      console.log(res);
    });
  }
}
