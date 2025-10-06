import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro";
import App from "../App";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/", 
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
