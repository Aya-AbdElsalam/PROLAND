import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import {
  Close,
  Dashboard,
  Diversity3,
  People,
  ShoppingBag,
} from "@mui/icons-material";
import ListNavBar from "./List";

const drawerWidth = 190;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "black",
  color: "white",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "black",
  color: "white",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  backgroundColor: "black",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props) {
  const theme = useTheme();
  const handleDrawerClose = () => {
    props.setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={props.open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon sx={{ fontSize: "30px" }} />
          ) : (
            <Close sx={{ fontSize: "40px" }} />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ background: "white" }} />
      <List>
        <ListNavBar
          open={props.open}
          navigate={"../dashboard"}
          icon={<Dashboard />}
          text={"DASHBOARD"}
        />
      </List>
      <Divider sx={{ background: "white" }} />
      <List>
        <ListNavBar
          open={props.open}
          navigate={"users"}
          icon={<People />}
          text={"USERS"}
        />
        <ListNavBar
          open={props.open}
          navigate={"orders"}
          icon={<ShoppingBag />}
          text={"ORDERS"}
        />
      </List>
      <Divider sx={{ background: "white" }} />
      <List>
        <ListNavBar
          open={props.open}
          navigate={"team"}
          icon={<Diversity3 />}
          text={"OUR TEAM"}
        />
        <ListNavBar
          open={props.open}
          navigate={"products"}
          icon={<LoyaltyIcon />}
          text={"PRODUCTS"}
        />
      </List>
    </Drawer>
  );
}
