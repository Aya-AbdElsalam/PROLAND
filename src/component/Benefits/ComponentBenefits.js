import { Box, Icon, Stack, Typography } from "@mui/material";

export default function ComponentBenefits(props) {
  return (
    <Stack
      direction={"row"}
      width={{ md: "333px", xs: "auto" }}
      flexGrow={1}
      gap={2}
    >
      <Icon sx={{ fontSize: "60px" }}>{props.icon}</Icon>
      <Box>
        <Typography fontWeight={"bold"} variant="h6">
          {props.title}
        </Typography>
        <Typography color={"var(--p--main)"}>{props.p}</Typography>
      </Box>
    </Stack>
  );
}
