import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/views/Homepage/js/Homepage.js";
import OneTap from "./views/One-tap/js/OneTap";
import DoctorPage from "./views/DoctorPage/js/DoctorPage.js";
import AboutUs from "./views/About-us/js/AboutUs";
import Special from "./views/Special/Special";
import Error from "./views/404/js/Error.js";
import Coming from "./views/Coming soon/js/Coming.js";
export default function DaacSaabRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/One-tap" element={<OneTap />} />
        <Route path="/Doctor" element={<DoctorPage />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Specialist" element={<Special />} />
        <Route path="*" element={<Error />} />
        <Route path="Coming-soon" element={<Coming />} />
      </Routes>
    </Suspense>
  );
}
