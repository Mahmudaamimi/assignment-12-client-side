import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Components/Signin";
import SignUp from "../Components/SignUp";
import Tech from "../Pages/Home/Tech";
import StudentDashboard from "../Layout/Dashboard/StudentDashboard/StudentDashboard";
import AddClass from "../Layout/Dashboard/StudentDashboard/AddClass";
import Myclass from "../Layout/Dashboard/StudentDashboard/Myclass";
import AllClass from "../Components/AllClass";
import ClassDetails from "../Components/ClassDetails";
import Privetroute from "./Privetroute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/tech",
                element:<Privetroute><Tech></Tech></Privetroute>,
            },
            {
                path:"/classes",
                element: <AllClass></AllClass>,
            },
            {
                path:"/classes/:id",
                loader: ({ params}) => fetch(`http://localhost:5000/addclass/${params.id}`),
                element: <ClassDetails></ClassDetails>,
            },
            {
                path:"/signin",
                element: <Signin></Signin>,
            },
            {
                path:"/signup",
                element: <SignUp></SignUp>,
            },
        ]
    },
    {
        path:'/dashboard',
        element:<StudentDashboard></StudentDashboard>,
        children:[
            {
                path:'/dashboard/addclass',
                element:<AddClass></AddClass>,

            },
            {
                path:'/dashboard/myclass',
                element:<Myclass></Myclass>,

            },
        ]
    }
])
export default router;