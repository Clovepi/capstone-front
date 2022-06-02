import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Cart from './backup';

function App() {
    return(
        <div className="navbar-container">
            <div className="shipping">
                <h1>free shipping on orders $50+</h1>
            </div>

            <div className="brand-name">
                <h1>Saccharine Skincare</h1>
                <div className="subheading">
                    <h2>Korean-based Skincare for All Skin Types</h2>
                </div>

                <div className="shopping-cart">
                    <a href="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        {/* <div className='cart-length'>({Cart.length})</div> */}
                    </a>
                </div>
            </div>

            <div className="links">
                <div><a href="/homepage">Home</a></div>
                <div><a href="/products">All Products</a></div>
                <div><a href="/about">About Us</a></div>
            </div>
        </div>
    )
}

export default App;