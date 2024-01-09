import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchadmin = createAsyncThunk(
  "adminSlice/fetchadmin",
  async () => {
    const res = await fetch("http://localhost:5000/admin");
    const data = await res.json();
    return data;
  }
);
const adminSlice = createSlice({
  initialState: [],
  name: "adminSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchadmin.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = adminSlice.actions;
export default adminSlice.reducer;
