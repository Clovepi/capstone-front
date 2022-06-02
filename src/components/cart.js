import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import EndWrapper from "./endwrapper";

export default class Cart extends Component {
    // constructor(props){
    //     super(props)

    // }
    
    // mapCartItems() {
    //     return this.props.cart.map(cartItem => {
    //         return (
    //             <div className="cart-item-wrapper" key={cartItem.key}>
    //                 <div className="title-price-wrapper">
    //                     <span>{cartItem.title}</span>
    //                     <br></br>
    //                     <span>${cartItem.price} x {cartItem.quantity}</span>
    //                 </div>

    //                 <button onClick={() => {
    //                     this.props.removeItem(cartItem)
    //                     this.getTotal()
    //                 }}>Remove</button>
    //             </div>
    //         )
    //     })
    // }

    render() {
        // const {cartItems} = this.props;
      return (
        <div className='cart'>

            <div className="shipping">
                <h1>free shipping on orders $50+</h1>
            </div>
    
            <div className="brand-name">
                <h1>Saccharine Skincare</h1>
                <div className="subheading">
                    <h2>Korean-based Skincare for All Skin Types</h2>
                </div>
            </div>
    
            <div className="links">
                <div><a href="/homepage">Back to Home</a></div>
                <div><a href="/products">See All Our Products Again</a></div>
            </div>

            <div className="cart-title">
                Your Shopping Cart
            </div>

            <div className="order">
                What would you like to order?
            </div>

            <div className="checkout-form">
                <form action="/action_page.php">
                    <label>Healing Ointment, $10<input type="checkbox"></input></label>
                    <label>Hydrating SPF 30, $20<input type="checkbox"></input></label>
                    <label>Foaming Facial Cleanser, $15<input type="checkbox"></input></label>
                    <label>Hydrating Facial Cleanser, $15<input type="checkbox"></input></label>
                    <label>Renewing SA Cleanser, $15<input type="checkbox"></input></label>
                    <label>Acne Control Cleanser, $15<input type="checkbox"></input></label>
                    <label>Vitamin C Serum, $17<input type="checkbox"></input></label>
                    <label>Retinol Serum, $20<input type="checkbox"></input></label>
                    <label>Micellar Water, $10<input type="checkbox"></input></label>
                </form>
            </div>

            {/* <div className="checkout-form">
                <form action="/action_page.php">
                    <label for="fname">First name:</label><br>
                    <input type="text" id="fname" name="fname" value="John"><br>
                    <label for="lname">Last name:</label><br>
                    <input type="text" id="lname" name="lname" value="Doe"><br><br>
                    <input type="submit" value="Submit">
                </form> 
            </div> */}

            {/* <div>
                {cartItems === 0 ? (<div className="cart-msg">Your shopping cart is currently empty.</div>
                    ) : (
                        <div className="cart-msg">
                            You have{cartItems} in the cart{" "}
                        </div>
                    )
                }
            </div> */}

            {/* <Cart cartItems={this.state.cartItems} /> */}

            {/* {this.mapCartItems()} */}

            <EndWrapper />
        </div>
      );
    }
  }