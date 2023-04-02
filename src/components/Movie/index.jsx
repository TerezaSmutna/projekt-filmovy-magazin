import React from 'react';
import './style.css';
import movies from '../../movie-database.js'
import { useParams } from 'react-router-dom';

const Movie = () => {

  const { movieId } = useParams();
  const getMovieById = (id) => {
    return movies.find(movie => movie.id === id);
  }
  const movie = getMovieById(parseInt(movieId));

  return (
    <div>
        <>
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.storyline}</p>
        </>
    </div>
  );
};

export default Movie;