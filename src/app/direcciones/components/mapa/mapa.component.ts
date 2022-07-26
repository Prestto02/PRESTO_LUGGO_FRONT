import { Component, OnInit } from '@angular/core';
import { ModalDialog } from '../services/ModalDialogDireccion.service';
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
  constructor(private modal: ModalDialog) {}

  ngOnInit(): void {
    this.options = {
      center: { lat: -2.1604033, lng: -79.9304523 }, //LATITUD Y LONGITUD PARA QUE SALGA EN EL MAPA
      zoom: 12,
    };
    //this.initOverlays();
    this.infoWindow = new google.maps.InfoWindow();
  }

  //AGREGAR EL NUEVA UBICACION Y ABRIR EL MODAL
  handleMapClick(event: any) {
    this.setModalDialog(true);
    this.selectedPosition = event.latLng;
  }
  //SET MODAL DIALOG
  setModalDialog(type: boolean): void {
    this.modal.setStateModal(type);
    this.dialogVisible = this.modal.getStateModal();
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
      /*
        this.messageService.add({
          severity: 'info',
          summary: 'Marker Selected',
          detail: title,
        }); */
    } else {
      /*       this.messageService.add({
          severity: 'info',
          summary: 'Shape Selected',
          detail: '',
        }); */
    }
  }

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
    this.setModalDialog(false);
  }
  //AGREGAR UBICACION DE PRODUCTOS
  addUbicacionProducto() {}

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
