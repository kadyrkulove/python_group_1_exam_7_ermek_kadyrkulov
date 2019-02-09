import React, { Component } from 'react';
import './App.css';

const ITEMS = [
    {name: 'Hamburger', price:80},
    {name: 'Cheeseburger', price:90},
    {name: 'Fries', price:45},
    {name: 'Coffee', price:70},
    {name: 'Tea', price:50},
    {name: 'Cola', price:40},

]

class App extends Component {
  state = {
    items: [
        {name: 'Hamburger', count: 0}
        {name: 'Cheeseburger', count: 0}
        {name: 'Fries', count: 0}
        {name: 'Coffee', count: 0}
        {name: 'Tea', count: 0}
        {name: 'Cola', count: 0}
    ],
      totalPrice: 0
  };
    createItems = () =>{
      let array = [];
      for (let i = 0; i < ITEMS.length; i++){
        array.push(<Menu key={i} name={ITEMS[i].name} price={ITEMS[i].price} onClick={(name) =>{this.sendItems(name)}}/>)
      }
      return array;
    };
    sendItems=(name)=>{
      let price = 0;
      for (let i=0; i < ITEMS.length; i++){
        if (ITEMS[i].name === name) {
          price = ITEMS[i].price
        }
      }

    }
}
export default App;
