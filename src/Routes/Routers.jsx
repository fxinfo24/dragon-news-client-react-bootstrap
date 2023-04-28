import { createBrowserRouter } from "react-router-dom";
import Admin from "../Layout/Admin";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";

const routerApp = createBrowserRouter([
    {
        path: '/',
        element: <Admin></Admin>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                // Now destructure the 'id' inside Category as useParams
                element: <Category></Category>
            }
        ]
    }
])

export default routerApp;