import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { useNavigate } from 'react-router-dom';
// import './Auth.css'; // Import custom CSS for additional styling

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission to the database
    // console.log('Login Data:', formData);
    // authService.login(formData)
    login(formData)
    setFormData({
      email:"",
      password:""
    })
  };

  const login = async (formData) => {
    try {
      const data = await authService.login(formData)
      console.log(data)
      if(data){
        // const userData = await authService.getCurrentUser()
        // console.log(userData)
        navigate("/todos")

      }else{
        console.log("current user cant find")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
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
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="/">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
