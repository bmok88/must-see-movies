/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';

const searchBarStyle = css({
    height: '40px'
});

const SearchBar: FunctionComponent<any> = ({ updateSearchTerm }) => {
    return (
        <label css={searchBarStyle} htmlFor="movieName">
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
