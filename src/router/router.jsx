import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Appointment from "../pages/appointment/Appointment";
import Reviews from "../pages/reviews/Reviews";
import AuthLayout from "../mainLayout/AuthLayout";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Error from "../component/Error";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/appointment',
                element:<Appointment/>
            },
            {
                path:'/reviews',
                element:<Reviews/>
            },

        ]
    },
    {
        path:'auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/signup',
                element: <Signup/>
            },
            {
                path:'/auth/login',
                element: <Login/>
            },
        ]
    },
    {
        path:'*',
        element:<Error/>
    }
])
export default router;