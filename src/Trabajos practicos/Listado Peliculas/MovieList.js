import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import SearchComponent from './Components/SearchComponent';
import MovieCard from './Components/MovieCard';
import peliculas from './MOVIES_DATA.json';


function App() {
    return (
        <>
            <SearchComponent />
            <ul className="movie-list">
                {peliculas.map((pelicula) => (
                    <MovieCard key={pelicula.duration}
                        poster={pelicula.poster}
                        title={pelicula.title}
                        releaseDate={pelicula.releaseDate}
                        duration={pelicula.duration}
                        maturity={pelicula.maturity}
                        genres={pelicula.genres}
                        rating={pelicula.rating}
                        metascore={pelicula.metascore}
                        director={pelicula.director}
                        mainActors={pelicula.mainActors}
                        plot={pelicula.plot} />
                ))}
            </ul>
        </>
    );
}


const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);
