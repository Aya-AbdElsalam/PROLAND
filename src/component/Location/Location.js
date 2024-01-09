import { Box, Button, ListItem, ListItemText, Typography } from "@mui/material";
import {
  EmailOutlined,
  LocalPhone,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Element } from "react-scroll";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Location() {
  return (
    <Element name="CONTACT" className="element" id="CONTACT">
      <Box
        display={"flex"}
        sx={{
          height: "80vh",
          overflow: "hidden",
          position: "relative",
          color: "#a5aeb3",
        }}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d622019.8004871152!2d29.90719073043907!3d26.211560265869494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1704276174094!5m2!1sen!2seg"
          width="100%"
          height={"100%"}
          allowFullScreen=""
          loading="lazy"
          style={{ zIndex: "0", position: "absolute" }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Box
          sx={{
            height: "max-content",
            fontSize: "16px",
            zIndex: "5",
            position: "relative",
            backgroundColor: "white",
            padding: 8,
            borderRadius: "10px",
            width: "max-content",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color={"black"}
            marginBottom={2}
          >
            GET IN TOUCH
          </Typography>
          <ListItem sx={{ margin: "0", padding: "0" }}>
            <LocationOnOutlined sx={{ paddingRight: "15px" }} />
            <ListItemText
              primary="523 Sylvan Ave, 5th Floor"
              secondary="Mountain View, CA 94041USA"
            />
          </ListItem>
          <ListItem sx={{ margin: "0", padding: "0" }}>
            <LocalPhone sx={{ paddingRight: "15px" }} />
            <ListItemText
              primary="+1 (234) 56789"
              secondary="+1 987 654 3210"
            />
          </ListItem>
          <ListItem sx={{ margin: "0", padding: "0" }}>
            <EmailOutlined sx={{ paddingRight: "15px" }} />
            <ListItemText primary="support@watchland.com" />
          </ListItem>
          <Button
            variant="contained"
            sx={{
              marginTop: "40px",
              width: "100%",
              height: "50px",
              backgroundColor: "var(--bg--second)",
            }}
          >
            CONTACT US
          </Button>
        </Box>
      </Box>
      <SocialMedia />
    </Element>
  );
}
