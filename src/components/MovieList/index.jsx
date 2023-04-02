import React from 'react';
import './style.css';
import movies from '../../movie-database.js'
import { Link } from 'react-router-dom';

const MovieList = () => {

  return (
    <div>
      <nav>
        {movies.map((movie) => <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/movies/${movie.id}`}
          key={movie.id}
        >
          {movie.title}
        </Link>)}
      </nav>
    </div>
  );
};

export default MovieList; 