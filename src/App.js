import React from 'react';
//import logo from './logo.svg';
import './App.css';
import About from './About'
import { HashRouter as Router, Route } from 'react-router-dom'

import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer'

function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Footer />
    </div>

    </Router>
  );
}

export default App;
