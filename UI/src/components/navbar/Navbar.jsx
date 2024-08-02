import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SubNavbar from "./SubNavbar";
import WalletIcon from "@mui/icons-material/Wallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const Navbar = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState("Trade");

  const handleButtonClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <CurrencyExchangeIcon sx={{ marginRight: 1 }} />
          <Typography
            startIcon={<CurrencyExchangeIcon />}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Jupiter
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexGrow: 1 }}>
            <Button
              color="inherit"
              onClick={() => handleButtonClick("Trade")}
              sx={{
                borderBottom:
                  selectedItem === "Trade" ? "2px solid white" : "none",
              }}
            >
              Trade
            </Button>
            <Button
              color="inherit"
              onClick={() => handleButtonClick("Solana")}
              sx={{
                borderBottom:
                  selectedItem === "Solana" ? "2px solid white" : "none",
              }}
            >
              Solana
            </Button>
            <Button
              color="inherit"
              onClick={() => handleButtonClick("Perps")}
              sx={{
                borderBottom:
                  selectedItem === "Perps" ? "2px solid white" : "none",
              }}
            >
              Perps
            </Button>
          </Box>

          <Button startIcon={<WalletIcon />} color="inherit">
            Connect Wallet
          </Button>
        </Toolbar>
      </AppBar>
      {selectedItem === "Trade" && <SubNavbar onSelect={onSelect} />}
    </div>
  );
};

export default Navbar;
