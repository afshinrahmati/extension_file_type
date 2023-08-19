import { ExtensionFileType } from "../types/ExtensionFile.type";

export class FileExtension {
  hEx(data: Buffer) {
    const magicNumber = data.toString("hex", 0, 8);
    let fileExtension: string;
    if (magicNumber.startsWith("89504e47")) {
      fileExtension = ExtensionFileType.PNG;
    } else if (magicNumber.startsWith("47494638")) {
      fileExtension = ExtensionFileType.GIF;
    } else if (magicNumber.startsWith("25504446")) {
      fileExtension = ExtensionFileType.PDF;
    } else if (magicNumber.startsWith("d0cf11e0")) {
      fileExtension = ExtensionFileType.DOC;
    } else if (magicNumber.startsWith("ffd8ff")) {
      fileExtension = ExtensionFileType.JPEG;
    } else if (magicNumber.startsWith("736163")) {
      fileExtension = ExtensionFileType.TXT;
    } else if (magicNumber.startsWith("4d5a")) {
      fileExtension = ExtensionFileType.EXE;
    } else if (magicNumber.startsWith("504b030414")) {
      fileExtension = ExtensionFileType.XLSX;
    } else if (magicNumber.startsWith("504b0304")) {
      fileExtension = ExtensionFileType.ZIP;
    } else if (magicNumber.startsWith("000000")) {
      fileExtension = ExtensionFileType.MP4;
    } else if (magicNumber.startsWith("494433")) {
      fileExtension = ExtensionFileType.MP3;
    } else if (magicNumber.startsWith("526172211a")) {
      fileExtension = ExtensionFileType.RAR;
    } else if (magicNumber.startsWith("7b2275")) {
      fileExtension = ExtensionFileType.JSON;
    } else {
      fileExtension = "unknown";
    }
    return fileExtension;
  }
  bAse64(data: Buffer) {
    const magicNumber = data.toString("base64").substr(0, 8);
    let fileExtension: string;
    if (magicNumber.startsWith("iVBORw")) {
      fileExtension = ExtensionFileType.PNG;
    } else if (magicNumber.startsWith("R0lGOD")) {
      fileExtension = ExtensionFileType.GIF;
    } else if (magicNumber.startsWith("JVBER")) {
      fileExtension = ExtensionFileType.PDF;
    } else if (magicNumber.startsWith("d0cf11e0")) {
      fileExtension = ExtensionFileType.DOC;
    } else if (magicNumber.startsWith("/9j/")) {
      fileExtension = ExtensionFileType.JPEG;
    } else if (magicNumber.startsWith("c2FjbAo=")) {
      fileExtension = ExtensionFileType.TXT;
    } else if (magicNumber.startsWith("TVqQ")) {
      fileExtension = ExtensionFileType.EXE;
    } else if (magicNumber.startsWith("UEsDBBQA")) {
      fileExtension = ExtensionFileType.XLSX;
    } else if (magicNumber.startsWith("UEsDBA")) {
      fileExtension = ExtensionFileType.ZIP;
    } else if (magicNumber.startsWith("AAAAHGZ0")) {
      fileExtension = ExtensionFileType.MP4;
    } else if (magicNumber.startsWith("SUQzBAAA")) {
      fileExtension = ExtensionFileType.MP3;
    } else if (magicNumber.startsWith("UmFyIQ")) {
      fileExtension = ExtensionFileType.RAR;
    } else if (magicNumber.startsWith("eyJ1cmwi")) {
      fileExtension = ExtensionFileType.JSON;
    } else {
      fileExtension = "unknown";
    }
    return fileExtension;
  }
}
