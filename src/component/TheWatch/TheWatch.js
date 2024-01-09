import { Box, Container, Stack } from "@mui/material";
import * as React from "react";
import Title from "../Title";
import watch from "../../images/the-watch.webp";
import ListComponent from "./List";

export default function TheWatch() {
  return (
    <Box sx={{ backgroundColor: "var(--bg--main)", paddingTop: "40px" }}>
      <Container sx={{ textAlign: "center" }}>
        <Stack direction={"row"} flexWrap={"wrap"}>
          <Box textAlign={"left"} flexGrow={"1"} width={"400px"}>
            <Title
              mx={false}
              title={"THE WATCH"}
              p={
                "With an image in the side of this conetent, you can use this section to write about some cool thing about your product or its features."
              }
            />

            <Box flexGrow={"1"} width={"400px"}>
              <ListComponent
                txt={"Compatible with all devices"}
              ></ListComponent>
              <ListComponent txt={"Android and iOS Support"}></ListComponent>
              <ListComponent txt={"Activity & Health Tracker"}></ListComponent>
              <ListComponent txt={"Read & reply to messages"}></ListComponent>
            </Box>
          </Box>

          <Box marginX={"auto"} py={"30px"}>
            <img
              src={watch}
              width={"100%"}
              height="100%"
              alt=""
              loading="lazy"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
