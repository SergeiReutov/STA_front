import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Example from 'components/Example';
import './App.scss';

function App() {
  return (
    <div data-testid="mainApp" className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Example />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
