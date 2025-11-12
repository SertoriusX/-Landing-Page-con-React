import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>We provide innovative solutions to help you grow and succeed in the digital world.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
