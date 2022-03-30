import { Component, OnInit } from '@angular/core';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { BaseFormProducts } from '../../models/BaseformProduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  imgProducts = '';
  imagenTransformada = '';
  constructor(
    private position: PositionUser,
    public formB: BaseFormProducts,
    private apiService: ProductsService
  ) {}

  ngOnInit(): void {
    this.position.getPositionUser();
  }

  getArchive(e: any) {
    const buscar = ',';
    this.imgProducts = e[0].base64;
    const index = this.imgProducts.indexOf(buscar); //BUSCO LA , DEL BASe 64
    this.imagenTransformada = this.imgProducts.slice(index + 1); //ENCONTRADO LA POSICION DE LA , ENViARLA A LA API
  }
  submit() {
    this.formB.formProducts.patchValue({ archivo: this.imagenTransformada });
    const dataForm = this.formB.getDataForm(
      this.position.latitud,
      this.position.longitud
    );
    this.apiService.postDataArticulo(dataForm).subscribe((res) => {
      console.log(res);
    });
    console.log(dataForm);
  }
}
