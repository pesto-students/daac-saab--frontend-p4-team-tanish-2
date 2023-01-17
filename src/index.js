import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseProvider } from "../src/context/Firebase";
import { store } from "../src/Store/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-pusoarj7qy7ljns4.us.auth0.com"
    clientId="hO3CI1dOcz5IMazDCOr0T07YlINfWOzE"
    redirectUri={window.location.origin}
    audience="https://dev-pusoarj7qy7ljns4.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <Provider store={store}>
      <FirebaseProvider>
      <App />
      </FirebaseProvider>
      
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
