import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBarChart,
  fetchDashboardData,
  fetchGeoChart,
  fetchLineChart,
  fetchLinearChartMonth,
  fetchLinearChartToday,
  fetchLinearChartYear,
  fetchPieChart,
} from "../rtk/slices/dashboardSlice";
import { Box, Container, Paper, Stack, Tab, Typography } from "@mui/material";
import DashBoard from "../component/dashboard/Dashboard";
import {
  AttachMoney,
  Dashboard,
  RemoveRedEye,
  ShoppingBag,
} from "@mui/icons-material";
import LinearChart from "../component/dashboard/LinearChart";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MyResponsivePie from "../component/dashboard/PieChart";
import MyResponsiveLine from "../component/dashboard/LineChart";
import MyResponsiveBar from "../component/dashboard/BarChart";
import GeoChath from "../component/dashboard/GeoChart";
import TableUsers from "../component/Grid/userTable";
import { fetchOrders, fetchUsers } from "../rtk/slices/UsersSlice";
import OrdersTable from "../component/Grid/OrderTable";

export default function DashBoardHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboardData());
    dispatch(fetchLinearChartToday());
    dispatch(fetchLinearChartMonth());
    dispatch(fetchLinearChartYear());
    dispatch(fetchPieChart());
    dispatch(fetchLineChart());
    dispatch(fetchBarChart());
    dispatch(fetchGeoChart());
    dispatch(fetchUsers());
    dispatch(fetchOrders());
  }, []);
  const dailyData = useSelector((state) => {
    return state.dashboardSlice.daily;
  });
  const linearChatToyday = useSelector((state) => {
    return state.dashboardSlice.chart_linear_today;
  });
  const linearChatMonth = useSelector((state) => {
    return state.dashboardSlice.chart_linear_month;
  });
  const linearChatYear = useSelector((state) => {
    return state.dashboardSlice.chart_linear_year;
  });
  const PieChart = useSelector((state) => {
    return state.dashboardSlice.chart_pie;
  });
  const LineChart = useSelector((state) => {
    return state.dashboardSlice.dashboard_line_chart;
  });
  const BarChart = useSelector((state) => {
    return state.dashboardSlice.dashboard_bar_chart;
  });
  const GeoChart = useSelector((state) => {
    return state.dashboardSlice.dashboard_geo_chart;
  });
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const users = useSelector((state) => {
    return state.usersSlices.users;
  });

  const rowsuser = [
    users.map((t) => {
      return {
        id: t.id,
        fullName: t.Name,
        phone: t.phone,
        email: t.email,
        country: t.country,
        TotalBuy: t.TotalBuy,
      };
    }),
  ];
  const rowsUser = rowsuser[0].slice(0, 4);
  const orders = useSelector((state) => {
    return state.usersSlices.orders;
  });

  const rowsorders = [
    orders.map((t) => {
      return {
        id: t.id,
        Customer: t.Customer,
        Email: t.Email,
        Phone: t.Phone,
        item: t.item,
        price: t.price,
        date: t.date,
        status: t.status,
        payment: t.payment,
      };
    }),
  ];
  const rowsOrders = rowsorders[0].slice(0, 4);

  return (
    <Container>
      <Box
        fontWeight={"bold"}
        fontSize={"25px"}
        sx={{ borderBottom: "3px solid", marginBottom: "20px" }}
      >
        <Dashboard sx={{ marginRight: "10px", fontSize: "30px" }} />
        {`DASHBOARD`}
      </Box>
      <Stack gap={5} height={"94%"} overflow={"hidden"}>
        <Stack direction={"row"} flexWrap={"wrap"} gap={6}>
          <DashBoard
            data={dailyData.Visitors}
            title={"Daily Visitors"}
            icon={<RemoveRedEye fontSize="50px" />}
          />
          <DashBoard
            data={dailyData.Order}
            title={"Daily Order"}
            icon={<ShoppingBag fontSize="50px" />}
          />
          <DashBoard
            data={`${dailyData.Revenue}EGP`}
            title={"Daily Revenue"}
            icon={<AttachMoney fontSize="50px" />}
          />
        </Stack>
        <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
          <Paper elevation={3} sx={{ width: "220px", flexGrow: "4" }}>
            <Typography
              my={2}
              mx={2}
              variant="h5"
              borderBottom={"1px solid var(--p--main)"}
              fontWeight={"bold"}
            >
              Sales Report
            </Typography>
            <Box sx={{ typography: "body1", height: "500px", width: "100%" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Toyday's" value="1" />
                    <Tab label="Monthly" value="2" />
                    <Tab label="Yearly" value="3" />
                  </TabList>
                </Box>
                <TabPanel
                  value="1"
                  sx={{ width: "100%", height: "80%", padding: 0 }}
                >
                  <LinearChart data={linearChatToyday} />
                </TabPanel>
                <TabPanel
                  value="2"
                  sx={{ width: "100%", height: "80%", padding: 0 }}
                >
                  <LinearChart data={linearChatMonth} />
                </TabPanel>
                <TabPanel
                  value="3"
                  sx={{ width: "100%", height: "80%", padding: 0 }}
                >
                  <LinearChart data={linearChatYear} />
                </TabPanel>
              </TabContext>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{ width: "220px", flexGrow: "1" }}>
            <Typography
              my={2}
              mx={2}
              variant="h5"
              borderBottom={"1px solid var(--p--main)"}
              fontWeight={"bold"}
            >
              Sales Report
            </Typography>

            <MyResponsivePie data={PieChart} />
          </Paper>
        </Stack>
        <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
          <Paper elevation={3} sx={{ width: "220px", flexGrow: "4" }}>
            <Typography
              my={2}
              mx={2}
              variant="h5"
              borderBottom={"1px solid var(--p--main)"}
              fontWeight={"bold"}
            >
              User Activity
            </Typography>
            <MyResponsiveLine data={LineChart} />
          </Paper>
          <Paper elevation={3} sx={{ width: "220px", flexGrow: "1" }}>
            <Typography
              my={2}
              mx={2}
              variant="h5"
              borderBottom={"1px solid var(--p--main)"}
              fontWeight={"bold"}
            >
              Current Users
            </Typography>
            <MyResponsiveBar data={BarChart} />
          </Paper>
        </Stack>
        <Stack
          direction={"row"}
          gap={3}
          flexWrap={"wrap"}
          height={"400px"}
          width={"100%"}
        >
          <Paper
            elevation={3}
            sx={{ width: "100%", flexGrow: "1", height: "400px" }}
          >
            <Typography
              my={2}
              mx={2}
              variant="h5"
              borderBottom={"1px solid var(--p--main)"}
              fontWeight={"bold"}
            >
              Purchased by Country
            </Typography>
            <GeoChath data={GeoChart} />
          </Paper>
        </Stack>
        <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
          <Paper
            elevation={3}
            sx={{
              height: "100%",
              width: "220px",
              flexGrow: "1",
              overflowX: "auto",
              flexBasis: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              my={2}
              mx={2}
              variant="h5"
              borderBottom={"1px solid var(--p--main)"}
              fontWeight={"bold"}
            >
              New Customers
            </Typography>
            <Box width={"1000px"} flexBasis={"100%"}>
              <TableUsers rows={rowsUser} />
            </Box>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              height: "100%",
              width: "220px",
              flexGrow: "1",
              overflowX: "auto",
              flexBasis: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              my={2}
              mx={2}
              variant="h5"
              borderBottom={"1px solid var(--p--main)"}
              fontWeight={"bold"}
            >
              Recent Orders
            </Typography>
            <Box width={"1000px"} flexBasis={"100%"}>
              <OrdersTable rows={rowsOrders} />
            </Box>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
}
