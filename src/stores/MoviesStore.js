import {observable, action, runInAction} from 'mobx';

import {getMovieList, getSingleMovie} from 'Services/api';

class MoviesStore {
    @observable movieList = [];

    @observable hasError = false;

    @observable errorMessage = null;

    @observable isFetching = true;

    @observable movieDetails = null;

    @action.bound
    async getMovies(title) {
        const {data} = await getMovieList(title);

        runInAction(() => {
            if (data.Response === 'True') {
                const {Search: movies} = data;
                this.text = '';
                this.hasError = false;
                this.movieList = movies;
            } else {
                this.text = '';
                this.hasError = true;
                this.errorMessage = data.Error;
            }
        });
    }

    @action.bound
    async getMovieDetails(title) {
        const data = await getSingleMovie(title);
        runInAction(() => {
            this.movieDetails = data;
            this.isFetching = false;
        });
    }
}

export default new MoviesStore();
