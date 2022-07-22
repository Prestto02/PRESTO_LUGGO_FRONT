import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class ImgGalleryForm {
  constructor(private formB: FormBuilder) {}

  formGallery = this.formB.group({
    multimedia: this.formB.array([
      this.formB.group({
        img: [''],
        archivo: [''],
      }),
      this.formB.group({
        img: [''],
        archivo: [''],
      }),
      this.formB.group({
        img: [''],
        archivo: [''],
      }),
      this.formB.group({
        img: [''],
        archivo: [''],
      }),
    ]),
  });

  get galleryProducts() {
    return this.formGallery.controls['multimedia'] as FormArray;
  }

  addGalleryProducts(archivo: string, i: number, img: any) {
    this.galleryProducts.controls[i].patchValue({
      img: img,
      archivo: archivo,
    });
  }
  limpiarFormulario() {
    this.formGallery.reset();
  }
}
