export interface DocumentInterface {
  id: number,
  name: string,
  author: string,
  path: string
}

export class DocumentModel {
  constructor(
    public name: string = '',
    public authorId: string = '',
    public file: File|null,
  ) {
  }
}
