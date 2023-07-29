import { FileType, FolderType } from "@/interface/DataJSON";
import { ObjectLiteral } from "@/interface/ObjectLiteral";

export function sortArrayObjet<T>(
  inputArray: FileType[] | FolderType[],
  key = "name"
) {
  const arr = inputArray as ObjectLiteral[];
  return arr.sort((a, b) => {
    return a[key].localeCompare(b[key]);
  }) as T[];
}

export function getFileTypeColor(fileName: string, mimeType: string) {
  const extension = fileName.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "doc":
    case "docx":
      return "geekblue";
    case "xls":
    case "xlsx":
    case "csv":
      return "green";
    case "ppt":
    case "pptx":
      return "orange";
    case "pdf":
      return "volcano";
    case "zip":
    case "rar":
      return "purple";
    default:
  }
  switch (mimeType) {
    case "application/vnd.google-apps.document":
      return "geekblue";
    case "application/vnd.google-apps.spreadsheet":
      return "green";
    case "application/vnd.google-apps.presentation":
      return "orange";
    case "application/pdf":
      return "volcano";
    default:
      return "";
  }
}
export function getFileExtension(fileName: string, mimeType: string) {
  const extension = fileName.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "doc":
      return "doc";
    case "docx":
      return "docx";
    case "xls":
      return "xls";
    case "xlsx":
      return "xlsx";
    case "csv":
      return "csv";
    case "ppt":
      return "ppt";
    case "pptx":
      return "pptx";
    case "pdf":
      return "pdf";
    case "zip":
      return "zip";
    case "rar":
      return "zip";
    default:
  }
  switch (mimeType) {
    case "application/vnd.google-apps.document":
      return "doc";
    case "application/vnd.google-apps.spreadsheet":
      return "xls";
    case "application/vnd.google-apps.presentation":
      return "ppt";
    case "application/pdf":
      return "pdf";
    default:
  }
  if (extension?.length && extension?.length <= 4) {
    return extension;
  } else {
    return mimeType;
  }
}

export const errorResponse = (err: any) => {
  let msg = "";

  if (err?.response) {
    msg = err?.response?.status + " " + err?.response?.statusText;
    if (err?.response?.data?.message) {
      msg = err?.response?.data?.message;
    }
  } else {
    msg = err;
  }
  return msg;
};
