/** @jsx jsx */
import { FunctionComponent, useState, useEffect } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { css, jsx } from '@emotion/core';

import Movie, { MovieType } from './Movie';
import SearchBar from './SearchBar';

interface MovieList {
    movies: MovieType[];
}

const movieListStyle = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)'
});

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
        <div>
            <SearchBar updateSearchTerm={updateSearchTerm} />
            <div css={movieListStyle}>
                {movies.map((movie: MovieType) => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
