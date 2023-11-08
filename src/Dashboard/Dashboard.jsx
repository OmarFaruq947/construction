import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import TinyNavbar from "../Shared/Navbar/TinyNavbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <TinyNavbar />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
