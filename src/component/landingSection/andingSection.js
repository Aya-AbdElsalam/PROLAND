import { Box, Paper, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import watch from "../../images/watch.webp";
import watchBG from "../../images/smartwatch-features.webp";
import { Element } from "react-scroll";
export default function LandingSection() {
  return (
    <Element
      name="PROLAND"
      className="element"
      id="PROLAND"
      width={"100"}
      minLength={"75vh"}
    >
      <Box
        sx={{
          backgroundImage: `url("${watchBG}")`,
          height: { xs: "130vh", md: "100vh" },
          overflow: "hidden",
          position: "relative",
          backgroundSize: "cover",
        }}
        width="100"
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
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Stack
            direction={"row"}
            color={"white"}
            height={"100%"}
            alignItems={"center"}
            textAlign={{ xs: "center", md: "left" }}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            alignContent={"center"}
          >
            <Box
              zIndex={2}
              sx={{ maxWidth: { xs: "100%", md: "50%" } }}
              flexGrow={1}
              my={3}
            >
              <Typography
                variant="h2"
                fontWeight={"bold"}
                my={4}
                fontSize={{ xs: "50px", md: "80px" }}
              >
                The Watch
              </Typography>
              <Typography
                textTransform={"uppercase"}
                fontSize={{ xs: "20px", md: "24px" }}
                color={"rgba(255,255,255,.7)"}
              >
                Holisticly incentivize revolutionary collaboration and idea
                sharing before cost effective users. Actual focused services
                before highly efficient human capital.
              </Typography>
            </Box>
            <Paper
              sx={{
                width: { xs: "350px", md: "400px" },
                height: "350px",
                zIndex: "3",
                filter: "brightness(0.5)",
              }}
            >
              <img
                src={watch}
                height="100%"
                width={"100%"}
                alt=""
                fetchpriority="high"
              ></img>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </Element>
  );
}
