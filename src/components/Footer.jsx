import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
        component="footer"
        sx={{
            backgroundColor: "#1f1f1f", 
            color: "#00000", 
            py: 2,
            textAlign: "center",
            mt: 5,
        }}
        >
        <Typography variant="body2">
            Copyright © 2025 <strong>Vasantharan K</strong>. All Rights Reserved.
        </Typography>
        </Box>
    );
};

export default Footer;
