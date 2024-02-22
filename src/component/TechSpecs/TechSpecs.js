import {
  Box,
  Container,
  List,
  ListItem,
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
                <ListItem sx={{ py: 0 }}>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"black"}
                  >
                    Compatibility
                  </Typography>
                </ListItem>

                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`iPhone iOS 7 & up `} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Android 4.3 & uptexts `} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Bluetooth 4.0`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Notification for calls / texts`} />
                </ListItem>
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <ListItem sx={{ py: 0 }}>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"black"}
                  >
                    App
                  </Typography>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Set daily goals`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Analyze history`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Sync to phone & cloud`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Connect to Apple health kit`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Connect to Google fit`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Watch firmware upgrade`} />
                </ListItem>
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <ListItem sx={{ py: 0 }}>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"black"}
                  >
                    Vibration silent alarms
                  </Typography>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Phone notifications `} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Daily goal reached`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Daily wake-up alarm`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Location assistance`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Accessiblity features`} />
                </ListItem>
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                {" "}
                <ListItem sx={{ py: 0 }}>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"black"}
                  >
                    Watch
                  </Typography>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`12.6mm thickness`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`3.16L stainless steel case`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`40mm diameter`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`5 ATM water resistant`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Sapphire glass crystal`} />
                </ListItem>
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <ListItem sx={{ py: 0 }}>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"black"}
                  >
                    Straps
                  </Typography>
                </ListItem>{" "}
                <ListItem sx={{ py: 0 }}>
                  <ListItemText
                    primary={`Italian leather with natural lining`}
                  />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Comfort sport fabric`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Quick-release pins`} />
                </ListItem>
              </List>
            </Box>
            <Box width={"333px"} flexGrow={{ xs: 1, sm: 0, md: 0 }}>
              <List
                sx={{
                  color: "var(--p--main)",
                  width: "max-content",
                }}
              >
                <ListItem sx={{ py: 0 }}>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"black"}
                  >
                    Activity tracking
                  </Typography>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Step counting`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Distance`} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Calories burned `} />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary={`Swimming (strokes)`} />
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
