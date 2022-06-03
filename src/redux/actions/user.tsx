import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserApi,
  deleteUserApi,
  getAll,
  updateUserApi,
} from "../../api/user";
import { ICreateUserReq, IUserReq } from "../../interfaces/user/userType";

export const getAllActions = createAsyncThunk("/User/GetAll", async () => {
  const response = await getAll();
  return response;
});

export const deleteUserActions = createAsyncThunk(
  "/User/DeleteUser",
  async (id: number) => {
    const response = { ...(await deleteUserApi(id)), id };
    return response;
  }
);

export const createUserActions = createAsyncThunk(
  "/User/CreateUser",
  async ({
    id,
    userName,
    password,
    timeStart,
    timeEnd,
    emailAddress,
    name,
    surname,
    address,
    phoneNumber,
    roleNames,
    avatarPath,
    TreatmentHospital,
    sex,
  }: ICreateUserReq) => {
    const create = await createUserApi({
      id,
      userName,
      password,
      timeStart,
      timeEnd,
      emailAddress,
      name,
      surname,
      address,
      phoneNumber,
      roleNames,
      avatarPath,
      TreatmentHospital,
      sex,
    });
    return create as { result: IUserReq };
  }
);
export const updateUserActions = createAsyncThunk(
  "/User/UpdateUser",
  async ({
    id,
    userName,
    password,
    timeStart,
    timeEnd,
    emailAddress,
    name,
    surname,
    address,
    phoneNumber,
    roleNames,
    avatarPath,
    TreatmentHospital,
    sex,
  }: ICreateUserReq) => {
    const update = await updateUserApi({
      id,
      userName,
      password,
      timeStart,
      timeEnd,
      emailAddress,
      name,
      surname,
      address,
      phoneNumber,
      roleNames,
      avatarPath,
      TreatmentHospital,
      sex,
    });
    return update as { result: IUserReq };
  }
);
