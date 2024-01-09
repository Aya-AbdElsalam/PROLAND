import { Box, Typography } from "@mui/material";

export default function Title(props) {
  return (
    <>
      <Typography
        fontSize={{ xs: "30px", sm: "48px", md: "48px" }}
        fontWeight={"500"}
        mb={2}
      >
        {props.title}
      </Typography>
      <Typography
        color={"var(--p--main)"}
        fontSize={{ xs: "16px", sm: "20px", md: "20px" }}
        width={{ md: "80%", sm: "80%", xs: "100%" }}
        marginLeft={props.mx ? "auto" : 0}
        marginRight={props.mx ? "auto" : 0}
      >
        {props.p}
      </Typography>
      <Box
        width={"70px"}
        height={"7px"}
        marginLeft={props.mx ? "auto" : 0}
        marginRight={props.mx ? "auto" : 0}
        marginTop={2}
        sx={{ background: "var(--p--main)", opacity: ".3" }}
      ></Box>
    </>
  );
}
