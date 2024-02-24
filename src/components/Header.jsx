import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 border-b border-purple-700 px-4 lg:px-6 py-3 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold tracking-tight">
            Employee Management System
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
