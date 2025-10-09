import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home";
import Perfil from "./perfil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h1>Erro na pagina</h1>,
    },
    {
        path: '/perfil',
        element: <Perfil />
    }
])

export default router;