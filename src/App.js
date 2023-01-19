import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/js/Footer";
import Header from "./components/header/js/Header";
import LoginPage from "./components/Login/js/LoginPage";
import DaacSaabRoutes from "./Routes";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import RegisterPage from "./components/Register/RegisterPage";
import SignIn from "./components/Register/SignIn";
import { app } from "./context/Firebase";
import "./App.css";
import { onAuthStateChanged,getAuth,signOut } from "firebase/auth";


const auth = getAuth(app);


function App() {

   const [user,setUser]=useState(null);
  
  const tawkMessengerRef = useRef();

  //for user login status
  // useEffect(()=>{
  //   onAuthStateChanged(auth,user=>{
  //       if(user){
  //         setUser(user)
  //       }else{
  //         setUser(null)
  //       }
  //   })
  // }, []);

  // if(user===null){
  //   return (
  //     <>
  //     <RegisterPage />
  //     </>
  //   )
  // }

  
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Header />
      </div>
      <div style={{marginTop:"80px"}}>
        <DaacSaabRoutes />
      </div>
      <div>
        <Footer />
      </div>
      <LoginPage />
      
        <div className="App">
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
