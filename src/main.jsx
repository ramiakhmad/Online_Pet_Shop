import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    color: "#282828"
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>
);
