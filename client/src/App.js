import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        name: ''
      }
  }

  render(){
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
  }
}

export default App;
