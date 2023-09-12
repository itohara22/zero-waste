import React from "react";
import { Link } from "react-router-dom";

function Navbar({ loginHandler, isLoggedIn }) {
  return (
    <nav className="bg-background p-4 fixed top-0 inset-x-0 z-10">
      <div className="px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-text">
          <a href="#hero">Zero Waste</a>
        </div>
        <ul className="flex justify-between min-w-[40vw]">
          <li>
            <a href="#the-problem" className="text-text hover:text-accent">
              The Problem
            </a>
          </li>
          <li>
            <a href="#the-solution" className="text-text hover:text-accent">
              The Solution
            </a>
          </li>
          <li>
            <a href="#about" className="text-text hover:text-accent">
              About
            </a>
          </li>
          <li></li>
        </ul>
        {isLoggedIn ? (
          <Link to="/">
            <button
              onClick={() => loginHandler(false)}
              className="bg-primary text-text px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="bg-primary text-text px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
