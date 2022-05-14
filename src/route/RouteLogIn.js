import React from 'react'
import {
    BrowserRouter,
    Routes as BrowserRoutes,
    Route
} from "react-router-dom";
import Admin from '../container/AdminPage/Admin';
import Students from '../container/StudentsPage/Students';
import EssentialLog from '../component/Routecom/EssentialLog';
import NotFound from '../component/Routecom/NotFo'

const RouteLogIn = () => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/students" element={<Students />} />
                <Route path="/signup" element={<EssentialLog />} />
                <Route path="*" element={<NotFound />} />
            </BrowserRoutes>
        </BrowserRouter>
    )
}

export default RouteLogIn;