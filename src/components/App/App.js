import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyle from 'Theme';
import SearchBar from 'Components/SearchBar';
import MovieDetails from 'Components/MovieDetails';

const App = () => (
    <Router>
        <GlobalStyle />
        <Switch>
            <Route path="/movie/:title" component={MovieDetails} />
            <Route component={SearchBar} />
        </Switch>
    </Router>
);

export default App;
