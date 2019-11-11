/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Link } from '@reach/router';

import { css, jsx } from '@emotion/core';

import Poster from './Poster';

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
        <Link to={`/details/${id}`} className="no-underline">
            <Poster url={poster_path} alt={title} size="w154" />
        </Link>
    );
};

export default Movie;
