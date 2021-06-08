import React from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './assets/styles/styles.scss';
import AnnualReport from './pages/AnnualReport';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const TRACKING_ID = 'UA-198999887-1';
  ReactGA.initialize(TRACKING_ID);

  return (
    <ParallaxProvider>
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
    </ParallaxProvider>
  );
}

export default App;
