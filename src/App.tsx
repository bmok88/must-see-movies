import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">Must See Movies</Link>
            </header>
            <Router>
                <MovieList path="/" />
                <MovieDetails path="/details/:id" />
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
