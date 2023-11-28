import React from 'react';

function MovieCard({
  poster,
  title,
  releaseDate,
  duration,
  maturity,
  genres,
  rating,
  metascore,
  director,
  mainActors,
  plot,
}) {
  return (
      <li className="movie-card">
          <div className="movie-info">
              <img src={poster} alt={`Poster de ${title}`} />
              <ul>
                  <li><h2>{title}</h2></li>
                  <li className='lh'><strong><span>{releaseDate}</span></strong></li>
                  <li className='lh'><strong><span>{duration}</span></strong></li>
                  <li className='lh'><strong><span>{maturity}</span></strong></li>
                  <li className='lh'><strong><span>{genres.join(' - ')}</span></strong></li>
                  <li><h4>Rating: {rating} </h4></li>
                  <li><h4>Metascore: <span className={metascore > 59 ? 'metascore-green' : metascore < 50 ? 'metascore-red' : 'metascore-yellow'}>{metascore}</span></h4></li>
                  <li><h4>Director: {director}</h4></li>
                  <li><h4>Cast: {mainActors.join(' - ')}</h4></li>
                  <li><p>{plot}</p></li>
              </ul>
          </div>
      </li>
  );
}

export default MovieCard;