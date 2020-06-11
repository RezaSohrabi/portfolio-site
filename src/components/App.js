import React from 'react';
import './App.scss';
import Container from './Container'

function App(props) {
  return (
    <div className="App">
        <Container {...props.data}/>
    </div>
  );
}

export default App;
