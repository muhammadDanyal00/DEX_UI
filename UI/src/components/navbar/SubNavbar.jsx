import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SubNavbar = ({ onSelect }) => {
  const [selectedSubItem, setSelectedSubItem] = useState("Swap");

  const handleSubButtonClick = (item) => {
    setSelectedSubItem(item);
    onSelect(item);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Button
            color="inherit"
            onClick={() => handleSubButtonClick("Swap")}
            sx={{
              borderBottom:
                selectedSubItem === "Swap" ? "2px solid blue" : "none",
            }}
          >
            Swap
          </Button>
          <Button
            color="inherit"
            onClick={() => handleSubButtonClick("DCA")}
            sx={{
              borderBottom:
                selectedSubItem === "DCA" ? "2px solid blue" : "none",
            }}
          >
            DCA
          </Button>
          <Button
            color="inherit"
            onClick={() => handleSubButtonClick("Limit Order")}
            sx={{
              borderBottom:
                selectedSubItem === "Limit Order" ? "2px solid blue" : "none",
            }}
          >
            Limit Order
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SubNavbar;
