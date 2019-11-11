/** @jsx jsx */
import { FunctionComponent, useState, useEffect } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { css, jsx } from '@emotion/core';

import Movie, { MovieType } from './Movie';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

interface MovieList {
    movies: MovieType[];
}

const movieListStyle = css({
    display: 'grid',
    gridGap: '32px',
    marginTop: '32px',
    gridTemplateColumns: 'repeat(auto-fill, 154px)'
});

const MovieList: FunctionComponent<any> = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [genres, setGenres] = useState([]);

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

    const fetchGenres = async () => {
        const api = 'http://localhost:3000/genre';
        const response = await fetch(api);
        const json = await response.json();

        setGenres(json.genres);
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

    useEffect(() => {
        console.log(genres);
        if (!genres.length) {
            fetchGenres();
        }
    }, [genres]);

    return (
        <div>
            <div className="flex">
                <div
                    css={css`
                        flex: 1;
                    `}
                >
                    <SearchBar updateSearchTerm={updateSearchTerm} />
                </div>

                <Dropdown data={genres} />
            </div>
            <div css={movieListStyle}>
                {movies.map((movie: MovieType) => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
