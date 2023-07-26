import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar bg-slate-200">
            <div className="left ">
                <li className="lg:text-xl font-bold hover:text-green-600"><Link to="/home">Home  </Link></li>
                <li className="lg:text-xl font-bold hover:text-green-600"><Link to="/addhome">SellHome</Link></li>
                <li className="lg:text-xl font-bold hover:text-green-600" ><Link to="/Login">Login   </Link></li>
                <li className="lg:text-xl font-bold hover:text-green-600"><Link to="/category">Category   </Link></li>
            </div>
            <div className="right">
                <img src="therealtor.jpg" alt="TheImage" />
            </div>
        </div>
    );
}

export default Navbar;
