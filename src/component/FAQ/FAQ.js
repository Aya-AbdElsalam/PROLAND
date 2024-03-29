import { Container } from "@mui/material";
import Title from "../Title";
import React from "react";
import AccordinComponent from "./Accordin";

export default function FAQ() {
  return (
    <>
      <Container sx={{ textAlign: "center", py: "80px" }}>
        <Title
          title={"FAQ"}
          mx={true}
          p={
            "Got questions? We’ve got answers. If you have some other questions, feel free to send us an email to hello@product.com"
          }
        />
        <div style={{ marginTop: "50px" }}>
          <AccordinComponent
            content={"panel1d-content"}
            header={"panel1d-header"}
            pan={"panel1"}
            q={"What is Watch? How it works?"}
            a={
              "Watch took center stage at this year's Product Show with a preview of watch OS 2. The next generation of Watch software is packed with features that just might turn the device from a nice-to-have into a must-have. If you already own an Apple Watch, you'll have to live with the old software until fall. You’ll love it at the first use."
            }
          />
          <AccordinComponent
            content={"panel2d-content"}
            header={"panel2d-header"}
            pan={"panel2"}
            q={"How the watch is made?"}
            a={
              "Watch has an anodized aluminum case (which is lighter than stainless steel) in silver or space gray, and the face is Ion-X glass, which also designed to be hard and rugged (as well as a little bit lighter) than the sapphire. It’s definitely the lightest of the three Apple Watch editions, making it an ideal exercise companion."
            }
          />
          <AccordinComponent
            content={"panel3d-content"}
            header={"panel3d-header"}
            pan={"panel3"}
            q={"Can I swap out the watch band?"}
            a={
              "Absolutely. Watch comes with six bands that are easy to mix and match any band with any watch. You can swap them out as your heart desires without the aid of any tools—as long as the band and watch are the same size. (The Leather Loop band, for example, only fits 42mm watches, not the smaller 38mm size.)"
            }
          />
          <AccordinComponent
            content={"panel4d-content"}
            header={"panel4d-header"}
            pan={"panel4"}
            q={"So it’s a watch and a fitness tracker?"}
            a={
              "The accelerometer lets the watch count your steps, and it extrapolate distance on its own, or rely on the GPS in the paired Phone to trace your exact route. That step data comes in handy for two of the apps included on the watch: Activity and Workout. Both of the watch’s fitness apps sync data back to the Health and Fitness apps on your Phone."
            }
          />
        </div>
      </Container>
    </>
  );
}
