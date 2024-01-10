import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchUsers = createAsyncThunk(
  "usersSlices/fetchUsers",
  async () => {
    const res = await fetch("https://prolanddata.onrender.com/users");
    const data = await res.json();
    return data;
  }
);
export const fetchOrders = createAsyncThunk(
  "usersSlices/fetchOrders",
  async () => {
    const res = await fetch("https://prolanddata.onrender.com/orders");
    const data = await res.json();
    return data;
  }
);

const usersSlices = createSlice({
  initialState: {
    users: [],
    orders: [],
  },
  name: "usersSlices",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});
export const {} = usersSlices.actions;
export default usersSlices.reducer;
