import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList({movies, setId}) {

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {

  const { title, director, metascore } = props.movie;

  return (
    <Link to={`movie/${props.movie.id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div></Link>
  );
}
