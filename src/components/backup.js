// import React, { Component, useState } from 'react';
// import EndWrapper from './endwrapper';

// import Navbar from "./navbar"

// function Cart() {
//     const [cart, setCart] = useState([]);


//     const addToCart = (product) => {
//         console.log('we are in the cart');
//         setCart([...cart, product])
//     }
// }

// class App extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             items: [],
//             loading: true,
//             error: false
//         }
//     }

//     componentDidMount() {
//         fetch('http://127.0.0.1:5000/product/get')
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 items: data,
//                 loading: true
//             })
//         })
//         .catch(error => {
//             console.log("An unexpected error occurred", error)
//             this.setState({
//                 error: true,
//                 loading: false
//             })
//         })
//     }

//     renderItems() {
//         const cerave = this.state.items.map(item => (
//             <div className="all-products" key={item.id}>
//                 {/* <div className="product-setup"> */}
//                     {/* {item.title}
//                     <img src={item.product_image} />
//                     {item.description}
//                     {item.price} */}
//                 {/* </div> */}
//                 <div className="title">{item.title}</div>
//                 <div className="image"><img src={item.product_image} /></div>
//                 <div className="description">{item.description}</div>
//                 <div className="price">{item.price}</div>
//                 <button className="cart-btn" onClick={() => addToCart(product)}>
//                     Add to Cart
//                 </button>
//             </div>
//         ))
//         return cerave
//     }

//   render() {
//     return (
//       <div className='products-page'>
//         <Navbar />
//         <div className='rendered-items'>
//             {this.renderItems()}
//         </div>
//         <EndWrapper />
//       </div>
//     );
//   }
// }

// export default Cart;