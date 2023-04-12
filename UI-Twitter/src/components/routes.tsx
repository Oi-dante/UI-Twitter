import { createBrowserRouter } from "react-router-dom";
import { TimeLine } from "../pages/Timeline";
import { Status } from "../pages/Status";

export const router = createBrowserRouter ([
    {
        path:'/',
        element: <TimeLine/>
    },
    {
        path: '/status',
        element: <Status/>,
    }
])