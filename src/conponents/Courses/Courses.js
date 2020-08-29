import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './courses.css'
import Cours from '../Cours/Cours';
import Cart from '../Cart/Cart';
const Courses = () => {
    const [cart, setCart] = useState([]);

    function cartHanderlar(C){
        const newCart = [...cart, C];
        setCart(newCart);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 bg-secondary text-white">
                    <h4>All Courses</h4>
                    <div className="row">
                        <Cours title='HTML' amount={1200} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='CSS' amount={1400} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Bootstrap' amount={1700} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Javascript' amount={3000} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='JQuery' amount={1500} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='React Js' amount={2500} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Angular Js' amount={2800} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Veu Js' amount={2400} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Node Js' amount={3200} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Mongobd' amount={3500} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Javascript Array' amount={1300} cartHanderlar={cartHanderlar}></Cours>
                        <Cours title='Animation with Css3' amount={1400} cartHanderlar={cartHanderlar}></Cours>
                    </div>
                </div>
                <div className="col-4 bg-dark text-white positionFixed">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;