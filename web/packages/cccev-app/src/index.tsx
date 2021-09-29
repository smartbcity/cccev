import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "reportWebVitals";
import { AppProvider } from "@smartb/g2-providers";
import { languages } from "i18n";
import { history, store } from "store";
import { ThemeContextProvider } from "@smartb/g2-themes";
import { LoadingComponent } from "components";
import { muiTheme, theme } from "Themes";
import App from "App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider theme={theme} customMuiTheme={muiTheme}>
        <AppProvider
          languages={languages}
          reduxStore={store}
          history={history}
          loadingComponent={<LoadingComponent/>}
        >
          <App />
        </AppProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
