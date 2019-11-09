import React from 'react';
import {getMovieList} from 'Services';
import MovieList from 'Components/MovieList';

class SearchBar extends React.Component {
    state = {
        text: '',
        movieList: [],
        hasError: false,
        errorMessage: ''
    };

    handleChange = ({target: {value}}) => {
        this.setState({text: value});
    };

    getMovies = async e => {
        e.preventDefault();
        const {text} = this.state;
        const {data} = await getMovieList(text);
        if (data.Response === 'True') {
            const {Search: movies} = data;
            this.setState({text: '', hasError: false, movieList: movies});
        } else
            this.setState({text: '', hasError: true, errorMessage: data.Error});
    };

    render() {
        const {text, movieList, errorMessage, hasError} = this.state;
        return (
            <form onSubmit={this.getMovies}>
                <input
                    type="text"
                    name="searchBar"
                    value={text}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Поиск" />
                {hasError ? errorMessage : <MovieList movieList={movieList} />}
            </form>
        );
    }
}

export default SearchBar;
