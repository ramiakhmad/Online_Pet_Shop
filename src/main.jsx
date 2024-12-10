import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { Provider as ReduxProvider, useSelector } from "react-redux";
import store from "./redux/store";
import { lightTheme, darkTheme } from "./theme";

const ThemedApp = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <ThemedApp />
  </ReduxProvider>
);
