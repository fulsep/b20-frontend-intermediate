import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'

import PrivateRoute from './components/PrivateRoute'
import store from './redux/store'

import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import CinemaDetail from './pages/CinemaDetail';
import MovieDetail from './pages/MovieDetail';
import SelectSeat from './pages/SelectSeat';
import Admin from './pages/Admin';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/cinema/:id" component={CinemaDetail} />
            {/*<Route path="/movie/:id" component={MovieDetail} />*/}
            <PrivateRoute path='/movie/:id' privateComponent={MovieDetail} />
            <Route path="/select-seat/:id" component={SelectSeat} />
            <PrivateRoute path="/admin" privateComponent={Admin} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
