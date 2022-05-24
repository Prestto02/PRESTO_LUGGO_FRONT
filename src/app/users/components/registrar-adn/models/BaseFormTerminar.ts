import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormTerminarAdn {
  constructor(private formB: FormBuilder) {}
  formTerminar = this.formB.group({
    DondeEres: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
    FechaNacimiento: ['', [Validators.required]],
    ComoTeDescribes: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
      ],
    ],
  });
}
