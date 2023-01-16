import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/js/Footer";
import Header from "./components/header/js/Header";
import LoginPage from "./components/Login/js/LoginPage";
import DaacSaabRoutes from "./Routes";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDyteClient, DyteProvider } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";


import "./App.css";
function App() {
  const [dyteMeeting, dyteInitMeeting] = useDyteClient();

  useEffect(() => {
    dyteInitMeeting({
      roomName: "bnesln-ntjjcj",
      authToken: "200a2410631a887d3365",
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  const tawkMessengerRef = useRef();
  const { isAuthenticated } = useAuth0();
  // const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Header />
      </div>
      <div style={{marginTop:"80px"}}>
        <DaacSaabRoutes />
      </div>
      <div>
        <DyteProvider value={dyteMeeting}>
          <div style={{ width: "100vw", height: "100vh" }}>
            <DyteMeeting meeting={dyteMeeting} mode="fill" />
          </div>
        </DyteProvider>
      </div>
      {/* <div>
        <Footer />
      </div> */}
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
