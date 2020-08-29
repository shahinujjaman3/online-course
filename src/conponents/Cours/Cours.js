import React from 'react';
import './cours.css'
const Cours = (props) => {
    return (
        <div className="col-6">
            <div className="cours-box">
                <div className="cours-img">
                    <h6>Subject Images</h6>
                </div>
                <h5>Course Title : {props.title}</h5>
                <p>Amount : {props.amount}</p>
                <button className="btn btn-primary" onClick={() => props.cartHanderlar(props)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Cours;