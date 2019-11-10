import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';

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
    return (
        <Link to="/">
            <div className="poster-container">
                <img
                    src={`http://image.tmdb.org/t/p/w185${props.poster_path}`}
                    alt={props.title}
                />
            </div>
            <div className="movie-info">
                <h1>{props.title}</h1>
            </div>
        </Link>
    );
};

export default Movie;
