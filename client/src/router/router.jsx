import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <JobDetails></JobDetails>,
       
      },
      {
        path: '/jobApply',
        element: <JobApply></JobApply>
      },
      {
        path: '/myApplications',
        element: <MyApplications></MyApplications>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

export default router;