import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="links">
                <link to="/">Home</link>
                <link to="/login">Login</link>
            </div>
        </div>
    )
}