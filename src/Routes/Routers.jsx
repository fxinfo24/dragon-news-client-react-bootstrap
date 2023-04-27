import { createBrowserRouter } from "react-router-dom";
import Admin from "../Layout/Admin";
import Home from "../Pages/Home/Home/Home";

const routerApp = createBrowserRouter([
    {
        path: '/',
        element: <Admin></Admin>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default routerApp;