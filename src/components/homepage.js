import React, { Component } from 'react';

import Navbar from "./navbar";
import EndWrapper from './endwrapper';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default class Products extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fetch('https://saccharinecapstone.herokuapp.com/product/get', {method: "GET"})
            .then(response => response.json())
            .then(data =>
                console.log(data),
            )
    }

    render() {
        return(
            <div className="homepage">
                <Navbar />

                <div className="see-products">
                    <h1>Check Out Our Products!</h1>
                </div>

                <div className="see-customers">
                    <h1>See What Our Customers Have to Say</h1>

                    <div className="reviews">
                        <div className='user-icons'><FontAwesomeIcon icon={faCircleUser} /></div>
                        <h2>Catherine W. Says:</h2>
                        <p>Saccharine has truly changed my life. I've never looked younger! My granddaughter even said I was "woke"!</p>
                    </div>

                    <div className="reviews">
                        <div className='user-icons'><FontAwesomeIcon icon={faCircleUser} /></div>
                        <h2>Lila M. Says:</h2>
                        <p>10/10. For the first time in years, somebody ID'ed me at the grocery store.</p>
                    </div>

                    <div className="reviews">
                        <div className='user-icons'><FontAwesomeIcon icon={faCircleUser} /></div>
                        <h2>Jessie S. Says:</h2>
                        <p>I was skeptical at first, but I'm glad I gave it a shot. My skin is healthier than ever!</p>
                    </div>
                </div>

                <EndWrapper />

            </div>
        )
    }
}