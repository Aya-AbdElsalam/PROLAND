import { Box, Stack } from "@mui/material";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    document.querySelector(
      ".footer-bottom"
    ).innerHTML = `Created with love by Aya ©${new Date().getFullYear()}`;
  }, []);
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        background: "black",
        borderTop: "1px solid var(--p--main)",
        textAlign: "center",
        paddingY: "10px",
        bottom: 0,
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ background: "black" }}
      >
        <div
          className="footer-bottom text-white text-center fw-bold pb-5 position-relative"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Created with love by Aya
        </div>
      </Stack>
    </Box>
  );
}
