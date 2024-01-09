import { Container } from "@mui/material";
import Title from "../Title";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimeLineComponent from "./TimeLineItem";

export default function TimeLine() {
  return (
    <>
      <Container sx={{ textAlign: "center", py: "80px" }}>
        <Title
          title={"TIMELINE"}
          mx={true}
          p={
            "Here’s a roadmap of our product to highlight the milestones from the initial phase to delivery and future updates."
          }
        />
        <Timeline position="alternate">
          <TimeLineComponent time={"23 JAN 2014"} content={"Mass Production"} />
          <TimeLineComponent
            time={"23 JAN 2014"}
            content={"Testing Pre-Production Samples"}
            left={true}
          />
          <TimeLineComponent
            time={"23 JAN 2014"}
            content={"Croudfunding Campaign"}
          />
          <TimeLineComponent
            time={"23 JAN 2014"}
            content={"Preview at CES"}
            left={true}
          />
          <TimeLineComponent
            time={"23 JAN 2014"}
            content={"3D Prototype & Testing"}
            p={
              "And an optional description. You may add little description of your milestone if you want."
            }
          />
          <TimeLineComponent
            time={"23 JAN 2014"}
            content={"Research and Development"}
            left={true}
          />
        </Timeline>
      </Container>
    </>
  );
}
