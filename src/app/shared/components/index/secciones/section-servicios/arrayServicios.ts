import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
export interface ServiciosImg {
  id: number;
  name: string;
  img: string;
}
export const arrayServicios: ServiciosImg[] = [
  {
    id: 1,
    name: 'Envíos a todo el Ecuador',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/section-servicios/entrega-envio.png`,
  },
  {
    id: 2,
    name: 'Aceptamos todas las tarjetas',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/section-servicios/tarjetas.png`,
  },
  /*   {
    id: 3,
    name: 'Llama y compra al (04) 600 5454',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/section-servicios/llamadas.png`,
  }, */
  {
    id: 4,
    name: 'Soporte y servicio técnico online',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/section-servicios/atencion-24-7.png`,
  },
  {
    id: 5,
    name: 'Garantía 100% en devoluciones',
    img: `${RepositorioImg.urlRepositorio}img/IMÁGENES/section-servicios/regalos-garantia.png`,
  },
];
