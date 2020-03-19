import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react';
import './Header.scss';
import CartButton from "./CartButton/CartButton";
class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                        <h2>Tapes<span>equipment</span></h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/register">Register</Link></li> */}
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </header>
                    <CartButton />
            </div>
        );
    }
}
export default Header;