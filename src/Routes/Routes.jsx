import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import AppsDetails from "../Pages/AppsDetails";
import Installed from "../Pages/Installed";

const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage/>,
        Component:MainLayOut,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/apps',
                Component:Apps
            },
            {
                path:'/appsdetails/:id',
                Component:AppsDetails
            },
            {
                path:'installed',
                Component: Installed
            }
        ]
    }
])

export default router