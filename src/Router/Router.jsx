import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/homePage";
import SignUp from "../Pages/Signup/SignUp";
import MainLayout from "../Layout/Main/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
