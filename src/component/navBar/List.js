import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListNavBar(props) {
  const navigate = useNavigate();
  return (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
      onClick={() => {
        navigate(props.navigate);
      }}
    >
      <Tooltip title={!props.open && props.text}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              color: "white",

              minWidth: 0,
              mr: props.open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {props.icon}
          </ListItemIcon>
          <ListItemText
            primary={props.text}
            sx={{ opacity: props.open ? 1 : 0 }}
          />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
}
