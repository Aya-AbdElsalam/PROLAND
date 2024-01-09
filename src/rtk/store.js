import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import teamSlice from "./slices/teamSlice";
import adminSlice from "./slices/adminSlice";
import usersSlices from "./slices/UsersSlice";
import dashboardSlice from "./slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    productsSlice,
    teamSlice,
    adminSlice,
    usersSlices,
    dashboardSlice,
  },
});
