import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Typography } from "@mui/material";
export default function TimeLineComponent(props) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {props.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            width: "10px",
            height: "10px",
            background: "transparent",
            border: " 5px solid var(--p--main)",
            opacity: ".3",
            boxShadow: "0px 0.7px 0px #bdbdbd",
            margin: 0,
          }}
        />
        <TimelineConnector
          sx={{
            width: "6px",
            backgroundColor: "var(--p--main)",
            opacity: ".3",
          }}
        />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          py: "12px",
          px: 2,
          marginBottom: 3,
          fontSize: "18px",
          display: "flex",
        }}
      >
        <Box
          marginLeft={props.left ? "auto" : 0}
          sx={{
            background: "#dfe1e3",
            padding: 1,
            borderRadius: "10px",
            width: "fit-content",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "18px",
              color: "#6a737b",
              fontWeight: "500",
            }}
          >
            {props.content}
          </Typography>
          <Typography> {props.p}</Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}
