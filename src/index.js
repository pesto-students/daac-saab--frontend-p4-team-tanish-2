import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseProvider } from "../src/context/Firebase";
import { store } from "../src/Store/store.js";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://2338fbbf5a0643c185f024bac3d680c3@o4504531724075008.ingest.sentry.io/4504531725516800", //paste copied DSN value here
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, //lower the value in production
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <FirebaseProvider> */}
    <App />
    {/* </FirebaseProvider> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
