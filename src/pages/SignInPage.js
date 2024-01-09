import { Alert, Box, Typography } from "@mui/material";
import bg from "../images/bgSignIn.webp";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AssignmentInd } from "@mui/icons-material";
import { Button } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { fetchadmin } from "../rtk/slices/adminSlice";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const admin = useSelector((state) => {
    return state.adminSlice;
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchadmin());
  }, []);
  function SignIn() {
    if (admin[0].user !== user || admin[0].pass !== pass) {
      setError(true);
    } else {
      localStorage.setItem("user", user);
      navigate("../dashboard");
    }
  }
  return (
    <>
      <Box
        display={"flex"}
        sx={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          color: "#a5aeb3",
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
        }}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            zIndex: 0,
            position: "absolute",
            background: "black",
            opacity: 0.5,
            height: "100%",
          }}
          width={"100%"}
        ></Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "max--content",
            fontSize: "16px",
            zIndex: "5",
            position: "relative",
            backgroundColor: "white",
            padding: "18px",
            borderRadius: "10px",
            color: "white",
            alignItems: "center",
            background: "#0000006b",
            width: "70%",
          }}
        >
          <Typography variant="h4" fontWeight={"bold"} marginBottom={2}>
            WELCOME
          </Typography>
          {/*  */}
          <FormControl
            sx={{ m: 1, width: "90%", background: "var(--p--main)" }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-user">UserName</InputLabel>
            <FilledInput
              sx={{ color: "white" }}
              id="filled-adornment-user"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" sx={{ color: "white" }}>
                    <AssignmentInd />
                  </IconButton>
                </InputAdornment>
              }
              onInput={(e) => {
                setUser(e.target.value);
              }}
              onFocus={() => {
                setError(false);
              }}
            />
          </FormControl>
          {/*  */}
          <FormControl
            sx={{ m: 1, width: "90%", background: "var(--p--main)" }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              sx={{ color: "white" }}
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ color: "white" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onInput={(e) => {
                setPass(e.target.value);
              }}
              onFocus={() => {
                setError(false);
              }}
            />
          </FormControl>
          {error && (
            <Alert
              severity="error"
              sx={{
                margin: 1,
                width: { xs: "80%", sm: "87%" },
                fontWeight: "bold",
              }}
            >
              Wrong password or userName. Try again.
            </Alert>
          )}
          <Alert
            severity="info"
            sx={{
              margin: 1,
              width: { xs: "80%", sm: "87%" },
              fontWeight: "bold",
            }}
          >
            TEST! UserName:"admin" /Password:"admin"
          </Alert>

          <Button
            type="submit"
            style={{
              width: "50%",
              height: "40px",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
              background: "transparent",
              color: "white",
              border: "2px solid",
            }}
            variant="outlined"
            onClick={() => {
              SignIn();
            }}
          >
            Sign In
          </Button>
          {/*  */}
        </form>
      </Box>
    </>
  );
}
