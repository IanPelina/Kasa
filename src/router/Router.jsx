import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Apropos from "../pages/Apropos/Apropos";
import Housing from "../pages/Housing/Housing";
import Error from "../pages/Error/Error";

export default function Router() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logements/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
    )
}