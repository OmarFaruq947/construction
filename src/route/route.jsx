import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BlogDetails from "../Pages/Blog/BlogDetails";
import BlogGrid from "../Pages/Blog/BlogGrid";
import BlogRegular from "../Pages/Blog/BlogRegular";
import Contact from "../Pages/Contact/Contact";
import FAQ from "../Pages/Faq/FAQ";
import History from "../Pages/History/History";
import Home1 from "../Pages/Home/Home1";
import Mission from "../Pages/MissionAndVision/Mission";
import Vision from "../Pages/MissionAndVision/Vision";
import NoMatch from "../Pages/NoMatch/NoMatch";
import Pricing from "../Pages/Pricing/Pricing";
import ProjectDetails from "../Pages/Project/ProjectDetails";
import Registration from "../Pages/Registation/Registration";
import ServiceMoreDetails from "../Pages/Services/ServiceMoreDetails";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Shop from "../Pages/Shop/Shop";
import ShopDetails from "../Pages/Shop/ShopDetails";
import Team from "../Pages/Team/Team";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "/servicesDetails",
        element: <ServicesDetails />,
      },
      {
        path: "/ProjectDetails",
        element: <ProjectDetails />,
      },
      {
        path: "/blogRegular",
        element: <BlogRegular />,
      },
      {
        path: "/blogGrid",
        element: <BlogGrid />,
      },
      {
        path: "/blogDetails",
        element: <BlogDetails />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shopDetails",
        element: <ShopDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path:"/mission",
        element: <Mission />
      },
      {
        path:"/vision",
        element: <Vision />
      },
      {
        path:"/service-more-details/:id",
        element: <ServiceMoreDetails />
      }
    ],
  },
]);
