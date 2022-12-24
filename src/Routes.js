import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/views/Homepage/js/Homepage.js";
import OneTap from "./views/One-tap/js/OneTap";
import DoctorPage from "./views/DoctorPage/js/DoctorPage.js";
import AboutUs from "./views/About-us/js/AboutUs";

export default function DaacSaabRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route exact path="/Home" element={<Homepage />} />
        <Route exact path="/One-tap" element={<OneTap />} />
        <Route exact path="/Doctor" element={<DoctorPage />} />
        <Route exact path="/About-us" element={<AboutUs />} />
      </Routes>
    </Suspense>
  );
}
