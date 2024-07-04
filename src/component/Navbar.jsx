import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';


function Navbar() {
    const navigate = useNavigate()
    const [user,setUser] =useState("")

    const logoutHandler = async ()=>{
        const x = await authService.logout()
        navigate("/login")
        console.log(x)
        console.log("logout successfully .")
        

    }

    useEffect(()=>{
        getCurrentUser()

    },[])

    const getCurrentUser =async ()=>{
        try {
            const user = await authService.getCurrentUser()
            setUser(user)
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to={"/"}>Todo App - Sk</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todos" >Your-Todos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                    <div>
                        {!user ? <NavLink to={"/login"} ><button className='btn btn-outline-light'>Login</button></NavLink> : null}
                        {!user ? <NavLink to={"/signup"}><button className='btn btn-outline-light'>Signup</button></NavLink>:null }
                        {user ? <button onClick={logoutHandler} className='btn btn-outline-danger'>Logout</button>:null}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
