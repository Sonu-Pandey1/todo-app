import React, { useState } from 'react';
import authService from "../appwrite/auth"
import { NavLink, useNavigate } from 'react-router-dom';
// import {account} from "../appwrite/auth"
// import { ID } from 'appwrite';
// import conf from '../conf/conf';

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // authService.createUser()
    // createUser(formData)
    authService.createUser(formData)
    // create(formData)
    setFormData({
      name:"",
      password:"",
      email:""
    })
  };

 




  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <NavLink to="/login">Login ?</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
