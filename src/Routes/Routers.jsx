import { createBrowserRouter } from "react-router-dom";
import Admin from "../Layout/Admin";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";

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
    },
    // For new layout (named 'NewsLayout'), using another route
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])

export default routerApp;