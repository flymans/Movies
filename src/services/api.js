import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import url from 'url';

const OMDbUrl = url.format({
    protocol: 'https',
    hostname: 'omdbapi.com'
});

const apiKey = '86c8d625';

const instance = axios.create({baseURL: OMDbUrl});

export const getMovieList = searchQuery =>
    instance.get(`?apikey=${apiKey}&s=${searchQuery}`);

export const getSingleMovie = movieTitle =>
    instance.get(`?apikey=${apiKey}&t=${movieTitle}`);
