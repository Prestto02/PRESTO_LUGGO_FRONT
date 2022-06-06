import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/manager-vendedor/productos/services/products.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { MessageFrontEndService } from '../Toasts/services/message-front-end.service';

@Injectable({ providedIn: 'root' })
export class ValidarYTransformarImagen {
  imgProducts = '';
  imagenTransformada = '';
  constructor(
    private messageFront: MessageFrontEndService, //MENSAJES DE ERRORES
    private apiProducts: ProductsService, //SERVICES PRODUCTOS
  ) {}

  getArchiveImagen(e: any): any {
    const buscar = ',';
    if (
      e[0].type === 'image/png' ||
      e[0].type === 'image/jpg' ||
      e[0].type === 'image/jpeg'
    ) {
      //VALIDO SI LA IMAGEN ES DE ESE FORMATO
      this.imgProducts = e[0].base64; //OBTENGO DEL ARRAY LA BASE 64
      const index = this.imgProducts.indexOf(buscar); //BUSCO LA , DEL BASE 64
      this.imagenTransformada = this.imgProducts.slice(index + 1); //ENCONTRADO LA POSICION DE LA , ENViARLA A LA API
      return {
        imgProducts: this.imgProducts,
        imagenTransformada: this.imagenTransformada,
      }; //RETORNO EL OBJETO PARA IMG PRODUCTOS Y LA IMAGEN TRANSFORMADA
    } else {
      this.messageFront.getWarningMessage(
        message.Warning.title,
        message.Warning.imagenes
      ); //MENSAJE TOAST
    }
  }
  getImageVerifyServer(e: any) {
    const file = e.target.files[0]; //LA POSICION TARGET DE LA IMAGEN
    const formData = new FormData(); //CREO EL FORM DATA PARA ENVIARLO AL SERVIDOR
    formData.append('files', file); //ASIGNO A LA VARIABLE FILES LO QUE TENGO EN EL TARGET
    //VALIDACION BACKEND
   /*  this.apiProducts.postVerifyImg(formData).subscribe(
      //HAGO LA PETICION
      (res) => {
        return res;
      },
      (err) => {
        return err.error;
      }
    ); */
  }
}
