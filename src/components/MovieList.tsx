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

interface Genre {
    id: string;
    name: string;
}

const movieListStyle = css({
    display: 'grid',
    gridGap: '32px',
    marginTop: '32px',
    gridTemplateColumns: 'repeat(auto-fill, 154px)'
});

const MovieList: FunctionComponent<any> = () => {
    const [loading, setLoading] = useState(true);
    const [allMovies, setAllMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentGenre, setCurrentGenre] = useState({
        id: 'All',
        name: 'All'
    });
    const [genres, setGenres] = useState([{ id: 'All', name: 'All' }]);

    const fetchPopularMovies = async () => {
        setLoading(true);
        const api = 'http://localhost:3000/movie/popular';
        const response = await fetch(api);
        const json = await response.json();

        setLoading(false);
        setMovies(json.results);
        setAllMovies(json.results);
    };

    const searchMovies = async () => {
        setLoading(true);
        const api = `http://localhost:3000/search/movie/${searchTerm}`;
        const response = await fetch(api);
        const json = await response.json();

        setLoading(false);
        setMovies(json.results);
        setAllMovies(json.results);
    };

    const fetchGenres = async () => {
        const api = 'http://localhost:3000/genre';
        const response = await fetch(api);
        const json = await response.json();
        const newGenres = [...genres, ...json.genres];
        console.log(newGenres);
        setGenres(newGenres);
    };

    const updateSearchTerm = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };

    const filterMoviesByGenre = (genre: Genre) => {
        const filteredMovies = allMovies.filter((movie: any) =>
            movie['genre_ids'].some(
                (id: string) => id === genre.id || genre.id === 'All'
            )
        );
        setCurrentGenre(genre);
        console.log(movies);
        console.log(allMovies);
        console.log(filteredMovies);
        setMovies(filteredMovies);
    };

    useEffect(() => {
        if (searchTerm.length) {
            searchMovies();
        } else {
            fetchPopularMovies();
        }
    }, [searchTerm]);

    useEffect(() => {
        if (genres.length === 1) {
            fetchGenres();
        }
    }, [genres]);

    if (loading) {
        return (
            <div>
                <div className="flex">
                    <SearchBar updateSearchTerm={updateSearchTerm} />
                    <div
                        css={css`
                            flex: 1;
                        `}
                    >
                        <Dropdown
                            keyName="name"
                            data={genres}
                            selectDropdownItem={filterMoviesByGenre}
                        />
                    </div>
                </div>
                <h1 className="status-message">Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <div className="flex">
                <SearchBar updateSearchTerm={updateSearchTerm} />
                <div
                    css={css`
                        flex: 1;
                    `}
                >
                    <Dropdown
                        keyName="name"
                        data={genres}
                        selectDropdownItem={filterMoviesByGenre}
                    />
                </div>
            </div>
            <div>
                {movies.length ? (
                    <div css={movieListStyle}>
                        {movies.map((movie: MovieType) => (
                            <Movie key={movie.id} {...movie} />
                        ))}
                    </div>
                ) : (
                    <div className="status-message">
                        No results... try a different search!
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieList;
