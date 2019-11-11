/** @jsx jsx */
import React from 'react';
import Moment from 'react-moment';
import { RouteComponentProps, Link } from '@reach/router';

import { css, jsx } from '@emotion/core';

import Poster from './Poster';
import { minToHours } from '../utils/time-date-utils';

const containerStyle = css({
    width: '679px',
    margin: '0 auto'
});

const detailsContainerStyle = css({
    padding: '24px 32px'
});

const headerStyle = css({
    fontSize: '40px',
    lineHeight: '40px'
});

const detailsStyle = css({
    margin: '16px 0 0 0',
    span: {
        marginRight: '12px'
    }
});

class MovieDetails extends React.Component<
    RouteComponentProps<{ id: string }>
> {
    state = {
        loading: true,
        title: '',
        budget: 0,
        posterPath: '',
        backdropPath: '',
        overview: '',
        releaseDate: '',
        boxOffice: 0,
        runtime: 0,
        rating: 0,
        votes: 0,
        tagline: '',
        genres: [],
        productionCompanies: []
    };

    componentDidMount() {
        this.getMovieDetails();
    }

    getMovieDetails = async () => {
        const api = `http://localhost:3000/movie/details/${this.props.id}`;
        const response = await fetch(api);
        const json = await response.json();

        this.setState({
            loading: false,
            title: json.title,
            budget: json.budget.toLocaleString(),
            posterPath: json.poster_path,
            backdropPath: json.backdrop_path,
            overview: json.overview,
            releaseDate: json.release_date,
            boxOffice: json.revenue.toLocaleString(),
            runtime: minToHours(json.runtime),
            rating: json.vote_average + '/10',
            votes: json.vote_count.toLocaleString(),
            tagline: json.tagline,
            genres: json.genres,
            productionCompanies: json.production_companies
        });
    };

    render() {
        const {
            loading,
            title,
            budget,
            posterPath,
            backdropPath,
            overview,
            genres,
            releaseDate,
            runtime,
            boxOffice,
            rating,
            votes,
            tagline,
            productionCompanies
        } = this.state;

        if (loading) {
            return (
                <h1 className="status-message">Fetching movie details...</h1>
            );
        }

        return (
            <div css={containerStyle} className="box-shadow">
                <Poster url={posterPath} alt={title} size="w185" />
                <Poster
                    url={backdropPath}
                    alt={title}
                    size="w780"
                    scaled="494px"
                />
                <div
                    className="white-text dark-element-background"
                    css={detailsContainerStyle}
                >
                    <div css={headerStyle}>{title}</div>

                    <div css={detailsStyle}>
                        <div
                            css={css`
                                margin-bottom: 4px;
                            `}
                        >
                            <span>
                                <i className="far fa-star grey-text"></i>
                                {rating}
                            </span>
                            <span>
                                <i className="fas fa-poll grey-text"></i>
                                {votes}
                            </span>
                            <span>
                                <i className="far fa-comments grey-text"></i>
                                {tagline}
                            </span>
                        </div>
                        <div>
                            <span>
                                <i className="far fa-hourglass grey-text"></i>
                                {runtime}
                            </span>
                            <span>
                                <i className="fas fa-film grey-text"></i>
                                {genres.map(({ name }) => name).join(', ')}
                            </span>
                            <span>
                                <i className="far fa-calendar-alt grey-text"></i>
                                <Moment format="MMMM DD, YYYY">
                                    {releaseDate}
                                </Moment>
                            </span>
                        </div>
                    </div>
                    <div className="medium-padding">{overview}</div>
                    <div className="more-info flex">
                        <div
                            css={css`
                                flex: 1;
                            `}
                        >
                            <div className="small-padding">
                                <span className="grey-text bold">
                                    Box Office:
                                </span>
                                ${boxOffice}
                            </div>
                            <div className="small-padding">
                                <span className="grey-text bold">Budget: </span>
                                ${budget}
                            </div>
                        </div>
                        <div
                            css={css`
                                margin-top: 8px;
                            `}
                        >
                            {productionCompanies
                                .filter(({ logo_path }) => logo_path)
                                .map(({ logo_path, name }) => {
                                    return (
                                        <span
                                            key={name}
                                            css={css`
                                                margin-left: 16px;
                                            `}
                                        >
                                            <Poster
                                                url={logo_path}
                                                alt={name}
                                                size="w92"
                                                scaled="56px"
                                                customClass="invert-color"
                                            />
                                        </span>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
