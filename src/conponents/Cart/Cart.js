import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let totalAmount = 0 ;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalAmount =parseFloat(totalAmount + course.amount);
    }
    parseFloat(totalAmount);
    
    return (
        <div className="cart">
            <h3>Your Enrolled {cart.length} Courses</h3>
            <ol>
                {
                    cart.map(course => <li className="text-white">{course.title} - {course.amount} Taka </li>)
                }
            </ol>
            <hr/>
            <h5>Total Amount : {totalAmount}</h5>
            <button className="btn btn-primary">Buy Now</button>
            
        </div>
    );
};

export default Cart;