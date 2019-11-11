/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';

const searchBarContainer = css({
    paddingLeft: '8px'
});

const searchBarStyle = css({
    border: 'none',
    height: '40px',
    width: '280px',
    borderRadius: '4px',
    paddingLeft: '8px'
});

const SearchBar: FunctionComponent<any> = ({ updateSearchTerm }) => {
    return (
        <label
            htmlFor="movieName"
            css={searchBarContainer}
            className="box-shadow"
        >
            <i className="fas fa-search"></i>
            <input
                id="movieName"
                type="text"
                placeholder="Search for a movie..."
                css={searchBarStyle}
                onChange={e => updateSearchTerm(e.target.value)}
                onBlur={e => updateSearchTerm(e.target.value)}
            />
        </label>
    );
};

export default SearchBar;
