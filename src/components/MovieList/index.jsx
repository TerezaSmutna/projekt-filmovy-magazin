import React from 'react';
import './style.css';
import movies from '../../movie-database.js'
import { NavLink } from "react-router-dom";

const MovieList = () => {

  return (
    <div className="movieList">
      <nav>
        {movies.map((movie) => <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'violet' : 'black', display: 'block', margin: '1rem 0'
          })}
          to={`/movies/${movie.id}`}
          key={movie.id}
        >
          {movie.title}
        </NavLink>)}
      </nav>
    </div>
  );
};

export default MovieList; 
