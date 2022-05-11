import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ValidarYTransformarImagen } from 'src/app/shared/validations/ValidarYTransformarImagen';
import { BaseUsersForm } from '../../models/BaseFormUsers';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-perfil-users',
  templateUrl: './perfil-users.component.html',
  styleUrls: ['./perfil-users.component.css'],
})
export class PerfilUsersComponent implements OnInit {
  imgProducts = '';
  imagenTransformada = '';
  private id: any;
  load = false;
  constructor(
    private serviUser: UsersService, //SERVICIO DE USUARIOS
    private route: Router, //RUTAS PARA REDIRIGIR A OTRO LADO
    private _route: ActivatedRoute, //ROUTER PARA OBTENER EL ID DEL URL
    public formB: BaseUsersForm, //FORMULARIO DE USUARIOS
    private imgValidar: ValidarYTransformarImagen, //VALIDAR IMAGENES Y TRANSFORMAR
    private position: PositionUser //POSITION USER
  ) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.position.getPositionUser(); //OBTENGO LA POSICION DEL USUARIO
    //this.verifcarId();
    //this.getOneIdPersona();
    this.getIdForm();
  }
  //PARCHEAR EL ID DIRECTAMENTE
  getIdForm() {
    if (this.id) {
      this.formB.formUsers.patchValue({ id_usuario: this.id });
    }
  }
  //OBTENER LA IMAGEN PARA TRANSFORMARLA
  getArchive(e: any) {
    const { imgProducts, imagenTransformada } =
      this.imgValidar.getArchiveImagen(e); //OBTENGO LO QUE ME ENVIA EL ARREGLO DE LA IMAGEN
    this.imgProducts = imgProducts; //ASIGNO
    this.imagenTransformada = imagenTransformada; //ASIGNO
  }
  //OBTENER IMAGEN PARA VERIFICAR EN EL SERVER
  getImage(e: any) {
    this.imgValidar.getImageVerifyServer(e); //VERIFICO EN EL SERVER LA IMAGEN
  }
  //TRAER LA PERSONA
  /*  getOneIdPersona() {
    if (this.id)
      this.serviUser.getDataPerson(this.id).subscribe((res) => {
        this.formB.setDatForm(res);
      });
    else
      this.route.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  } */
  //VERIFICAR SI EXISTE EL ID
  verifcarId() {
    if (!this.id)
      this.route.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
  //ACTUALIZZAR DATOS
  actualizarDatos() {
    this.load = false;
    const data = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud
    );
    this.serviUser.putDataPersona(data).subscribe((res) => {
      console.log(res);
      this.load = true;
    });
  }
  //LATITUD Y LONGITUD
  //LIMPIAR FORMULARIO
  limpiar() {
    this.formB.limpiarForm();
  }
}
