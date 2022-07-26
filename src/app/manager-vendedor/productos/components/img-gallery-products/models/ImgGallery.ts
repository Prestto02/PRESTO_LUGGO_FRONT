import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class ImgGalleryForm {
  constructor(private formB: FormBuilder) {}

  formGallery = this.formB.group({
    multimedia: this.formB.array([
      this.formB.group({
        Id_repositorio: [0],
        img: [''],
        archivo: [''],
      }),
      this.formB.group({
        Id_repositorio: [0],
        img: [''],
        archivo: [''],
      }),
      this.formB.group({
        Id_repositorio: [0],
        img: [''],
        archivo: [''],
      }),
      this.formB.group({
        Id_repositorio: [0],
        img: [''],
        archivo: [''],
      }),
    ]),
  });

  get galleryProducts() {
    return this.formGallery.controls['multimedia'] as FormArray;
  }

  addGalleryProducts(archivo: string, i: number, img: any, id?: number) {
    if (id) {
      this.galleryProducts.controls[i].patchValue({
        img: img,
        archivo: archivo,
        Id_repositorio: id,
      });
    } else {
      this.galleryProducts.controls[i].patchValue({
        img: img,
        archivo: archivo,
      });
    }
  }
  limpiarFormularioString() {
    this.galleryProducts.controls.map((res) => {
      res.patchValue({
        img: '',
      });
    });
  }
  limpiarFormulario() {
    this.formGallery.reset();
  }
}
