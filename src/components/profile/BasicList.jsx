import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function BasicList() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton className=" hover:text-red-400">
              <ListItemIcon>
                <i className="fa-solid fa-bookmark text-[18px] m-1 "></i>
              </ListItemIcon>
              <ListItemText primary="BookMarks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className=" hover:text-red-400">
              <ListItemIcon>
                <i className="fa-solid fa-lock text-[18px] m-1"></i>
              </ListItemIcon>
              <ListItemText primary="Change password" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
