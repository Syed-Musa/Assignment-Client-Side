import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage";
import AddJobs from "../Pages/AddJobs";
import PostedJobs from "../Pages/PostedJobs";
import Bids from "../Pages/Bids";
import BidReq from "../Pages/bidReq";
import Register from "../RegisterLogin/Register";
import Login from "../RegisterLogin/Login";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../ErrorPage/ErrorPage";
import JobsDtl from "../LatestJobs/JobsDtl";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/jobs/:_id',
          element: <JobsDtl></JobsDtl>,
          loader: () => fetch('https://assignment-server-side-xi.vercel.app/jobs')
        },
        {
          path: '/addjob',
          element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
        },
        {
          path: '/postedjob',
          element: <PrivateRoutes><PostedJobs></PostedJobs></PrivateRoutes>
        },
        {
          path: '/bids',
          element: <PrivateRoutes><Bids></Bids></PrivateRoutes>
        },
        {
          path: '/bidReq',
          element: <PrivateRoutes><BidReq></BidReq></PrivateRoutes>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
]);

export default router;