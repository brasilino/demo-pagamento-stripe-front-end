import React, { Component } from 'react';
//import logo from './logo.svg';


import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Checkout from './components/Checkout'



// function App() {
//   return (
      
//   );
// }

class App extends Component {

  render() {

    console.log('app teste', this.props)

    const totalItems = this.props.items;

    return (
       <BrowserRouter>
            <div className="App">
              <Navbar value={totalItems} />
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/cart" component={Cart}/>
                  <Route path="/checkout" component={Checkout}/>
                </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
