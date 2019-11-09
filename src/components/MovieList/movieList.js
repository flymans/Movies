import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from 'Components/MovieItem';

const MovieList = ({movieList}) => {
    return (
        <ul>
            {movieList.map(movie => (
                <MovieItem movie={movie} />
            ))}
        </ul>
    );
};

MovieList.propTypes = {
    movieList: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default MovieList;
