import {
  FacebookSharp,
  Google,
  LinkedIn,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Container, Stack } from "@mui/material";

export default function SocialMedia() {
  return (
    <Container
      sx={{
        paddingY: "40px",
        textAlign: "center",
      }}
    >
      <Stack
        direction={"row"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FacebookSharp
          sx={{
            fontSize: "50px",
            borderRadius: "50%",
            color: "var(--bg--second)",
            opacity: ".5",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "var(--bg--second)";
          }}
        />
        <Pinterest
          sx={{
            fontSize: "50px",
            borderRadius: "50%",
            color: "var(--bg--second)",
            opacity: ".5",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "var(--bg--second)";
          }}
        />
        <YouTube
          sx={{
            width: "40px",
            height: "40px",
            color: "white",
            borderRadius: "50%",
            backgroundColor: "var(--bg--second)",
            opacity: ".5",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "var(--bg--second)";
          }}
        />
        <Google
          sx={{
            width: "40px",
            height: "40px",
            color: "white",
            borderRadius: "50%",
            backgroundColor: "var(--bg--second)",
            opacity: ".5",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "var(--bg--second)";
          }}
        />
        <LinkedIn
          sx={{
            width: "40px",
            height: "40px",
            color: "white",
            borderRadius: "50%",
            backgroundColor: "var(--bg--second)",
            opacity: ".5",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "var(--bg--second)";
          }}
        />
        <Twitter
          sx={{
            width: "40px",
            height: "40px",
            color: "white",
            borderRadius: "50%",
            backgroundColor: "var(--bg--second)",
            opacity: ".5",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "var(--bg--second)";
          }}
        />
      </Stack>
    </Container>
  );
}
