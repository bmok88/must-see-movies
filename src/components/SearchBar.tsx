import React, { useState, FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

interface SearchProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: FunctionComponent<SearchProps> = ({ setSearchTerm }) => {
    const [movieName, setMovieName] = useState('');

    return (
        <label htmlFor="movieName">
            Movie
            <input
                id="movieName"
                type="text"
                value={movieName}
                placeholder="Search for a movie..."
                onChange={e => setMovieName(e.target.value)}
                onBlur={e => setMovieName(e.target.value)}
            />
        </label>
    );
};

export default SearchBar;
