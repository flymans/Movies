import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GlobalStyle from 'Theme';
import SearchBar from 'Components/SearchBar';
import MovieDetails from 'Components/MovieDetails';

const App = () => (
    <Router>
        <GlobalStyle />
        <Route exact path="/" component={SearchBar} />
        <Route path="/movie/:title" component={MovieDetails} />
    </Router>
);

export default App;
