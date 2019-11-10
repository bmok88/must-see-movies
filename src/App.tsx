import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">Must See Movies</Link>
            </header>
            <SearchBar />
            <MovieList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
