import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getSingleMovie} from 'Services';
import Spinner from 'Components/Spinner';

class MovieDetails extends React.Component {
    state = {
        isFetching: true,
        movieDetails: null
    };

    componentDidMount() {
        const {
            match: {
                params: {title}
            }
        } = this.props;
        this.getMovieDescription(title);
    }

    getMovieDescription = async title => {
        const data = await getSingleMovie(title);
        this.setState({movieDetails: data, isFetching: false});
    };

    render() {
        const {isFetching, movieDetails} = this.state;
        return (
            <>
                {isFetching ? (
                    <Spinner />
                ) : (
                    <p>{JSON.stringify(movieDetails)}</p>
                )}
            </>
        );
    }
}

MovieDetails.propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired
};
export default withRouter(MovieDetails);
