import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

import MovieList from './components/MovieList';

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">Must See Movies</Link>
            </header>
            <MovieList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
