import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import OrderList from './components/OrderList/OrderList';

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
        {name: 'Hamburger', count: 0},
        {name: 'Cheeseburger', count: 0},
        {name: 'Fries', count: 0},
        {name: 'Coffee', count: 0},
        {name: 'Tea', count: 0},
        {name: 'Cola', count: 0},
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
      let total = this.state.totalPrice;
      total+= price;
      const copyState = [...this.state.items];
      for (let i=0; i < copyState.length; i++){
        if(copyState[i].name === name){
          copyState[i].count++
        }
      }

      this.setState({
          totalPrice: total,
          items: copyState
      })
    };
    removeItem=(name)=> {
        let price = 0;
        for (let i = 0; i < ITEMS.length; i++) {
            if (ITEMS[i].name === name) {
                price = ITEMS[i].price
            }
        }
        let total = this.state.totalPrice;
        total -= price;
        const copyState = [...this.state.items];
        for (let i = 0; i < copyState.length; i++) {
            if (copyState[i].name === name) {
                copyState[i].count--
            }
        }

        this.setState({
            totalPrice: total,
            items: copyState
        })
    };
    oneItem = (name) =>{
        const item = [];
        for (let i=0; i < ITEMS.length; i++){
            if (ITEMS[i].name === name) {
                item.push(ITEMS[i].price)
            }
        }
    }
    render() {
        return (
            <div className="App">
                <div className='addItems'>
                    <h3>Add items</h3>
                    {this.createItems()}
                </div>
                <div className='orderDetails'>
                    <h3>Order Details:</h3>
                    <OrderList add={this.state.items} chan={ITEMS} cli={(name)=>{this.removeItem(name)}}/>
                    <p>Total price: {this.state.totalPrice} KGS</p>
                </div>
            </div>
        );
    }
}
export default App;
