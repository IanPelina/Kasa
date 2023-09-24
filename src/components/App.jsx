import React from "react";
import Navbar from "./Navbar/Navbar";
import Router from "../router/Router";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="home-container">
        <Navbar />
        <Router />
        <Footer />
    </div>
  );
}