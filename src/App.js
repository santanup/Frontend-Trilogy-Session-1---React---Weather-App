import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/weather/:city" component={Weather}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
