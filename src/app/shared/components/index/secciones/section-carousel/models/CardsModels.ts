export interface CardsModel {
  id: number;
  img: img[];
  title: string;
  url: string;
  urlText: string;
}

interface img {
  id: number;
  img: string;
  title: string;
  url_detalle_product?: string;
}
