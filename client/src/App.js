import React, { Component } from 'react';
import AppNavbar from './component/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './component/ShoppingList';
import { Provider } from  'react-redux';
import store from './store';
import { loadUser } from './actions/authActions'
import {Container} from 'reactstrap';

import ItemModal from './component/itemModal';


class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render () {
    return (
    <Provider store ={store}>
      <div className="App">
      <AppNavbar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
      </div>
    </Provider>
  )}
  ;
}

export default App;
