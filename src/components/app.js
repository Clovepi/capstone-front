import React, { Component } from 'react';

import Home from './homepage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from "./about";
import Products from "./products";
import Cart from "./cart";

export default class App extends Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     // items: [],
  //     cartItems: []
  //   }

  // //   this.addToCart = this.addToCart.bind(this);
  // }

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach(item =>{
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   })
  //   if (!alreadyInCart) {
  //     cartItems.push({...product, count: 1})
  //   }

  //     this.setState({cartItems})
  //   // this.setState({
  //   //   cart: [product].concat(this.state.cart)
  //   // })
  // }

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/homepage" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/products" render={props => (
              <Products addToCart={this.addToCart}/>
            )} />
            <Route path="/cart" render={props => (
              <Cart cart={this.state.cart}/>
            )} /> */}
          </Switch>
        </Router>
        {/* <div className='product-app'>
          <Products products={this.state.products} addToCart={this.addToCart}/>
        </div> */}
      </div>
    );
  }
}
