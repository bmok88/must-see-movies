import React, { FunctionComponent, useState, useEffect } from 'react';
import Movie, { MovieType } from './Movie';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

interface MovieList {
    movies: MovieType[];
}

const MovieList: FunctionComponent<MovieList> = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies);

    const fetchMovies = async () => {
        const api =
            'https://api.themoviedb.org/3/movie/popular?api_key=349985f5f59407dc326ef387df713eb2&language=en-US&page=1';
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
