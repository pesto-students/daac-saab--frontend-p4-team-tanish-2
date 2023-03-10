import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/views/Homepage/js/Homepage.js";
import OneTap from "./views/One-tap/js/OneTap";
import DoctorPage from "./views/DoctorPage/js/DoctorPage.js";
import AboutUs from "./views/About-us/js/AboutUs";
import Special from "./views/Special/Special";
import Error from "./views/404/js/Error.js";
import Coming from "./views/Coming soon/js/Coming.js";
import Calendar from "./views/Calendar/js/Calendar.js";
import Profile from "./views/Profile/js/Profile.js";
import Checkout from "./components/Stripe/checkout.js";
import JoinRoom from "./views/Video/js/JoinRoom.js";
import Room from "./views/Room/Room.js";
import Test from "./Test.jsx";
import Modal from "./views/Modal/Modal.js";
import RegisterPage from "./components/Register/js/RegisterPage.jsx";
import SignIn from "./components/Register/SignIn.jsx";
import Reset from "./components/Reset/js/Reset.js";


export default function DaacSaabRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/One-tap" element={<OneTap />} />
        <Route path="/Modal" element={<Modal />} />
        <Route path="/Specialist/:id" element={<DoctorPage />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Specialist" element={<Special />} />
        <Route path="*" element={<Error />} />
        <Route path="Coming-soon" element={<Coming />} />
        <Route path="/Specialist/:id/:id" element={<Calendar />} />
        <Route path="User-profile" element={<Profile />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Video" element={<JoinRoom />} />
        <Route path="/Test" element={<Test />}/>
        <Route path="/Reset" element={<Reset />}/>
        // <Route path="/Sign-Up" element={<RegisterPage />} />
        // <Route path="/Sign-In" element={<SignIn />} />

        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Suspense>
  );
}
