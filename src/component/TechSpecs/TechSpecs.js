import {
  Box,
  Container,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Title from "../Title";
export default function TechSpecs() {
  return (
    <>
      <Box sx={{ backgroundColor: "var(--bg--main)" }}>
        <Container sx={{ textAlign: "center", py: "80px" }}>
          <Title
            title={"TECH SPECS"}
            mx={true}
            p={
              "Need more info? Please have a look at the tech specs of the watch. We’ve used Latest technology & quality materials"
            }
          />
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={3}
            textAlign={"left"}
            marginTop={"40px"}
            justifyContent={"center"}
          >
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                  Compatibility
                </Typography>
                <ListItemText primary={`iPhone iOS 7 & up `} />
                <ListItemText primary={`Android 4.3 & uptexts `} />
                <ListItemText primary={`Bluetooth 4.0`} />
                <ListItemText primary={`Notification for calls / texts`} />
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                  App
                </Typography>
                <ListItemText primary={`Set daily goals`} />
                <ListItemText primary={`Analyze history`} />
                <ListItemText primary={`Sync to phone & cloud`} />
                <ListItemText primary={`Connect to Apple health kit`} />
                <ListItemText primary={`Connect to Google fit`} />
                <ListItemText primary={`Watch firmware upgrade`} />
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                  Vibration silent alarms
                </Typography>
                <ListItemText primary={`Phone notifications `} />
                <ListItemText primary={`Daily goal reached`} />
                <ListItemText primary={`Daily wake-up alarm`} />
                <ListItemText primary={`Location assistance`} />
                <ListItemText primary={`Accessiblity features`} />
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                  Watch
                </Typography>
                <ListItemText primary={`12.6mm thickness`} />
                <ListItemText primary={`3.16L stainless steel case`} />
                <ListItemText primary={`40mm diameter`} />
                <ListItemText primary={`5 ATM water resistant`} />
                <ListItemText primary={`Sapphire glass crystal`} />
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                  Straps
                </Typography>
                <ListItemText primary={`Italian leather with natural lining`} />
                <ListItemText primary={`Comfort sport fabric`} />
                <ListItemText primary={`Quick-release pins`} />
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <Typography variant="h6" fontWeight={"bold"} color={"black"}>
                  Activity tracking
                </Typography>
                <ListItemText primary={`Step counting`} />
                <ListItemText primary={`Distance`} />
                <ListItemText primary={`Calories burned `} />
                <ListItemText primary={`Swimming (strokes)`} />
              </List>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
