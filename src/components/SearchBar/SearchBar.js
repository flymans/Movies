import React from 'react';
import MovieList from 'Components/MovieList';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import {observable, action} from 'mobx';

@inject('movies')
@observer
class SearchBar extends React.Component {
    @observable text = '';

    @action handleChange = ({target: {value}}) => {
        this.text = value;
    };

    handleSubmit = async e => {
        const {movies} = this.props;
        e.preventDefault();
        await movies.getMovies(this.text);
    };

    render() {
        const {movies} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="searchBar"
                    value={this.text}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Поиск" />
                {movies.hasError ? (
                    movies.errorMessage
                ) : (
                    <MovieList movieList={movies.movieList} />
                )}
            </form>
        );
    }
}

SearchBar.propTypes = {
    movies: PropTypes.objectOf(PropTypes.any).isRequired
};

export default SearchBar;
