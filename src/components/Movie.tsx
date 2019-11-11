/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Link } from '@reach/router';

import { css, jsx } from '@emotion/core';

import Poster from './Poster';

const movieInfoStyle = css({
    padding: '16px'
});

export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

const Movie: FunctionComponent<MovieType> = props => {
    const { id, poster_path, title } = props;

    return (
        <Link
            to={`/details/${id}`}
            className="flex-display no-underline box-shadow"
        >
            <Poster url={poster_path} alt={title} size="w154" />
            {/* <div css={movieInfoStyle}>
                <div
                    css={css`
                        font-size: 14px;
                        font-weight: bold;
                    `}
                >
                    {title}
                </div>
            </div> */}
        </Link>
    );
};

export default Movie;
