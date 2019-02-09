import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    let num = [];
    for (let i = 0; i < props.chan.length; i++){
        if (props.chan[i].name === props.add[i].name){
            num += props.chan[i].price
        }
    }
    console.log(num);

    return(

        props.add.map((item, id) => {
            return(
                item.count === 0 ?
                    null:
                    <div key={id}>
                        <div>{item.name} X{item.count} <button onClick={() => props.cli(item.name)}>✖</button></div>
                    </div>
                    )
        })
    )
};

export default OrderList;