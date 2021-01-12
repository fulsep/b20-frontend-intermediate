import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import CinemaDetail from './pages/CinemaDetail';
import MovieDetail from './pages/MovieDetail';
import SelectSeat from './pages/SelectSeat';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/cinema/:id" component={CinemaDetail} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/select-seat/:id" component={SelectSeat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
