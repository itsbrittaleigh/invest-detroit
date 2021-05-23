import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './assets/styles/styles.scss';
import AnnualReport from './pages/AnnualReport';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/2020-annual-report">
          <AnnualReport />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
