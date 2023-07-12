import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';

const MainNav = () => {
  return (
    <div className="navbar">
     
        <Link to="/" className="navbarh">MakeFolio</Link>
        <SearchBar/>
          <Link to="/wishlist" className='navbarh'>Wishlist</Link>
          <Link to="/cart" className='navbarh'>About</Link>
          <Link to="/profile" className='navbarh'>Profile</Link>
          {/* <Link to="/" className='navbarh'>Logout</Link> */}
    </div>
  );
};

export default MainNav;
