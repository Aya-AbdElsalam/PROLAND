import { Container, Stack } from "@mui/material";
import hand from "../../images/split-1.webp";
import hand2 from "../../images/split-2.webp";
import Item from "./Item";

export default function FeaturesSection() {
  return (
    <Container>
      <Stack>
        <Item
          isRev={true}
          img={hand}
          title={"Every Apps you wanted"}
          p={
            "You won’t just send and receive messages, calls, and mail more easily and efficiently. You’ll express yourself in unique, fun, and more personal ways. Communicating with Watch is discreet,sophisticated, and nuanced. a whole new way to connect with others."
          }
        />
        <Item
          isRev={false}
          img={hand2}
          title={"Health and Fitness"}
          p={
            "Fitness isn’t just about running, biking, or hitting the gym. It’s also about being active throughout the day. Watch measures all the ways you move, such as walking the dog, taking the stairs, or playing with your kids. It even keeps track of when you stand up."
          }
        />
      </Stack>
    </Container>
  );
}
