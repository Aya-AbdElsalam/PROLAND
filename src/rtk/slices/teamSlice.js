import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchteam = createAsyncThunk("teamSlice/fetchteam", async () => {
  const res = await fetch("https://aya-abdelsalam.github.io/api/api.json/team");
  const data = await res.json();
  return data;
});

export const deleteteam = createAsyncThunk(
  "teamSlice/deleteteam",
  async (id) => {
    const res = await fetch(
      `https://aya-abdelsalam.github.io/api/api.json/team/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    const res2 = await fetch(
      "https://aya-abdelsalam.github.io/api/api.json/team"
    );
    const data2 = await res2.json();
    return data2;
  }
);

const teamSlice = createSlice({
  initialState: [],
  name: "teamSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchteam.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteteam.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = teamSlice.actions;
export default teamSlice.reducer;
