import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");

    const logoutHandler = async () => {
        const x = await authService.logout();
        navigate("/login");
        console.log(x);
        console.log("logout successfully.");
        closeNavbar(); // Close the navbar on logout
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            const user = await authService.getCurrentUser();
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    };

    const closeNavbar = () => {
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to={"/"} onClick={closeNavbar}>Todo App - Sk</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={closeNavbar}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todos" onClick={closeNavbar}>Your-Todos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" onClick={closeNavbar}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</NavLink>
                        </li>
                    </ul>
                    <div>
                        {!user ? <NavLink to={"/login"}><button className='btn btn-outline-light' onClick={closeNavbar}>Login</button></NavLink> : null}
                        {!user ? <NavLink to={"/signup"}><button className='btn btn-outline-light' onClick={closeNavbar}>Signup</button></NavLink> : null}
                        {user ? <button onClick={logoutHandler} className='btn btn-outline-danger'>Logout</button> : null}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
