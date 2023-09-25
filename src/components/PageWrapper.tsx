// src/components/PageWrapper.tsx

import React from "react";
import { Container } from "@mui/material";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

export default PageWrapper;
