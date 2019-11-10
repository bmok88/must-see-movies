import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Poster from './Poster';

class MovieDetails extends React.Component<
    RouteComponentProps<{ id: string }>
> {
    state = {
        loading: true,
        title: '',
        posterPath: '',
        homepage: '',
        overview: '',
        releaseDate: '',
        boxOffice: 0,
        runtime: 0,
        rating: 0,
        votes: 0,
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
        console.log(json);

        this.setState({
            loading: false,
            title: json.title,
            posterPath: json.poster_path,
            homepage: json.homepage,
            overview: json.overview,
            releaseDate: json.release_date,
            boxOffice: json.revenue,
            runtime: json.runtime + 'minutes',
            rating: json.vote_Average + '/10',
            votes: json.vote_count,
            genres: json.genres,
            productionCompanies: json.production_companies
        });
    };

    render() {
        const { loading, title, posterPath } = this.state;

        if (loading) {
            return <h1>Fetching movie details...</h1>;
        }

        return (
            <div className="movie-details-container">
                <Poster url={posterPath} alt={title} size={'w342'} />
                <div className="details-container"></div>
            </div>
        );
    }
}

export default MovieDetails;
