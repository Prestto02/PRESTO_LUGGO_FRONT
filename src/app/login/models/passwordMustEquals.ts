import {
  AbstractControl,
  UntypedFormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const passwordsMustBeEqual: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  const newPassword = group.get('contrasena') as UntypedFormControl;
  const passwordConfirm = group.get('contrasena_conf') as UntypedFormControl;
  return newPassword.value === passwordConfirm.value
    ? null
    : { passwordsMustBeEqual: true };
};
