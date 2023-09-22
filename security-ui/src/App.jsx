import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import Layout from "./pages/layout";
import React from "react";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}