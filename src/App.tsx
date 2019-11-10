import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

import SearchBar from './components/SearchBar';

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">Must See Movies</Link>
            </header>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
