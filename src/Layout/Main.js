import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Animation from "../Shared/Animation/Animation";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import TinyNavbar from "../Shared/Navbar/TinyNavbar";

const Main = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <TinyNavbar />
      <Navbar />
      <Outlet />
      <Footer />
      <Animation />
    </>
  );
};

export default Main;
