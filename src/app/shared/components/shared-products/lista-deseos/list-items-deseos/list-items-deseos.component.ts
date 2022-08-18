import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
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
  @Input('id_list') id_list: number = 0;
  @Input('coleccionDeseo') coleccionDeseo: ReadonlyArray<CollecionUser> = [];
  public urlImg = RepositorioImg.urlRepositorio;
  imgEmptyListDeseos = `${RepositorioImg.urlRepositorio}img/IM%C3%81GENES/lista-deseos/empty-wishlist.png`;
  constructor(
    private apiListDeseos: ListaDeseosService, //LISTADO DESEOS SERVICES
    private addCars: AddCarsOrListDesire,
    public formB: BaseFormListaDeseos,
    private message: MessageFrontEndService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.coleccionDeseo?.currentValue !=
      changes.coleccionDeseo?.previousValue
    ) {
      this.coleccionDeseo = changes.coleccionDeseo.currentValue;
    }
    if (changes.id_list?.currentValue != changes.id_list?.previousValue) {
      this.id_list = changes.id_list.currentValue;
    }
  }
  //AGREGAR AL CARRITO
  agregarAlCarrito(id: number) {
    this.addCars.addProductCars(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
  }
  //ELIMINAR DE LA LISTA DE DESEOS
  eliminarListaDeseos(id: number) {
    this.apiListDeseos.eliminarListaDeseos(id); //ELIMINAR DE LA LISTAff
    //
    /* this.checkIcon.removeCheckDesire(id); //QUITAR EL CHECK DE LOS PRODUCTOS */
  }
  deleteProductBD(id_detalle_lista: number): void {
    this.apiListDeseos
      .deleteListProductCollection(id_detalle_lista)
      .subscribe((res) => {
        this.message.getInfoMessage('Mensaje Informativo', 'Se elimino');
        this.getCollectionId();
      });
  }
  getCollectionId(): void {
    this.apiListDeseos.getColeccionId(this.id_list).subscribe((res) => {
      this.dataListDeseos = res;
    });
  }
  //AGREGAR A LA COLECCION
  editarColeccionProduct(
    id_lista: number,
    id_detalle_articulo: number,
    nombre: string
  ) {
    const form = { id_lista, id_detalle_articulo };
    this.apiListDeseos.putListaColeccion(form).subscribe((res) => {
      this.message.getInfoMessage('Mensaje Informativo', `Se agregro a la lista ${nombre}`);
    });
  }
}
