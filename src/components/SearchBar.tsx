import React, { useState, FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

const SearchBar: FunctionComponent<RouteComponentProps> = () => {
    const [movie, setMovie] = useState('');

    async function searchMovie() {}

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                searchMovie();
            }}
        >
            <input
                type="text"
                value={movie}
                onChange={e => setMovie(e.target.value)}
                onBlur={e => setMovie(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;
