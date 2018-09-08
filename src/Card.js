import React, {Component} from 'react';
import './App.css';

const Card = ({title, value}) => (
    <div className="col-sm card">
        <h5>{title}</h5>
        <h3>{value}</h3>
    </div>
);


Card.defaultProps = {
    title: "no title",
    value: "no value"
};


export default Card;
