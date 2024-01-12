import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchadmin = createAsyncThunk(
  "adminSlice/fetchadmin",
  async () => {
    const res = await fetch("https://prolanddata.onrender.com/admin");
    const data = await res.json();
    return data;
  }
);
const adminSlice = createSlice({
  initialState: {
    loading: false,
    admin: [],
  },
  name: "adminSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchadmin.fulfilled, (state, action) => {
      state.admin = action.payload;
      state.loading = true;
    });
  },
});
export const {} = adminSlice.actions;
export default adminSlice.reducer;
