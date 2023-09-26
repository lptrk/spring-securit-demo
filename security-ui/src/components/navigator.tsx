import {NavLink, useLocation} from "react-router-dom";
import { formatRoute } from "../utils/utils";
import { homeConfig } from "../config/home";
import React from "react";

export const Navigator = () => {
    const currentRoute = useLocation().pathname;

    // Aktualisiere den active-Wert in homeConfig basierend auf der aktuellen Route
    homeConfig.mainNav.forEach((route) => {
        route.active = route.href === currentRoute;
    });

    return (
        <><div className='mb-20'>
            {homeConfig.mainNav.map((route) => (
                <div className='flex items-center justify-center'>
                    <NavLink
                        key={route.href}
                        to={route.href}
                        className={route.active ? "text-7xl font-extrabold italic text-white" : "text-4xl font-bold italic text-white opacity-30"}
                    >
                        {route.title}
                    </NavLink>
                </div>

            ))}
        </div>

        </>
    );
};
