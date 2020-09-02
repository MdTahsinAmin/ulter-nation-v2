import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Information from './component/Information/Information';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import Help from './component/Help/Help';
import ExactCountry from './ExactCountry/ExactCountry';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>

          <Route path='/countries'>
          <Information/>
          </Route>

          <Route path='/country/:countryName'>
           <ExactCountry></ExactCountry>

          </Route>

          <Route exact path='/'> 
           <Information/>
          </Route>

          <Route path='/help'>
          <Help/>
          </Route>

          <Route path='*'>
            <NotFound/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
