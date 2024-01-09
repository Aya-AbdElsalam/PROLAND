import { Box, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import watchApp from "../../images/app-screen.webp";
import watchBG from "../../images/smartwatch-features.webp";
import appStore from "../../images/app-store.webp";
import GooglePlay from "../../images/google-play.webp";
import Link from "@mui/material/Link";

export default function AppWatch() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("${watchBG}")`,
          height: { xs: "max-content", md: "80vh", paddingBottom: "80px" },
          overflow: "hidden",
          position: "relative",
        }}
        width={"100%"}
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
            gap={5}
            position={"relative"}
            zIndex={5}
            direction={"row"}
            color={"white"}
            height={"100%"}
            alignItems={"center"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            alignContent={"center"}
          >
            <Box paddingTop={"180px"} width={"400px"} flexGrow={1}>
              <img
                loading="lazy"
                src={watchApp}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
            <Box width={"400px"} flexGrow={1}>
              <Typography variant="h3" sx={{ fontWeight: "bold", my: "20px" }}>
                Mobile App for watch
              </Typography>
              <Typography fontSize={"20px"} sx={{ color: "#feffff" }}>
                The smartwatch connects to your iPhone and other iOS devices
                using Bluetooth, alerting you to incoming calls, emails,
                messages and alerts. Customize your with over 1,000 watchapps
                found within the smartwatch app.
              </Typography>
              <Stack direction={"row"} gap={3}>
                <Link>
                  <img
                    loading="lazy"
                    src={appStore}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Link>
                <Link>
                  <img
                    loading="lazy"
                    src={GooglePlay}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
