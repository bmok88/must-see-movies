import React, { FunctionComponent, useState, useEffect } from 'react';
import Movie, { MovieType } from './Movie';
import SearchBar from './SearchBar';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

interface MovieList {
    movies: MovieType[];
}

const MovieList: FunctionComponent<any> = () => {
    const [isSearch, toggleIsSearch] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPopularMovies = async () => {
        const api = 'http://localhost:3000/movie/popular';
        const response = await fetch(api);
        const json = await response.json();

        setMovies(json.results);
    };

    const searchMovies = async () => {
        const api = `http://localhost:3000/search/movie/${searchTerm}`;

        const response = await fetch(api);
        const json = await response.json();

        setMovies(json.results);
    };

    useEffect(() => {
        if (isSearch) {
            searchMovies();
        } else {
            fetchPopularMovies();
        }
    }, []);

    return (
        <div className="movie-container">
            <SearchBar setSearchTerm={setSearchTerm} />
            {movies.map((movie: MovieType) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
