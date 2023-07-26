import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const RootLayout = () => {
  return (
    <>
      <div style={{ paddingBottom: "100px" }}>
        <NavBar />
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
