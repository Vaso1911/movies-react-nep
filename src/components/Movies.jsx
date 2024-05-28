import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props

  return <div className="movies">

    {movies.length ? movies.map(movie => (
      <Movie key={movie.id} {...movie}></Movie>
    )) : <h2>Nothing found</h2>
  }
  </div>;
}

export { Movies };