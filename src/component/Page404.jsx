import React from 'react';
import { Link } from 'react-router-dom';
// import './NotFound.css'; // Import custom CSS for additional styling

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-inner">
        <h1 className="display-1">404</h1>
        <h3>Oops! Page Not Found</h3>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
