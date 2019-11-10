import React, { useState, FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

const SearchBar: FunctionComponent<RouteComponentProps> = () => {
    const [movie, setMovie] = useState('');

    const searchMovie = async () => {
        const api = `http://localhost:3000/search/movie/${movie}`;

        const response = await fetch(api);
        const json = await response.json();
        console.log(movie);
        console.log(json.results);
    };

    // useEffect(movie => {
    //     setMovie(movie);
    //     // return () => {
    //     //     cleanup
    //     // };
    // }, [movie]);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                searchMovie();
            }}
        >
            <label htmlFor="movie">
                Movie
                <input
                    id="movie"
                    type="text"
                    value={movie}
                    placeholder="Search for a movie..."
                    onChange={e => setMovie(e.target.value)}
                    onBlur={e => setMovie(e.target.value)}
                />
            </label>
            <button>Search</button>
        </form>
    );
};

export default SearchBar;
