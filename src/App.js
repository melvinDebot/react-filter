import React from 'react';
import './App.scss'
import Carte from './Components/Carte';
import List from './Components/List';
import Filter from './Components/Filter';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Router>
            <div className="button">
              <div className="button-item btn_cart">
                <Link to='./'>
                  <p>Carte</p>
                </Link>
              </div>

              <div className="button-item btn_list">
                <Link to='./list'>
                  <p>Liste</p>
                </Link>
              </div>
            </div>

            <div className="filter_container">
              <Link to='./filter'>
                <div className="filter_innerbox"></div>
              </Link>
            </div>

          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/filter">
              <Filter />
            </Route>
            <Route path="/">
              <Carte />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;