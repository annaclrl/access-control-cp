import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/cadastro",
        element: <Cadastro/>,
    }
])

