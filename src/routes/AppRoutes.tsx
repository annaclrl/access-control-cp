import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro";
import EditarCadastro from "../pages/EditarCadastro/editarCadastro";
import ListarUsuarios from "../pages/ListarUsuarios/listarUsuraios";
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Cadastro />,
    },
    {
        path: "/usuarios",
        element: <ListarUsuarios />,
    },
    {
        path: "/editar-cadastro/:id",
        element: <EditarCadastro />,
    }

]);

