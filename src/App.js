import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/js/Footer";
import Header from "./components/header/js/Header";
import LoginPage from "./components/Login/js/LoginPage";
import DaacSaabRoutes from "./Routes";
import "./App.css";
function App() {
  // const [showModal, setShowModal] = useState(false);
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
    </Router>
  );
}

export default App;
