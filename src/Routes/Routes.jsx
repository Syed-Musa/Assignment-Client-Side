import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage";
import AddJobs from "../Pages/AddJobs";
import PostedJobs from "../Pages/PostedJobs";
import Bids from "../Pages/Bids";
import BidReq from "../Pages/bidReq";
import Register from "../RegisterLogin/Register";
import Login from "../RegisterLogin/Login";

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
          element: <AddJobs></AddJobs>
        },
        {
          path: '/postedjob',
          element: <PostedJobs></PostedJobs>
        },
        {
          path: '/bids',
          element: <Bids></Bids>
        },
        {
          path: '/bidReq',
          element: <BidReq></BidReq>
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