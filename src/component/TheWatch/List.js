import { ListItem } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
export default function ListComponent(props) {
  return (
    <List sx={{ marginY: "15px" }}>
      <ListItem>
        <ListItemAvatar>
          <CheckCircleOutlineSharpIcon
            sx={{ color: "green", fontSize: "40px" }}
          ></CheckCircleOutlineSharpIcon>
        </ListItemAvatar>
        <Typography color="#696f74" sx={{ fontSize: "20px" }}>
          {props.txt}
        </Typography>
      </ListItem>
    </List>
  );
}
