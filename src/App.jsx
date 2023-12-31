import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { router } from "./route/route";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Toaster
        position="top-center"
        reverseOrder={true}
        autoClose={5000}
      ></Toaster>
      <RouterProvider router={router} />
      <>
        <ScrollToTop smooth />
      </>
    </>
  );
}

export default App;
