import React from 'react';
import "tailwindcss/tailwind.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Admin from './components/admin/Admin';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
