import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">TechMeCode</h1>
            <ul className="navLinks">
                <Link to="/home" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/aboutus" className="about">
                    <li>About Us</li>
                </Link>
                <Link to="/hirefromus" className="hirefromus">
                    <li>Hire From Us</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>Contact</li>
                </Link>
                <Link to="/login" className="login">
                    <li>Login In</li>
                </Link>
                <Link to="/applynow" className="applynow">
                    <li>Apply Now</li>
                </Link>

            </ul>







        </nav >


    )
}
