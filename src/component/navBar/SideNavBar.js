import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import {
  Close,
  Dashboard,
  Diversity3,
  People,
  ShoppingBag,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => {
            navigate("../dashboard");
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",

                minWidth: 0,
                mr: props.open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Dashboard />
            </ListItemIcon>
            <ListItemText
              primary="DASHBOARD"
              sx={{ opacity: props.open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ background: "white" }} />
      <List>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => {
            navigate("users");
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",

                minWidth: 0,
                mr: props.open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <People />
            </ListItemIcon>
            <ListItemText
              primary="USERS"
              sx={{ opacity: props.open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => {
            navigate("orders");
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                minWidth: 0,
                mr: props.open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <ShoppingBag />
            </ListItemIcon>
            <ListItemText
              primary="ORDERS"
              sx={{ opacity: props.open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ background: "white" }} />
      <List>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => {
            navigate("team");
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",

                minWidth: 0,
                mr: props.open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Diversity3 />
            </ListItemIcon>
            <ListItemText
              primary="OUR TEAM"
              sx={{ opacity: props.open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => {
            navigate("products");
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                minWidth: 0,
                mr: props.open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LoyaltyIcon />
            </ListItemIcon>
            <ListItemText
              primary="PRODUCTS"
              sx={{ opacity: props.open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
