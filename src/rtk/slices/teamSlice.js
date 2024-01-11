import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchteam = createAsyncThunk("teamSlice/fetchteam", async () => {
  const res = await fetch("https://prolanddata.onrender.com/team");
  const data = await res.json();
  return data;
});

export const deleteteam = createAsyncThunk(
  "teamSlice/deleteteam",
  async (id) => {
    const res = await fetch(`https://prolanddata.onrender.com/team/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const res2 = await fetch("https://prolanddata.onrender.com/team");
    const data2 = await res2.json();
    return data2;
  }
);

const teamSlice = createSlice({
  initialState: {
    loading: false,
    team: [],
  },
  name: "teamSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchteam.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchteam.fulfilled, (state, action) => {
      state.loading = true;
      state.team = action.payload;
    });

    builder.addCase(deleteteam.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export const {} = teamSlice.actions;
export default teamSlice.reducer;
