import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  }
);
export const deleteProducts = createAsyncThunk(
  "productsSlice/deleteProducts",
  async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const res2 = await fetch("http://localhost:5000/products");
    const data2 = await res2.json();
    return data2;
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
