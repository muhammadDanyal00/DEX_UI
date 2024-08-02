import React from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

const currencies = [
  { value: "USDC", label: "USDC" },
  { value: "SOL", label: "SOL" },
  { value: "ETH", label: "ETH" },
  { value: "BNB", label: "BNB" },
];

const Swap = ({ view }) => {
  if (view === "Swap") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          padding: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Swap
        </Typography>
        <Box sx={{ width: "300px" }}>
          <TextField
            select
            label="You're paying"
            fullWidth
            margin="normal"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="To receive"
            fullWidth
            margin="normal"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Enter an amount"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" fullWidth>
            Swap
          </Button>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          padding: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {view}
        </Typography>
      </Box>
    );
  }
};

export default Swap;
