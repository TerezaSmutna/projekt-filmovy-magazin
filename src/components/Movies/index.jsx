import React from 'react';
import './style.css';
import MovieList from '../MovieList';
import { Outlet } from 'react-router-dom';

const Movies = () => {

  return (
    <div className="movies">
      <h2 className="movies_h2">Movies</h2>
      <MovieList />
      <Outlet />
    </div>
  );
};

export default Movies;


