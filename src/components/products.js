import React, { Component, useState } from 'react';
import Modal from 'react-modal';

import EndWrapper from './endwrapper';
import Navbar from "./navbar"

// function Cart() {
//     const [cart, setCart] = useState([]);
// }

// const addToCart = (product) => {
//     console.log('we are in the cart');
//     setCart([...cart, product])
// }

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            // cart: [],
            // cartItems: [],
            loading: true,
            error: false,
            product: null,
        }
    }
    
      addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item =>{
          if (item._id === product._id) {
            item.count++;
            alreadyInCart = true;
          }
        })
        if (!alreadyInCart) {
          cartItems.push({...product, count: 1})
        }
    
          this.setState({cartItems})
        // this.setState({
        //   cart: [product].concat(this.state.cart)
        // })
      }

    componentDidMount() {
        fetch('https://saccharinecapstone.herokuapp.com/product/get')
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data,
                loading: true
            })
        })
        .catch(error => {
            console.log("An unexpected error occurred", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    openModal = (product) => {
        this.setState({ product });
    };

    closeModal = () => {
        this.setState({ product:null });
    };

    renderItems() {
        const cerave = this.state.items.map(item => (
            <div className="all-products" key={item.id}>
                <div className="title">{item.title}</div>
                <div className="image"><img src={item.product_image} /></div>
                <div className="description">{item.description}</div>
                <div className="price">${item.price}</div>
                <button onClick={() => this.openModal(product)} 
                    className="cart-btn">
                        Add to Cart
                </button>
            </div>
        ))
        return cerave
    }

  render() {
      const { product } = this.state;
    return (
      <div className='products-page'>

        <Navbar />
        <div className='rendered-items'>
            {this.renderItems()}
        </div>
        <EndWrapper />

        {/* <div className='product-app'>
          products={this.state.products} addToCart={this.addToCart}
        </div> */}
        
        {
            product && (
            <Modal isOpen={true} onRequestClose={this.closeModal}>
                <button className="close-modal" onClick={this.closeModal}>X</button>
                <div>
                    Modal
                </div>
            </Modal>
        )}

      </div>
    );
  }
}