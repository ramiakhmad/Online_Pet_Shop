import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    text: {
      primary: "#282828",
      braedcrumb: "#8B8B8B",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5D4785",
    },
    secondary: {
      main: "#121212",
    },
    text: {
      primary: "#ffffff",
      braedcrumb: "#ffffff",
    },
  },
});
