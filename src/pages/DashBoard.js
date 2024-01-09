import React from "react";
import MiniDrawer from "../component/navBar/SideNavBar";
import { Box, styled } from "@mui/material";
import NavBar from "../component/navBar/NavBar";
import { Outlet } from "react-router-dom";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function DashBoard() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box
        sx={{ display: "flex", overflow: "auto" }}
        minHeigh={"75vh"}
        width={"100%"}
      >
        <NavBar open={open} setOpen={setOpen} />
        <MiniDrawer open={open} setOpen={setOpen} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
