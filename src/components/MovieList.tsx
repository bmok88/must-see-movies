import React, { FunctionComponent, useState, useEffect } from 'react';
import Movie, { MovieType } from './Movie';

interface MovieList {
    movies: MovieType[];
}

const MovieList: FunctionComponent<MovieList> = () => {
    const [movies, setMovies] = useState({ movies: [] });

    useEffect(async () => {
        const api = `https://api.themoviedb.org/3/movie/popular?api_key=349985f5f59407dc326ef387df713eb2&language=en-US&page=1`;
        const movies = await fetch(api);
        console.log(movies);
        // movies.then(movies => setMovies(movie))
        setMovies(movies);
        // (effect)
        // return () => {
        //     cleanup
        // };
    }, []);
    return (
        <div className="movie-container">
            {movies.movies.map(movie => {
                return <Movie key={movie.id} />;
            })}
        </div>
    );
};

export default MovieList;
