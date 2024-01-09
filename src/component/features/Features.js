import { Box, Container, Stack } from "@mui/material";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import ComponentBenefits from "../Benefits/ComponentBenefits";
import VoiceChatOutlinedIcon from "@mui/icons-material/VoiceChatOutlined";
import appleWatch from "../../images/apple-watch-3.webp";
import {
  ConnectWithoutContactOutlined,
  FavoriteBorderOutlined,
  Person3Outlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
export default function Features() {
  return (
    <>
      <Box my={"80px"} sx={{ backgroundColor: "var(--bg--main)" }}>
        <Container sx={{ textAlign: "center", my: "80px", py: "80px" }}>
          <Stack direction={"row"} gap={6} flexWrap={"wrap"}>
            <Stack gap={4} textAlign={"left"} flexGrow={1}>
              <ComponentBenefits
                icon={
                  <VpnKeyOutlinedIcon
                    sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                  />
                }
                title={"Fast and secure"}
                p={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                }
              />
              <ComponentBenefits
                icon={
                  <VoiceChatOutlinedIcon
                    sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                  />
                }
                title={"Voice Assistant"}
                p={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                }
              />
              <ComponentBenefits
                icon={
                  <FavoriteBorderOutlined
                    sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                  />
                }
                title={"Apps you love"}
                p={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                }
              />
            </Stack>
            <Stack
              flexGrow={1}
              width={{ xs: "100%", sm: "100%", md: "333px" }}
              sx={{ order: { xs: 1, sm: 1, md: 1, lg: 0 } }}
              alignItems={"center"}
            >
              <img
                loading="lazy"
                src={appleWatch}
                width={"333px"}
                height="100%"
                alt=""
              />
            </Stack>
            <Stack gap={4} textAlign={"left"} flexGrow={1}>
              <ComponentBenefits
                icon={
                  <ConnectWithoutContactOutlined
                    sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                  />
                }
                title={"Stay in touch"}
                p={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                }
              />
              <ComponentBenefits
                icon={
                  <Person3Outlined
                    sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                  />
                }
                title={"Designed for you"}
                p={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                }
              />
              <ComponentBenefits
                icon={
                  <WatchLaterOutlined
                    sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                  />
                }
                title={"Precise timepiece"}
                p={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                }
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
