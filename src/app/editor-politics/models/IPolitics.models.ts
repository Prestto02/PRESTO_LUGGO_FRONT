export interface IPolitics {
  ID?: number;
  DocumentName: string;
  DocumentVS: string;
  DocumentLink: string;
  Routefile?: string;
  Permises: number;
  DocHeredate: number;
  latitud: number;
  longitud: number;
}

export interface IPoliticsData {
  id?: number;
  documentName: string;
  documentVS: string;
  documentLink: string;
  routefile?: string;
  permises: number;
  docHeredate: number;
}

interface PoliticsHeader {
  id: string;
  DocumentName: string;
  DocumentVS: string;
  Permises: string;
  opciones: string;
}

export const PoliticsHeaderTable: PoliticsHeader = {
  id: 'Identificador',
  DocumentName: 'Nombre del documento',
  DocumentVS: 'Version',
  Permises: 'Accesible',
  opciones: 'Opciones',
};
