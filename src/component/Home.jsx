import React from 'react';

const Home = () => {
  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Website!</h1>
          <p className="lead">Creating high-quality web applications tailored to your needs.</p>
          <a href="/contact" className="btn btn-primary btn-lg mt-3">Get in Touch</a>
        </div>
      </header>

      <section className="py-5">
        <div className="container text-center">
          <h2>Our Services</h2>
          <p className="lead">We offer a wide range of web development services.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repudiandae.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://cdn.pixabay.com/photo/2019/03/12/20/28/software-4051778_640.jpg" className="card-img-top" alt="Service 2" />
                <div className="card-body">
                  <h5 className="card-title">This is A Todo App</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique dolore nobis omnis nihil, eum ipsa, quis perspiciatis laudantium sed dicta ad. Quaerat iure accusamus odit molestias.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://cdn.pixabay.com/photo/2019/05/14/17/07/web-development-4202909_1280.png" className="card-img-top" alt="Service 3" />
                <div className="card-body">
                  <h5 className="card-title">App Development</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dignissimos?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Why Choose Us?</h2>
          <p className="lead">We are dedicated to providing the best solutions for our clients.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-icon bg-primary text-white rounded-circle mb-3">
                <i className="fas fa-check fa-2x"></i>
              </div>
              <h5>Quality</h5>
              <p>High-quality services tailored to your needs.</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon bg-primary text-white rounded-circle mb-3">
                <i className="fas fa-clock fa-2x"></i>
              </div>
              <h5>Efficiency</h5>
              <p>Efficient solutions to save you time and money.</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon bg-primary text-white rounded-circle mb-3">
                <i className="fas fa-users fa-2x"></i>
              </div>
              <h5>Support</h5>
              <p>24/7 support to help you with your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2024 Todo-App-Sk .  All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
