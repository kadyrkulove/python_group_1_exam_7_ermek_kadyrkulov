import React from 'react';
import './Menu.css';

const Menu = (props) =>{
    return(
        <div className='Item-list'>
            <button onClick={() => props.onClick(props.name)}>✓</button>
            <h6>{props.name}</h6>
            <p>Price: {props.price} сом</p>
        </div>
    )
};

export default Menu