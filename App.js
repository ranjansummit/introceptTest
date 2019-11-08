import React, {Component} from 'react';
import Router from './/app/Router';
import {Provider} from 'react-redux';
import configureStore from './app/store/configureStore';


class App extends Component {
 
  render() {
    return (

      <Provider store={configureStore()}>
      <Router />
    </Provider>

      
    );
  }
}

export default App;
