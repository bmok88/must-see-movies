import React, { FunctionComponent, useState, useEffect } from 'react';
import Movie, { MovieType } from './Movie';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

interface MovieList {
    movies: MovieType[];
}

const MovieList: FunctionComponent<MovieList> = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const api = 'http://localhost:3000/movie/popular';
        const response = await fetch(api);
        const json = await response.json();

        setMovies(json.results);
    };

    useEffect(() => {
        fetchMovies();
        // (effect)
        // return () => {
        //     setMovies(movies);
        // };
    }, []);

    return (
        <div className="movie-container">
            {movies.map((movie: MovieType) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
