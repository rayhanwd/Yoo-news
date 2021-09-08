import React, { Suspense } from 'react';
import "tailwindcss/tailwind.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Admin = React.lazy(() => import('./components/admin/Admin'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Finance = React.lazy(() => import('./pages/Finace'));
const Food = React.lazy(() => import('./pages/Food'));
const LifeStyle = React.lazy(() => import('./pages/LifeStyle'));
const Technology = React.lazy(() => import('./pages/Technology'));


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/finance">
          <Finance />
        </Route>
        <Route path="/food">
          <Food />
        </Route>
        <Route path="/lifestyle">
          <LifeStyle />
        </Route>
        <Route path="/technology">
          <Technology />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Suspense>
  )

}

export default App;
