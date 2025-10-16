import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayOut,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/apps',
                Component:Apps
            }
        ]
    }
])

export default router