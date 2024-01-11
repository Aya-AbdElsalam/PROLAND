import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://prolanddata.onrender.com/products");
    const data = await res.json();
    return data;
  }
);
export const deleteProducts = createAsyncThunk(
  "productsSlice/deleteProducts",
  async (id) => {
    const res = await fetch(`https://prolanddata.onrender.com/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const res2 = await fetch("https://prolanddata.onrender.com/products");
    const data2 = await res2.json();
    return data2;
  }
);
const productsSlice = createSlice({
  initialState: {
    product: [],
    loading: false,
  },
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = true;
      state.product = action.payload;
    });

    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
