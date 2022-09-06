export interface IPoliticsArray {
  title: string;
  documentUrl: string;
  documentName: string;
  arrayFoldersPolitics: Array<arrayFoldersPolitics>;
}

interface arrayFoldersPolitics {
  id: string;
  name: string;
  actived: boolean;
}
