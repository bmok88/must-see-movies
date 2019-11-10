import React, { FunctionComponent, useState, useEffect } from 'react';
import Movie, { MovieType } from './Movie';
import SearchBar from './SearchBar';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

interface MovieList {
    movies: MovieType[];
}

const MovieList: FunctionComponent<any> = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPopularMovies = async () => {
        const api = 'http://localhost:3000/movie/popular';
        const response = await fetch(api);
        const json = await response.json();

        setMovies(json.results);
    };

    const searchMovies = async () => {
        console.log(searchTerm);
        const api = `http://localhost:3000/search/movie/${searchTerm}`;

        const response = await fetch(api);
        const json = await response.json();

        setMovies(json.results);
    };

    const updateSearchTerm = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };

    useEffect(() => {
        if (searchTerm.length) {
            searchMovies();
        } else {
            fetchPopularMovies();
        }
    }, [searchTerm]);

    return (
        <div className="movie-container">
            <SearchBar updateSearchTerm={updateSearchTerm} />
            {movies.map((movie: MovieType) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
