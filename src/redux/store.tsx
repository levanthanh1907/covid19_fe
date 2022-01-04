import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import projectReducer from "./reducer/projectReducer";
import roleReducer from "./reducer/roleReducer";
import taskReducer from "./reducer/taskReducer";
import userReducer from "./reducer/userReducer";

const reducer = {
  auth: authReducer,
  user: userReducer,
  role: roleReducer,
  task: taskReducer,
  project: projectReducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
