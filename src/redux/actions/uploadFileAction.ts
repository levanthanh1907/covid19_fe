import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUploadFileApi } from "../../api/user";

export const uploadFileAction = createAsyncThunk(
  "/uploadFile",
  async (file: any) => {
    const response = await createUploadFileApi(file);
    return response;
  }
);
