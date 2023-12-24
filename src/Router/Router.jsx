import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/homePage";
import SignUp from "../Pages/Signup/SignUp";
import MainLayout from "../Layout/Main/MainLayout";
import Login from "../Pages/Login/Login";
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
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
