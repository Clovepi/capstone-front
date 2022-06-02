import React, { Component } from 'react';

import Navbar from "./navbar"
import EndWrapper from './endwrapper';

export default class App extends Component {
  render() {
    return (
      <div className='about-us'>
          <Navbar />

            <h3>About Saccharine Skincare</h3>

            <div className="about-sac">
                Saccharine was started in 2022 by a young group of friends who admired Korean culture and beauty standards. 
                After a <strong>lot</strong> of testing and a lot of tears, they managed to come up with a simple line of
                products that effectively turn back time (without any of those weird, paradox-y consequences). Lorem ipsum dolor 
                sit amet, consectetur adipiscing elit. Aenean vitae enim hendrerit, mollis felis vitae, dictum magna. In eu est 
                eget dolor malesuada porta in a lacus. Curabitur consequat risus a ornare congue. Nullam aliquet enim a vulputate 
                ornare. Quisque tincidunt accumsan consectetur. Nam ut nisl nibh. Etiam dictum, sem nec euismod luctus, mi risus 
                maximus felis, eu bibendum mauris massa in ipsum. Donec ex mauris, luctus sit amet facilisis convallis, luctus at 
                nulla. Quisque eget maximus magna.
            </div>

            <h4>Our Mission</h4>

            <div className="mission">
                So many people are uneducated about how to properly care for their skin. And with the sun only getting hotter, 
                it's more important than ever to be protected. In fact, UV rays are the leading factors in what causes skin cells 
                to age. Donec condimentum dignissim congue. In at erat at quam consectetur consectetur. Curabitur nec metus enim. 
                Nullam hendrerit imperdiet rhoncus. Suspendisse sed pulvinar libero. Nullam congue, elit vitae efficitur varius, 
                nisl felis egestas nisi, sit amet euismod justo odio non diam. Donec enim ipsum, pellentesque at fringilla quis, 
                faucibus a lorem. Integer condimentum cursus lectus, eu mollis est blandit eget. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Donec cursus a felis quis varius. 
            </div>

            <EndWrapper />
      </div>
    );
  }
}