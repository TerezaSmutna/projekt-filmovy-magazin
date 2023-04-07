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
    <div className="movie">
      <div className="image_intro">
        <img src={movie.poster} alt={movie.title} />
        <div className="intro">
          <h2>{movie.title}</h2>
          <p>{movie.storyline}</p>
        </div>
      </div>
      <div className="additional_info">
        <div><b>Year:</b> {movie.year}</div>
        <div><b>Genre:</b> {movie.genre}</div>
        <div><b>Rating:</b> {movie.rating}</div>
        <div><b>Director:</b> {movie.director}</div>
        <br></br>
        <div>
          <div><b>Cast:</b></div>
          {movie.cast.map((cast) => (
            <li key={cast.as}>{cast.name} ({cast.as})</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
