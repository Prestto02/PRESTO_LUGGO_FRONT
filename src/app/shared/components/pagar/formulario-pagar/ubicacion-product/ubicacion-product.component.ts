import { Component, OnInit } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-ubicacion-product',
  templateUrl: './ubicacion-product.component.html',
  styleUrls: ['./ubicacion-product.component.css'],
})
export class UbicacionProductComponent implements OnInit {
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
  constructor() {}

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
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }

  eventTarget(e: any) {
    this.markerTitle = e.target.value;
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
    this.dialogVisible = false;
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
