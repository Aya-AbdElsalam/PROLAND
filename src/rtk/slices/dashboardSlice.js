import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchDashboardData = createAsyncThunk(
  "dashboardSlice/fetchDashboardData",
  async () => {
    const res = await fetch("https://prolanddata.onrender.com/dashboard_Daily");
    const data = await res.json();
    return data;
  }
);
export const fetchLinearChartToday = createAsyncThunk(
  "dashboardSlice/fetchLinearChartToday",
  async () => {
    const res = await fetch(
      "https://prolanddata.onrender.com/dashboard_chart_linear_today"
    );
    const data = await res.json();
    return data;
  }
);
export const fetchLinearChartMonth = createAsyncThunk(
  "dashboardSlice/fetchLinearChartMonth",
  async () => {
    const res = await fetch(
      "https://prolanddata.onrender.com/dashboard_chart_linear_monthly"
    );
    const data = await res.json();
    return data;
  }
);
export const fetchLinearChartYear = createAsyncThunk(
  "dashboardSlice/fetchLinearChartYear",
  async () => {
    const res = await fetch(
      "https://prolanddata.onrender.com/dashboard_chart_linear_yearly"
    );
    const data = await res.json();
    return data;
  }
);
export const fetchPieChart = createAsyncThunk(
  "dashboardSlice/fetchPieChart",
  async () => {
    const res = await fetch(
      "https://prolanddata.onrender.com/dashboard_chart_pie"
    );
    const data = await res.json();
    return data;
  }
);
export const fetchLineChart = createAsyncThunk(
  "dashboardSlice/fetchLineChart",
  async () => {
    const res = await fetch(
      "https://prolanddata.onrender.com/dashboard_line_chart"
    );
    const data = await res.json();
    return data;
  }
);
export const fetchBarChart = createAsyncThunk(
  "dashboardSlice/fetchBarChart",
  async () => {
    const res = await fetch(
      "https://prolanddata.onrender.com/dashboard_bar_chart"
    );
    const data = await res.json();
    return data;
  }
);
export const fetchGeoChart = createAsyncThunk(
  "dashboardSlice/fetchGeoChart",
  async () => {
    const res = await fetch(
      "https://prolanddata.onrender.com/dashboard_geo_chart"
    );
    const data = await res.json();
    return data;
  }
);
const dashboardSlice = createSlice({
  initialState: {
    loading_daily: false,
    daily: {},
    chart_linear_today: [],
    loading_chart_linear_today: false,
    chart_linear_month: [],
    loading_chart_linear_month: false,
    chart_linear_year: [],
    loading_chart_linear_year: false,
    chart_pie: [],
    loading_chart_pie: false,
    dashboard_line_chart: [],
    loading_dashboard_line_chart: false,
    dashboard_bar_chart: [],
    loading_dashboard_bar_chart: false,
    dashboard_geo_chart: [],
    loading_dashboard_geo_chart: false,
  },
  name: "dashboardSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDashboardData.fulfilled, (state, action) => {
      state.loading_daily = true;
      state.daily = action.payload;
    });
    builder.addCase(fetchLinearChartToday.fulfilled, (state, action) => {
      state.loading_chart_linear_today = true;
      state.chart_linear_today = action.payload;
    });
    builder.addCase(fetchLinearChartMonth.fulfilled, (state, action) => {
      state.loading_chart_linear_month = true;
      state.chart_linear_month = action.payload;
    });
    builder.addCase(fetchLinearChartYear.fulfilled, (state, action) => {
      state.chart_linear_year = true;
      state.chart_linear_year = action.payload;
    });
    builder.addCase(fetchPieChart.fulfilled, (state, action) => {
      state.chart_pie = true;
      state.chart_pie = action.payload;
    });
    builder.addCase(fetchLineChart.fulfilled, (state, action) => {
      state.dashboard_line_chart = true;
      state.dashboard_line_chart = action.payload;
    });
    builder.addCase(fetchBarChart.fulfilled, (state, action) => {
      state.dashboard_bar_chart = true;
      state.dashboard_bar_chart = action.payload;
    });
    builder.addCase(fetchGeoChart.fulfilled, (state, action) => {
      state.dashboard_geo_chart = true;
      state.dashboard_geo_chart = action.payload;
    });
  },
});
export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
