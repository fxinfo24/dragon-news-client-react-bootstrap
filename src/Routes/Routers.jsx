import { Navigate, createBrowserRouter } from "react-router-dom";
import Admin from "../Layout/Admin";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";

const routerApp = createBrowserRouter([
    {
        path: '/', //Step 1:
        element: <Admin></Admin>,
        children: [
            {
                path: '/', //Step 2:
                element: <Home></Home>,
                // element: <Navigate to = '/category/0'></Navigate>
            },
            {
                path: '/category/:id', //Step 3:
                // Now destructure the 'id' inside Category as useParams
                element: <Category></Category>,

                // Load category wise data from dynamic
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
            }
        ]
    },
    // Step 4:
    // For new layout (named 'NewsLayout'), using another route
    {
        path: '/news', //Step 4.1:
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id', //Step 4.2:
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
            }
        ]
    }
])

export default routerApp;