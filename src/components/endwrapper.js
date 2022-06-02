import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDroplet, faHeart, faSeedling, faMortarPestle } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok, faTwitter, faPinterest, } from "@fortawesome/free-brands-svg-icons";

export default class EndWrapper extends Component {
    render() {
        return(
            <div className="end-wrapper">
                <div className="care-message">
                    <h1>We Care</h1>
                    <p>We think it shouldn't be hard to have beautiful, healthy skin. Using tried-and-true ingredients from Korea, we've made quality products to ensure that everyone can
                    enhance their natural beauty and have the skin they deserve.</p>

                        <div className="care-icons">
                            <FontAwesomeIcon icon={faHandHoldingDroplet} />
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faSeedling} />
                            <FontAwesomeIcon icon={faMortarPestle} />
                        </div>

                        <div className="care-labels">
                            <div className="icon-labels">Environmentally-Friendly</div>
                            <div className="icon-labels">Authenticity</div>
                            <div className="icon-labels">Sustainability</div>
                            <div className="icon-labels">Responsibly-Sourced Ingredients</div>
                        </div>
                </div>

                <div className="right-side">
                    <div className="emails">

                        <h1>Join Our Email!</h1>
                        <h2>Stay in the loop about new products, special offers, skin care tips, and more!</h2>

                        <form action="/action_page.php">
                            <input type="email" id="email" name="email" />
                            <input type="Submit" />
                        </form>

                    </div>

                    <div className="socials">
                        <h1>Follow Us</h1>
                        <div className="social-icons">
                            <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.pinterest.com/"><FontAwesomeIcon icon={faPinterest} /></a>
                            <a href="https://www.tiktok.com/"><FontAwesomeIcon icon={faTiktok} /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}