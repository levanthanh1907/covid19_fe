export interface IUploadFileRes {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
}

export interface IUploadFileState {
    file: IUploadFileRes;
    progress: string;
}
