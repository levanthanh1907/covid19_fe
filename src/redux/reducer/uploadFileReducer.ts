import { createSlice } from "@reduxjs/toolkit";
import { IUploadFileState } from "../../interfaces/uploadAvatar/uploadFile";
import { uploadFileAction } from "../actions/uploadFileAction";

const initialState: IUploadFileState = {
  file: {
    fieldname: "",
    originalname: "",
    encoding: "",
    mimetype: "",
    destination: "",
    filename: "",
    path: "",
    size: 0,
  },
  progress: "",
};
const uploadFileSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    resetProgress(state) {
      state.progress = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadFileAction.pending, (state, action) => {
      state.progress = "pending";
    });
    builder.addCase(uploadFileAction.fulfilled, (state, action) => {
      state.progress = "done";
    });
  },
});
export const { resetProgress } = uploadFileSlice.actions;
export default uploadFileSlice.reducer;
