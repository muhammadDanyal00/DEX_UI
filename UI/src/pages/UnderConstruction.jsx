import React from "react";
import { Box, Typography } from "@mui/material";

const UnderConstruction = () => {
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
        Under Construction
      </Typography>
    </Box>
  );
};

export default UnderConstruction;
