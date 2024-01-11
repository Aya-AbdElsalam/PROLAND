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
    loading_users: false,
    users: [],
    loading_orders: false,
    orders: [],
  },
  name: "usersSlices",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading_users = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading_orders = true;
    });
  },
});
export const {} = usersSlices.actions;
export default usersSlices.reducer;
