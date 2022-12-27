import React, { useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/js/Footer";
import Header from "./components/header/js/Header";
import LoginPage from "./components/Login/js/LoginPage";
import DaacSaabRoutes from "./Routes";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import "./App.css";
function App() {
  const tawkMessengerRef = useRef();
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
      <div className="App">
        <button onClick={handleMinimize}> Minimize the Chat </button>
        <TawkMessengerReact
          propertyId="63ab238047425128790a52c4"
          widgetId="1gla85bm5"
          ref={tawkMessengerRef}
        />
      </div>
    </Router>
  );
}

export default App;
