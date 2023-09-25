import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6", // Example primary color
    },
    secondary: {
      main: "#19857b", // Example secondary color
    },
    // ... you can add more palette options
  },
  typography: {
    fontFamily: "Roboto",
    // ... you can add more typography options
  },
  // ... you can add other theme customization options
});

export default theme;
