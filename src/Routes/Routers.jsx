import { Navigate, createBrowserRouter } from "react-router-dom";
import Admin from "../Layout/Admin";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import LoginForm from "../Pages/Users/Login/LoginForm";
import RegistrationForm from "../Pages/Users/Registration/RegistrationForm";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";

const routerApp = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to = '/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <LoginForm></LoginForm>,
            },
            {
                path: '/register',
                element: <RegistrationForm></RegistrationForm>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
        ]
    },
    {
        path: '/category', //Step 1:
        element: <Admin></Admin>,
        children: [
            // {
            //     path: '/', //Step 2:
            //     element: <Category></Category>,
            //     // element: <Navigate to = '/category/0'></Navigate>
            // },
            {
                path: '/category/:id', //Step 3:
                // Now destructure the 'id' inside Category as useParams
                element: <Category></Category>,

                // Load category wise data from dynamic
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
            },
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
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
            }
        ]
    }
])

export default routerApp;