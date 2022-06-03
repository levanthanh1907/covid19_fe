export interface IGetAllReq {
  id: number;
  userName: string;
  password: string;
  timeEnd: string;
  timeStart: string;
  emailAddress: string;
  name: string;
  surname: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  roleNames: string;
  avatarPath: string;
  TreatmentHospital: number;
  sex: number;
}

export interface IGetAllRes {
  result: IGetAllReq[];
}

export interface ICreateUserReq {
  id?: number;
  userName: string;
  password: string;
  timeEnd: string;
  timeStart: string;
  emailAddress: string;
  name: string;
  surname: string;
  address: string;
  phoneNumber: string;
  roleNames: string;
  avatarPath: string;
  TreatmentHospital: number;
  sex: number;
}

export interface ICreateUserRes {
  result: ICreateUserReq[];
}

export interface IUserReq {
  id: number;
  userName: string;
  password: string;
  timeEnd: string;
  timeStart: string;
  emailAddress: string;
  name: string;
  surname: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  roleNames: string;
  avatarPath: string;
  TreatmentHospital: number;
  sex: number;
}

export interface IUserRes {
  result: IUserReq[];
}

export interface IUserNotPagging {
  id: number;
  fullName: string;
  type: number;
  avatarPath: string;
  TreatmentHospital: number;
  projectType?: number;
  address: string;
  phoneNumber: string;
  sex: number;
  roleNames: string;
}

export interface IUserNotPaggingRes {
  result: IUserNotPagging[];
}
