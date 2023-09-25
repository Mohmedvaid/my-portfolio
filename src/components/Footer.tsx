// src/components/Footer.tsx

import React from "react";
import { Container, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "auto", padding: "20px 0" }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
