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
      breadcrumb: "#8B8B8B",
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
      main: "#9c27b0",
    },
    text: {
      primary: "#ffffff",
      breadcrumb: "#B0B0B0",
    },
  },
});