import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MuiAppBar from "@mui/material/AppBar";
import MenuItem from "@mui/material/MenuItem";
import { LoginOutlined, RocketLaunchOutlined } from "@mui/icons-material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Stack, useTheme } from "@mui/material";
import { Link } from "react-scroll";
import { styled } from "@mui/material/styles";
import "./NavBar.css";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 190;
const pages = ["PRODUCT", "FEATURES", "REVIEWS", "CONTACT"];
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NavBar(props) {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isScroll, setIsScroll] = React.useState(false);
  const theme = useTheme();
  const handleOpenNavMenu = React.memo((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  return (
    <AppBar
      position="fixed"
      open={props.open}
      sx={{
        backgroundColor:
          isScroll && !path.includes("dashboard")
            ? theme.palette.common.white
            : path.includes("dashboard")
            ? theme.palette.common.black
            : "transparent",
        color:
          isScroll && !path.includes("dashboard")
            ? theme.palette.common.black
            : theme.palette.common.white,
        transition: "all 1s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {path.includes("dashboard") && (
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  handleDrawerOpen();
                }}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(props.open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          )}
          <Stack
            direction={"row"}
            sx={{
              border: { xs: "0px solid", md: "1px solid" },
              padding: { md: 1, xs: 0 },
            }}
          >
            <Link
              className="logoHome"
              to={"PROLAND"}
              spy={true}
              smooth={true}
              offset={-180}
              duration={1000}
              style={{ flexGrow: 1, display: "flex" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <RocketLaunchOutlined
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                PROLAND
              </Typography>
            </Link>
          </Stack>

          {path === "/" && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                  handleOpenNavMenu();
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={1000}
                      sx={{
                        width: " 100%",
                        height: "100%",
                        display: "inline-block ",
                      }}
                      to={page}
                    >
                      <Typography
                        textAlign="center"
                        fontWeight={"bold"}
                        fontSize={"16px"}
                      >
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <Link
            className="logoHome"
            to={"PROLAND"}
            spy={true}
            smooth={true}
            offset={-180}
            duration={1000}
            style={{ flexGrow: 1, display: "flex" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <RocketLaunchOutlined
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PROLAND
            </Typography>
          </Link>
          {path === "/" && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  sx={{
                    width: " 100%",
                    height: "100%",
                    display: "inline-block ",
                  }}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    fontWeight={"bold"}
                    fontSize={"17px"}
                    sx={{
                      my: 2,
                      fontSize: "17px",
                      display: "block",
                      color: isScroll
                        ? theme.palette.common.black
                        : theme.palette.common.white,
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 0 }}>
            {localStorage.getItem("user") ? (
              <>
                {!path.includes("dashboard") && (
                  <Tooltip title={"Admin panel"}>
                    <AdminPanelSettingsIcon
                      onClick={() => {
                        navigate("../dashboard");
                      }}
                      sx={{ fontSize: 30, cursor: "pointer", marginRight: 3 }}
                    />
                  </Tooltip>
                )}
                <Tooltip title={"Log Out"}>
                  <LoginOutlined
                    sx={{ fontSize: 30, cursor: "pointer" }}
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/");
                    }}
                  />
                </Tooltip>
              </>
            ) : (
              <Tooltip title={"Admin panel"}>
                <AdminPanelSettingsIcon
                  onClick={() => {
                    localStorage.getItem("user")
                      ? navigate("dashboard")
                      : navigate("signIn");
                  }}
                  sx={{ fontSize: 30, cursor: "pointer" }}
                />
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
