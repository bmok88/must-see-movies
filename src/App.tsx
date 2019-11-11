/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import { css, jsx } from '@emotion/core';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

import './styles/styles.scss';

const App = () => {
    return (
        <div>
            <header
                className="dark-element-background"
                css={css`
                    font-size: 32px;
                    padding: 24px 64px 16px 64px;
                `}
            >
                <Link to="/" className="white-text no-underline">
                    Must See Movies
                </Link>
            </header>
            <Router
                css={css`
                    margin: 32px 32px 64px 64px;
                `}
            >
                <MovieList path="/" />
                <MovieDetails path="/details/:id" />
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
