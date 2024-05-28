import React from 'react';

function Movie(props) {
const {
  Title: title,
  Year: year,
  imdbID: id,
  Type: type,
  Poster: poster 
} = props

    return <div id={id} className="movie card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={poster} alt={title}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <span>{year}<span className='right'>{type}</span></span>
    </div>
    </div>;
}

export { Movie };