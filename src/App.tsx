import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* ... any other routes can be added here */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
