import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BlogDetails from "../Pages/Blog/BlogDetails";
import BlogRegular from "../Pages/Blog/BlogRegular";
import Booking from "../Pages/Booking/Booking";
import Contact from "../Pages/Contact/Contact";
import FAQ from "../Pages/Faq/FAQ";
import History from "../Pages/History/History";
import Home1 from "../Pages/Home/Home1";
import Mission from "../Pages/MissionAndVision/Mission";
import Vision from "../Pages/MissionAndVision/Vision";
import NoMatch from "../Pages/NoMatch/NoMatch";
import Payment from "../Pages/Payment/Payment";
import Pricing from "../Pages/Pricing/Pricing";

import Dashboard from "../Dashboard/Dashboard";
import DashboardDetails from "../Dashboard/DashboardDetails";
import UserBooking from "../Dashboard/UserBooking";
import UserFeedBack from "../Dashboard/UserFeedBack";
import UserProfile from "../Dashboard/UserProfile";
import HotNews from "../Pages/HotNews/HotNews";
import Registration from "../Pages/Registation/Registration";
import ServiceMoreDetails from "../Pages/Services/ServiceMoreDetails";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Checkout from "../Pages/Shop/Checkout";
import Shop from "../Pages/Shop/Shop";
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
        path: "/blogRegular",
        element: <BlogRegular />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/vision",
        element: <Vision />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/service-more-details/:id",
        element: <ServiceMoreDetails />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/hot-news",
        element: <HotNews />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "/dashboard/user-dashboard",
        element: <DashboardDetails />,
      },
      {
        path: "/dashboard/profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/booking",
        element: <UserBooking />,
      },
      {
        path: "/dashboard/feedback",
        element: <UserFeedBack />,
      },
    ],
  },
]);
