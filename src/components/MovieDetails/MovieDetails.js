import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

import Spinner from 'Components/Spinner';

@inject('movies')
@observer
class MovieDetails extends React.Component {
    componentDidMount() {
        const {
            match: {
                params: {title}
            }
        } = this.props;
        this.getMovieDescription(title);
    }

    getMovieDescription = async title => {
        const {movies} = this.props;
        await movies.getMovieDetails(title);
    };

    render() {
        const {movies} = this.props;
        return (
            <>
                {movies.isFetching ? (
                    <Spinner />
                ) : (
                    <p>{JSON.stringify(movies.movieDetails)}</p>
                )}
            </>
        );
    }
}

MovieDetails.propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    movies: PropTypes.objectOf(PropTypes.any).isRequired
};
export default withRouter(MovieDetails);
