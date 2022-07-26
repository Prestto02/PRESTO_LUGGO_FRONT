export interface Direcciones {
  id: number;
  ubicacion: string;
  celular: number;
  nombre: string;
}

export const ArrayDireccion: Direcciones[] = [
  {
    id: 1,
    ubicacion:
      'Urdesa Central Ceibos 241, entre la 5ta y la 6ta Guayaquil, Guayas 09987 Ecuador',
    celular: 987654321,
    nombre: 'Entregas donde mi esposa',
  },
  {
    id: 2,
    ubicacion:
      'Portete y la 39, local 241, entre la 5ta y la 6ta Guayaquil, Guayas 09987 Ecuador',
    celular: 9876532231,
    nombre: 'Entregas donde mi mama',
  },
  {
    id: 3,
    ubicacion:
      'La caraguay entrando por el McDonnalds, pasando el primer semaforo lado derecho',
    celular: 987654391,
    nombre: 'Entregas donde mi trabajo local',
  },
];
