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
      itemsBox: "#8B8B8B",
    },
    cart: {
      primary: "#b0b0b0",
    },
    custom: {
      cartPrimary: "#b0b0b0", // Define custom variable
    },
  },
}); // Close the lightTheme object properly

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
      itemsBox: "#282828",
    },
    cart: {
      primary: "#282828",
    },
    custom: {
      cartPrimary: "#282828", // Define custom variable
    },
  },
});
