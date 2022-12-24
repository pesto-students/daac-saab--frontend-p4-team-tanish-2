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
        <Route exact path="/" element={<Homepage />} />
        <Route path="/One-tap" element={<OneTap />} />
        <Route path="/Doctor" element={<DoctorPage />} />
        <Route path="/About-us" element={<AboutUs />} />
      </Routes>
    </Suspense>
  );
}
