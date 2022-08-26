export interface IPolitics {
  id: number;
  DocumentName: string;
  DocumentVS: string;
  DocumentLink: string;
  Routefile: string;
  Permises: number;
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
