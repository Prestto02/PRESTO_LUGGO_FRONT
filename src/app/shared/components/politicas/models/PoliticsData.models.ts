export interface IPoliticsArray {
  title: string;
  documentUrl: string;
  arrayFoldersPolitics: Array<arrayFoldersPolitics>;
}

interface arrayFoldersPolitics {
  id: string;
  name: string;
  actived: boolean;
}
