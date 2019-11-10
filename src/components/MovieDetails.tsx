import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Poster from './Poster';

class MovieDetails extends React.Component<
    RouteComponentProps<{ id: string }>
> {
    state = {
        loading: true,
        name: '',
        posterPath: ''
    };

    componentDidMount() {
        this.getMovieDetails();
    }

    getMovieDetails = async () => {
        const api = `http://localhost:3000/movie/details/${this.props.id}`;
        const response = await fetch(api);
        const json = await response.json();

        console.log(json.results);
    };

    render() {
        const { name, posterPath } = this.state;

        return <Poster url={posterPath} alt={name} size={'w342'} />;
    }
}

export default MovieDetails;
