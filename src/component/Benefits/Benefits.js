import { Container, Stack } from "@mui/material";
import Title from "../Title";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ComponentBenefits from "./ComponentBenefits";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  LightbulbOutlined,
  RequestQuoteOutlined,
  ScienceOutlined,
} from "@mui/icons-material";
import { Element } from "react-scroll";
import Features from "../features/Features";
import FeaturesSection from "../FeaturesSection2/FeaturesSection2";
import TheWatch from "../TheWatch/TheWatch";
import ProductsItems from "../Products/ProductsItems";
export default function Benefits() {
  return (
    <Element name="FEATURES" className="element" id="FEATURES">
      <Container sx={{ textAlign: "center", my: "80px", py: "80px" }}>
        <Title
          title={"THE BENEFITS"}
          mx={true}
          p={
            "List out your product’s benefit here. A small description about what it is and how it helps the user. You can also add some icons."
          }
        />
        <Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={6}
            textAlign={"left"}
            mt="80px"
          >
            <ComponentBenefits
              icon={
                <RoomOutlinedIcon
                  sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                />
              }
              title={"GPS Tracking"}
              p={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              }
            />
            <ComponentBenefits
              icon={
                <FavoriteBorderOutlinedIcon
                  sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                />
              }
              title={"Heartbeat Analysis"}
              p={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              }
            />
            <ComponentBenefits
              icon={
                <LockOutlinedIcon
                  sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                />
              }
              title={"Security first"}
              p={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              }
            />

            <ComponentBenefits
              icon={
                <LightbulbOutlined
                  sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                />
              }
              title={"Innovative idea"}
              p={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              }
            />
            <ComponentBenefits
              icon={
                <RequestQuoteOutlined
                  sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                />
              }
              title={" Save your bills"}
              p={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              }
            />
            <ComponentBenefits
              icon={
                <ScienceOutlined
                  sx={{ color: "var(--bg--second)", fontSize: "60px" }}
                />
              }
              title={"Proven technology"}
              p={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              }
            />
          </Stack>
        </Stack>
      </Container>
      <Features />
      <ProductsItems />
      <TheWatch />
      <FeaturesSection />
    </Element>
  );
}
