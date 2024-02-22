import { Box, Icon, Typography } from "@mui/material";

export default function Component(props) {
  return (
    <Box width={"333px"} flexGrow={"1"}>
      <Icon sx={{ fontSize: "100px", color: "var(--p--main)" }}>
        {props.icon}
      </Icon>
      {props.TitleFound && (
        <Typography fontSize={"24px"} fontWeight={"bold"}>
          {props.title}
        </Typography>
      )}
      <Typography color={"var(--p--main)"}>{props.p}</Typography>
      {props.LogoFound && (
        <Typography
          my={4}
          fontSize={"24px"}
          fontWeight={"bold"}
          sx={{ color: "var(--p--main)" }}
        >
          {props.logo}
        </Typography>
      )}
    </Box>
  );
}
