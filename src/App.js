import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Index from './Containers'

import feedback from './Containers/feedback'

import submit from './Containers/submit'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './css/vendor.css'
import  './style.css'

function App() {
  return (
    <MuiThemeProvider>


<Router>
  <div>
    <Route exact path="/" component={Index} />
    <Route exact path="/feedback" component={feedback} />
    <Route exact path="/submit" component={submit} />

  </div>
</Router>
    </MuiThemeProvider>
  );
}

export default App;
