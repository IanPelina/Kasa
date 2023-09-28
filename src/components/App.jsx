import React from "react";
import Header from "./Header/Header";
import Router from "../router/Router";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main>
        <Router />
      </Main>
      <Footer />
    </div>
  );
}