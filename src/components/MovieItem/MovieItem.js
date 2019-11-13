import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {MovieItemStyled, ImageContainer} from './styled';

const MovieItem = ({movie, history}) => {
    const {Title: title, Year: year, Poster: img} = movie;
    const handleClick = movieTitle => {
        history.push(`/movie/${movieTitle}`);
    };
    return (
        <MovieItemStyled onClick={() => handleClick(title)}>
            <ImageContainer src={img} />
            <h3>{title}</h3>
            <p>{year}</p>
        </MovieItemStyled>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.objectOf(PropTypes.any).isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withRouter(MovieItem);
