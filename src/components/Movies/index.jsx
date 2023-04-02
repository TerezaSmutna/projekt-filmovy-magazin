import React from 'react';
import './style.css';
import MovieList from '../MovieList';
import { Outlet } from 'react-router-dom';

const Movies = () => {

  return (
    <div className="movies">
        <h1>Movies</h1>
          <MovieList />
          <Outlet />
    </div>
  );
};

export default Movies;


