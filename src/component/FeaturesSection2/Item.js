import { Box, Stack, Typography } from "@mui/material";

export default function Item(props) {
  return (
    <Stack
      direction={props.isRev ? "row-reverse" : "row"}
      gap={5}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box width={"390px"} flexGrow={1} display={"flex"} alignSelf={"stretch"}>
        <img
          loading="lazy"
          src={props.img}
          alt=""
          width={"100%"}
          height="100%"
        />
      </Box>
      <Box width={"350px"} flexGrow={1}>
        <Typography variant="h5" fontWeight={"bold"} my={3}>
          {props.title}
        </Typography>
        <Typography
          color={"var(--p--main)"}
          fontSize={{ xs: "16px", sm: "20px", md: "20px" }}
          width={"80%"}
        >
          {props.p}
        </Typography>
      </Box>
    </Stack>
  );
}
