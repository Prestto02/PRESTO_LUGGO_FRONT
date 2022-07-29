import { Component, Input, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { FormDireccion } from '../../models/BaseFormDireccion';
import { Direcciones } from '../../models/Direcciones.models';
import { ListDireccionesComponent } from '../list-direcciones/list-direcciones.component';
import { DireccionUsersService } from '../services/direccion-users.service';
declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  counter: number = 0;

  options: any;

  overlays: any = [];

  dialogVisible: boolean = false;

  markerTitle?: string | null;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean = false;

  latitud: any;
  longitud: any;
  constructor(
    public formB: FormDireccion,
    private api: DireccionUsersService,
    private position: PositionUser,
    private component: ListDireccionesComponent
  ) {}
  ngOnInit(): void {
    this.options = {
      center: { lat: -2.1604033, lng: -79.9304523 }, //LATITUD Y LONGITUD PARA QUE SALGA EN EL MAPA
      zoom: 12,
    };
    //this.initOverlays();
    this.position.getPositionUser();
    this.infoWindow = new google.maps.InfoWindow();
  }
  //AGREGAR EL NUEVA UBICACION Y ABRIR EL MODAL
  handleMapClick(event: any) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
    this.setLatitudLongitud();
  }
  /* SETEAR DIRECTAMENTE LA LATITUD Y LONGITUD */
  setLatitudLongitud(): void {
    this.formB.formDireccion.patchValue({
      latitud_direccion: this.selectedPosition.lat(),
      longitud_direccion: this.selectedPosition.lng(),
      latitud: this.position.latitud,
      longitud: this.position.longitud,
    });
  }
  eventTarget(e: any) {
    this.markerTitle = e.target.value;
  }

  onChangeDrag(e: any) {
    if (e.target.checked) this.draggable = true;
    else this.draggable = false;
  }

  closeModal() {
    this.dialogVisible = false;
  }

  handleOverlayClick(event: any) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());
    }
  }
  /* AGREGAR LA NUEVA UBICACION */
  addMarker() {
    if (this.overlays.length > 0) {
      this.overlays.pop();
    }
    this.overlays.push(
      new google.maps.Marker({
        position: {
          lat: this.selectedPosition.lat(),
          lng: this.selectedPosition.lng(),
        },
        title: this.markerTitle,
        draggable: this.draggable,
      })
    );
    this.addUbicacionProducto(); //AGREGAR NUEVA UBICACION DEL PRODUCTOS
    this.markerTitle = null;
    this.dialogVisible = false;
  }
  //AGREGAR UBICACION DE PRODUCTOS
  addUbicacionProducto() {
    const form = this.formB.formDireccion.value;
    this.api.postDireccion(form).subscribe((res: any) => {
      this.formB.limpiarFormulario();
      this.component.getAllDirecciones();
    });
  }

  handleDragEnd(event: any) {}
  zoomIn(map: any) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map: any) {
    map.setZoom(map.getZoom() - 1);
  }

  clear() {
    this.overlays = [];
  }
}
