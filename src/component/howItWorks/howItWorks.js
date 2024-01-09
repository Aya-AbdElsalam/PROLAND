import { Box, Container, Stack } from "@mui/material";
import Title from "../Title";
import DevicesOtherTwoToneIcon from "@mui/icons-material/DevicesOtherTwoTone";
import ToggleOffTwoToneIcon from "@mui/icons-material/ToggleOffTwoTone";
import VerifiedTwoToneIcon from "@mui/icons-material/VerifiedTwoTone";
import Component from "./Component";
export default function HowItWork() {
  return (
    <>
      <Box my={"80px"} sx={{ backgroundColor: "var(--bg--main)" }}>
        <Container sx={{ textAlign: "center", my: "80px", py: "80px" }}>
          <Title
            title={"HOW IT WORKS"}
            mx={true}
            p={
              "Everybody loves tech gadgets, But our’s is different. Here is how it works. Its should be simple. Add how easy is to install your product"
            }
          />
          <Stack direction={"row"} mt={"80px"} flexWrap={"wrap"} gap={6}>
            <Component
              TitleFound={true}
              icon={<DevicesOtherTwoToneIcon sx={{ fontSize: "100px" }} />}
              title={"Connect Device"}
              p={
                "Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit."
              }
            />
            <Component
              TitleFound={true}
              icon={<ToggleOffTwoToneIcon sx={{ fontSize: "100px" }} />}
              title={"Configure it"}
              p={
                "Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit."
              }
            />
            <Component
              TitleFound={true}
              icon={<VerifiedTwoToneIcon sx={{ fontSize: "100px" }} />}
              title={"Yay! Done."}
              p={
                "Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit."
              }
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
