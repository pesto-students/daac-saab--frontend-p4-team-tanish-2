import React, { useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/js/Footer";
import Header from "./components/header/js/Header";
import LoginPage from "./components/Login/js/LoginPage";
import DaacSaabRoutes from "./Routes";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
function App() {
  const tawkMessengerRef = useRef();
  const { isAuthenticated } = useAuth0();
  // const [showModal, setShowModal] = useState(false);
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Header />
      </div>
      <div>
        <DaacSaabRoutes />
      </div>
      <div>
        <Footer />
      </div>
      <LoginPage />
      {isAuthenticated && (
        <div className="App">
          <TawkMessengerReact
            propertyId="63ab238047425128790a52c4"
            widgetId="1gla85bm5"
            ref={tawkMessengerRef}
          />
        </div>
      )}
    </Router>
  );
}

export default App;
