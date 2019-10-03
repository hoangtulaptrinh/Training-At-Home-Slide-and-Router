import React from 'react';
import './App.css';
import Example from './components/slide'
import Slideshow from './components/reactSlideShowImage'
import TopMenu from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <Router >
    <div className="App">
      
      <TopMenu />
        <Switch>
          <Route path="/Example">
            <Example />
          </Route>
          <Route path="/Slideshow">
            <Slideshow />
          </Route>
        </Switch>

    </div>
    </Router>
  );
}

export default App;