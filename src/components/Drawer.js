import React, { useState } from "react";
import {
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Drawer({ PAGES }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleListItemClick = (link, index) => {
    setSelectedIndex(index);
    setOpenDrawer(false);
    navigate(link);
  };

  return (
    <>
      <MuiDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { width: { xs: "90%", sm: "30%" } },
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <List>
          {PAGES.map((page, index) => (
            <ListItemButton
              onClick={() => handleListItemClick(page.link, index)}
              key={`drw-${page.link}-${index}`}
              selected={selectedIndex === index}
            >
              <ListItemText>{page.text}</ListItemText>
            </ListItemButton>
          ))}

          <ListItem disableGutters>
            <ListItemButton
              sx={{
                color: "white",
                backgroundColor: "#0F75BD",
                paddingY: 2,
                textTransform: "uppercase",
                fontWeight: "400",
                "&:hover": {
                  backgroundColor: "#0F75BD",
                },
              }}
              onClick={() =>
                (window.location.href =
                  "https://secure.comp-rite.co.ke/register/login")
              }
            >
              AGM portal
            </ListItemButton>
          </ListItem>
        </List>
      </MuiDrawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default Drawer;
