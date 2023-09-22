import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import React from "react";
import {LoginPage} from "./pages/login";
import {RegisterPage} from "./pages/register";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}