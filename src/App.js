import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/js/Footer";
import Header from "./components/header/js/Header";
import DaacSaabRoutes from "./Routes";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Header showLogin={showLogin} setShowLogin={setShowLogin} />
      </div>
      <div>
        <DaacSaabRoutes />
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
