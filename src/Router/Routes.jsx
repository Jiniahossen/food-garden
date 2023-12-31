import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";
import Wishlists from "../Pages/Wishlists/Wishlists";
import Dashboard from "../Layouts/Dashboard";


const Routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children:
                [
                    {
                        index: true,
                        element: <Home></Home>
                    },
                    {
                        path: '/wishlists',
                        element: <Wishlists></Wishlists>
                    },

                    {
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/signup',
                        element: <Signup></Signup>
                    }
                ]
        }
        ,
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        }
    ])

export default Routes;