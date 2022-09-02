export interface IPolitics {
  id?: number;
  documentName: string;
  documentVS: string;
  documentLink: string;
  routefile?: string;
  permises: number;
  docHeredate: number;
  latitud: number;
  longitud: number;
}

export interface IPoliticsData {
  id?: string;
  documentName: string;
  documentVS: string;
  documentLink: string;
  routefile: string;
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
