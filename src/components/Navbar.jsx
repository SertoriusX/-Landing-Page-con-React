import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-dark text-white">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-light text-decoration-none">
            <svg
              className="bi"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="home" className="nav-link px-2 text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="game" className="nav-link px-2 text-white">
              Tic-Tac-Toe
            </NavLink>
          </li>

          <li>
            <NavLink to="about" className="nav-link px-2 text-white">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="features" className="nav-link px-2 text-white">
              Features
            </NavLink>
          </li>
        </ul>

        <div className="col-md-3 text-end"></div>
      </header>
    </div>
  );
}
