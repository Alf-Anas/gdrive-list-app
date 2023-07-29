export interface DataJSONType {
  type: string;
  id: string;
  name: string;
  url: string;
  files: FileType[];
  folders: FolderType[];
}

export interface FileType {
  type: string;
  id: string;
  name: string;
  url: string;
  fileType: string;
  mimeType: string;
  size: number;
  dateCreated: string,
  lastUpdated: string,
}

export interface FolderType {
  type: string;
  id: string;
  name: string;
  url: string;
  size: number;
  dateCreated: string,
  lastUpdated: string,
  files: FileType[];
  folders: FolderType[];
}
