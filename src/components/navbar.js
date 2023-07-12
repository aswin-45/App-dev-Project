import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="mainH">
          MakeFolio
        </Link>
      </div>
      <div className="navOpt">
        <Link to="/login" className="mainH">
          Login
        </Link>
        <Link to="/signUp" className="mainH">
          SignUp
        </Link>
     </div>
    </div>
  );
};

export default Navbar;

