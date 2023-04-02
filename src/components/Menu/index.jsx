import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Menu = () => {

  return (
    <div>
      <h1>Filmová databáze</h1>
      <nav>
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? 'greenyellow' : 'black'
        })}>
          Home
        </NavLink>
        <span> | </span>
        <NavLink to="/reviews" style={({ isActive }) => ({
          color: isActive ? 'greenyellow' : 'black'
        })}>
          Reviews
        </NavLink>
        <span> | </span>
        <NavLink to="/articles" style={({ isActive }) => ({
          color: isActive ? 'greenyellow' : 'black'
        })}>
          Articles
        </NavLink>
        <span> | </span>
        <NavLink to="/movies" style={({ isActive }) => ({
          color: isActive ? 'greenyellow' : 'black'
        })}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Menu;

<NavLink to="/" style={({ isActive }) => ({
  color: isActive ? 'greenyellow' : 'white'
})}>
  Home
</NavLink>