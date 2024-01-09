import { Box, Paper, Typography } from "@mui/material";
export default function DashBoard(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "200px",
        display: "flex",
        flexGrow: "1",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography fontWeight={"bold"} fontSize={"23px"}>
          {props.data}
        </Typography>
        <Typography color={"var(--p--main)"}>{props.title}</Typography>
      </Box>
      <Box color={"var(--bg--second)"} fontSize="50px">
        {props.icon}
      </Box>
    </Paper>
  );
}
