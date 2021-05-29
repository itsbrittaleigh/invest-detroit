import React from 'react';
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
