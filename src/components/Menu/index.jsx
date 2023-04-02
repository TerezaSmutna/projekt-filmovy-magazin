import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/reviews">Reviews</Link>
        <span> | </span>
        <Link to="/articles">Articles</Link>
        <span> | </span>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Menu;