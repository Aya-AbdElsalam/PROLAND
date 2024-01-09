import { Box, Container, Stack, Typography } from "@mui/material";
import Title from "../Title";
import Component from "../howItWorks/Component";
import { FormatQuote } from "@mui/icons-material";
import { Element } from "react-scroll";
import NewSletter from "../newsletter/NewSletter";
import AppWatch from "../App/AppWatch";
import TimeLine from "../TimeLine/TimeLine";
import TechSpecs from "../TechSpecs/TechSpecs";
import FAQ from "../FAQ/FAQ";
import Team from "../OUR team/team";

export default function Reviews() {
  const brand = [
    "TechLaunch",
    "TECH COMPANY",
    "SMART REVIEW",
    "MOMWORLD",
    "FIRST POST",
    "STARTUP 100",
  ];
  return (
    <Element name="REVIEWS" className="element" id="REVIEWS">
      <Box sx={{ backgroundColor: "var(--bg--main)" }}>
        <Container sx={{ textAlign: "center", py: "80px" }}>
          <Title
            title={"REVIEWS"}
            mx={true}
            p={
              "Don’t take our word,. See what our experts says about the watch. We have got over 1000s of positive reviews."
            }
          />
          <Stack direction={"row"} mt={"80px"} flexWrap={"wrap"} gap={6}>
            <Component
              LogoFound={true}
              icon={<FormatQuote sx={{ fontSize: "100px" }} />}
              title={"Connect Device"}
              p={
                "The Watch is the nicest smartwatch available, but it's more status symbol than wearable revolutionary. Most of the Watch's features are great."
              }
              logo={"TECH COMPANY"}
            />
            <Component
              LogoFound={true}
              icon={<FormatQuote sx={{ fontSize: "100px" }} />}
              title={"Configure it"}
              p={
                "Watch is the most ambitious, well constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy than a necessary tool."
              }
              logo={"SMART REVIEW"}
            />
            <Component
              LogoFound={true}
              icon={<FormatQuote sx={{ fontSize: "100px" }} />}
              title={"Yay! Done."}
              p={
                "Watch is the best smartwatch we’ve used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities."
              }
              logo={"TECH LAUNCH"}
            />
          </Stack>
          <Box mt={15}>
            <Typography variant="h6" fontWeight={"500"}>
              AS FEATURED ON
            </Typography>
            <Stack direction={"row"} gap={4} flexWrap={"wrap"}>
              {brand.map((e) => {
                return (
                  <Typography
                    key={e}
                    flexGrow={1}
                    my={2}
                    fontSize={"23px"}
                    variant="h5"
                    fontWeight={"bold"}
                    sx={{ color: "var(--p--main)", opacity: ".5" }}
                  >
                    {e}
                  </Typography>
                );
              })}
            </Stack>
          </Box>
        </Container>
      </Box>
      <FAQ />
      <TechSpecs />
      <Team />
      <TimeLine />
      <AppWatch />
      <NewSletter />
    </Element>
  );
}
