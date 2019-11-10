import React, { FunctionComponent } from 'react';

// interface SearchProps {
//     setSearchTerm: any;
// }

const SearchBar: FunctionComponent<any> = ({ updateSearchTerm }) => {
    return (
        <label htmlFor="movieName">
            Movie
            <input
                id="movieName"
                type="text"
                placeholder="Search for a movie..."
                onChange={e => updateSearchTerm(e.target.value)}
                onBlur={e => updateSearchTerm(e.target.value)}
            />
        </label>
    );
};

export default SearchBar;
