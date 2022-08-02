export interface Direcciones {
  id_direccion: string;
  descripcion: string;
  direccion?: string;
  telefono: string;
  latitud_direccion?: number;
  longitud_direccion?: number;
  latitud?: string;
  longitud?: string;
}

export const ArrayDireccion: Direcciones[] = [
  {
    id_direccion: '1',
    direccion:
      'Urdesa Central Ceibos 241, entre la 5ta y la 6ta Guayaquil, Guayas 09987 Ecuador',
    telefono: '987654321',
    descripcion: 'Entregas donde mi esposa',
  },
  {
    id_direccion: '2',
    direccion:
      'Portete y la 39, local 241, entre la 5ta y la 6ta Guayaquil, Guayas 09987 Ecuador',
    telefono: '9876532231',
    descripcion: 'Entregas donde mi mama',
  },
  {
    id_direccion: '3',
    direccion:
      'La caraguay entrando por el McDonnalds, pasando el primer semaforo lado derecho',
    telefono: '987654391',
    descripcion: 'Entregas donde mi trabajo local',
  },
];
