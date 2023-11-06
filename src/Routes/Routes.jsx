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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
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