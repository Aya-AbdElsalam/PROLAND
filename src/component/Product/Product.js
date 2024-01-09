import { Box, Container, Typography } from "@mui/material";
import appleWatch from "../../images/appleWatch.webp";
import Title from "../Title";
import { Element } from "react-scroll";

import "../Product/Product.css";
import HowItWork from "../howItWorks/howItWorks";
export default function Product() {
  return (
    <Element name="PRODUCT" className="element" id="PRODUCT">
      <Container sx={{ textAlign: "center", my: "80px" }}>
        <Title
          title={"THE PRODUCT"}
          mx={true}
          p={
            " Introduce the product here. A small description about what it is and how it helps the user. You can also add some photos below."
          }
        />
        <Box width={"100%"} marginTop={"80px"} position={"relative"}>
          <Box
            width={{ xs: "50%", md: "max-content" }}
            mx={"auto"}
            position={"relative"}
          >
            <img
              src={appleWatch}
              srcSet={appleWatch}
              loading="lazy"
              alt=""
              width={"100%"}
              height="100%"
            />

            <Box
              position={"absolute"}
              bottom={"63%"}
              right={"50%"}
              width={"100%"}
              height={"100%"}
              sx={{ cursor: "pointer" }}
              display={"flex"}
              flexDirection={"column-reverse"}
              alignItems={"center"}
            >
              <span
                className="plus"
                onClick={(e) => {
                  e.target.parentNode.children[1].classList.toggle("open");
                  e.target.parentNode.children[2].classList.toggle("open");
                }}
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "25px",
                  width: "30px",
                  height: "30px",
                  display: "inline-block",
                  background: "#0084ff",
                  borderRadius: "50%",
                  lineHeight: "25px",
                  fontWeight: "bold",
                }}
              >
                +
              </span>
              <Box
                display={"none"}
                width={"3px"}
                height={"80px"}
                backgroundColor={"var(--bg--second)"}
              ></Box>
              <span
                style={{
                  color: "var(--bg--second)",
                  display: "none",
                  fontWeight: "bold",
                }}
              >
                BLUETOOTH 4.2
              </span>
            </Box>
            <Box
              position={"absolute"}
              top={"68%"}
              right={"50%"}
              width={"100%"}
              height={"100%"}
              sx={{ cursor: "pointer" }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <span
                onClick={(e) => {
                  e.target.parentNode.children[1].classList.toggle("open");
                  e.target.parentNode.children[2].classList.toggle("open");
                }}
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "25px",
                  width: "30px",
                  height: "30px",
                  background: "#0084ff",
                  borderRadius: "50%",
                  lineHeight: "25px",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
                className="plus"
              >
                +
              </span>
              <Box
                width={"3px"}
                height={"80px"}
                display={"none"}
                backgroundColor={"var(--bg--second)"}
              ></Box>
              <span
                style={{
                  color: "var(--bg--second)",
                  display: "none",
                  fontWeight: "bold",
                }}
              >
                GPS TRACKER
              </span>
            </Box>
            <Box
              position={"absolute"}
              top={"-1%"}
              right={"-60%"}
              width={"100%"}
              height={"100%"}
              sx={{ cursor: "pointer" }}
              display={"flex"}
              alignItems={"center"}
            >
              <span
                onClick={(e) => {
                  e.target.parentNode.children[1].classList.toggle("open");
                  e.target.parentNode.children[2].classList.toggle("open");
                }}
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "25px",
                  width: "30px",
                  height: "30px",
                  display: "inline-block",
                  background: "#0084ff",
                  borderRadius: "50%",
                  lineHeight: "25px",
                  fontWeight: "bold",
                }}
                className="plus"
              >
                +
              </span>
              <Box
                display={"none"}
                height={"3px"}
                width={"60px"}
                backgroundColor={"var(--bg--second)"}
              ></Box>
              <Typography
                style={{ color: "var(--bg--second)", fontWeight: "bold" }}
                display={"none"}
              >
                WATER RESISTANT
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <HowItWork />
    </Element>
  );
}
