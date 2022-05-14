import React from 'react'
import {
    BrowserRouter,
    Routes as BrowserRoutes,
    Route
} from "react-router-dom";
import SignUp from '../container/SignUp/SignUp';
import SignIn from '../container/SignIn/SignIn';
import Home from '../container/HomePage/Home';

const RouteNoLogIn = () => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </BrowserRoutes>
        </BrowserRouter>
    )
}

export default RouteNoLogIn;