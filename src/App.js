import React from 'react';
import logo from './logo.svg';
import './App.css';

function Heading() {
  const str = 'Foo Bar!'

  return <h1>{str}</h1>
}

function App() {
  return (
    <Heading></Heading>
  );
}

export default App;
