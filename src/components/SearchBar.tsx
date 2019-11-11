/** @jsx jsx */
import { FunctionComponent } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { css, jsx } from '@emotion/core';

const searchBarContainer = css({
    paddingLeft: '16px'
});

const searchBarStyle = css({
    border: 'none',
    height: '40px',
    width: '280px',
    borderRadius: '4px',
    paddingLeft: '12px'
});

const SearchBar: FunctionComponent<any> = ({ updateSearchTerm }) => {
    return (
        <label
            htmlFor="movieName"
            css={searchBarContainer}
            className="box-shadow white-background"
        >
            <i className="fas fa-search dark-element"></i>
            <DebounceInput
                id="movieName"
                type="text"
                minLength={2}
                debounceTimeout={300}
                placeholder="Search for a movie..."
                css={searchBarStyle}
                onChange={e => updateSearchTerm(e.target.value)}
                onBlur={e => updateSearchTerm(e.target.value)}
            />
            {/* <input
              
            /> */}
        </label>
    );
};

export default SearchBar;
