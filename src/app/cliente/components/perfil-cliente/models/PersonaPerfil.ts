export interface IUsers {
  id_usuario?: number;
  sexo: string;
  nombre1: string;
  nombre2: string;
  apellido1: string;
  apellido2: string;
  cedula: string;
  datoperson?: {
    direccion1: string;
    direccion2?: string;
    celular: string;
    telefono?: string;
    fechaNacimiento?: string;
  };
  latitud?: number;
  longitud?: number;
}

export const PerfilPersonaSecciones = [
  {
    id: 1,
    title: 'Datos Personales',
    disabled: false,
  },
/*   {
    id: 2,
    title: 'Información Adicional',
    disabled: true,
  }, */
];
