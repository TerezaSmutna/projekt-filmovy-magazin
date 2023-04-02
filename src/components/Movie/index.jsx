import React from 'react';
import './style.css';
import movies from '../../movie-database.js'
import { generatePath, useParams } from 'react-router-dom';

const Movie = () => {

  const { movieId } = useParams();
  const getMovieById = (id) => {
    return movies.find(movie => movie.id === id);
  }
  const movie = getMovieById(parseInt(movieId));

  return (
    <div>
      <div className="movie">
        <img src={movie.poster} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.storyline}</p>
        <div>{movie.year}</div>
        <div>{movie.genre}</div>
        <div>{movie.rating}</div>
        <div>{movie.director}</div>
        <div>
          {movie.cast.map((cast) => (
            <li key={cast.as}>{cast.name} jako {cast.as}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
