import { createBrowserRouter } from "react-router-dom";
import { TimeLine } from "../pages/Timeline";

export const router = createBrowserRouter ([
    {
        path:'/',
        element: <TimeLine/>
    },
    {
        path: '/tweet',
        element: <h1>Tweet</h1>,
    }
])