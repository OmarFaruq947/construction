import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import DashboardDetails from "../Dashboard/DashboardDetails";
import UserBooking from "../Dashboard/UserBooking";
import UserFeedBack from "../Dashboard/UserFeedBack";
import UserProfile from "../Dashboard/UserProfile";
import Main from "../Layout/Main";
import BlogDetails from "../Pages/Blog/BlogDetails";
import BlogRegular from "../Pages/Blog/BlogRegular";
import Booking from "../Pages/Booking/Booking";
import Contact from "../Pages/Contact/Contact";
import FAQ from "../Pages/Faq/FAQ";
import History from "../Pages/History/History";
import Home1 from "../Pages/Home/Home1";
import HotNews from "../Pages/HotNews/HotNews";
import Mission from "../Pages/MissionAndVision/Mission";
import Vision from "../Pages/MissionAndVision/Vision";
import NoMatch from "../Pages/NoMatch/NoMatch";
import Payment from "../Pages/Payment/Payment";
import Pricing from "../Pages/Pricing/Pricing";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ProjectDetails from "../Pages/Project/ProjectDetails";
import Login from "../Pages/Registation/Login";
import Registration from "../Pages/Registation/Registration";
import ServiceMoreDetails from "../Pages/Services/ServiceMoreDetails";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Checkout from "../Pages/Shop/Checkout";
import Shop from "../Pages/Shop/Shop";
import Team from "../Pages/Team/Team";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

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
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/checkout/history",
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
        path: "/ProjectDetails",
        element: <ProjectDetails />,
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
        path: "/login",
        element: <Login />,
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
