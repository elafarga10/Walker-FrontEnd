import React from 'react';
import { NavigationBar } from './components/Navigation';
import { Jumbotron } from './components/Jumbotron';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <>
        <NavigationBar />
        <Jumbotron />
      </>
    )
  }
}

export default App;
