interface ErrorsDictonary {
  [key: string]: string;
}

export const errosDictonary: ErrorsDictonary = {
  required: 'El campo es obligatorio.',
  email: 'Debe ser un email valido',
  passwordsMustBeEqual: 'Las contraseñas no coinciden',
  checkUserEmail: 'El email ya se encuentra registrado',
};
