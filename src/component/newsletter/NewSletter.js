import { Box, Container } from "@mui/material";
import Title from "../Title";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { ArrowForwardIos } from "@mui/icons-material";

export default function NewSletter() {
  return (
    <>
      <Container sx={{ textAlign: "center", marginY: "80px" }}>
        <Title
          title={"NEWSLETTER"}
          mx={true}
          p={
            "Subscribe to our product newsletter to get notified when we launch the product or when we completed a milestone"
          }
        />

        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            marginX: "auto",
            height: "80px",
            width: "80%",
            background: "var(--bg--main)",
            marginTop: "40px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter Your Email Address"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Box
            sx={{
              width: "20%",
              lineHeight: "80px",
              height: "100%",
              backgroundColor: "var(--bg--second)",
              borderRadius: "4px",
              color: "white",
            }}
          >
            <ArrowForwardIos />
          </Box>
        </Paper>
      </Container>
    </>
  );
}
