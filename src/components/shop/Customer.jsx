import React, { useState } from 'react';
import CustomerItem from './CustomerItem';
import cart from '../../assets/images/cart.gif';
import PopupPurchase from '../popup/PopupPurchase';

const Customer = ({cake, pizza, iceCream, burger}) => {
    const [ cash, setCash ] = useState(1350);
    const [ popup, setPopup ] = useState(false);
    
    const itemsSold = cake.isSold || pizza.isSold || burger.isSold || iceCream.isSold;
    const addEarnings = cake.currentEarning + pizza.currentEarning + burger.currentEarning + iceCream.currentEarning;
    const getChange = cash - addEarnings;

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const addToCartFunc = () => {
        setPopup(true)
    }

    const pressClose = () => {
        setPopup(false)
    }

    return (
        <div className="customer">
            <p>Customer's Cash: { cash ? '₱ ' + cashComma(cash) : '' }</p>
            <input type="number" onChange={ e => setCash(e.target.value) } placeholder="Change customer's current cash." />
            <div className="customer_cart">
                <h2>Customer's Cart { itemsSold ? <span onClick={addToCartFunc} className="add_to_cart">Purchase</span> : null }</h2>
                { burger.isSold ? <CustomerItem itemName={'Burger'} item={burger} /> : null }
                { cake.isSold ? <CustomerItem itemName={'Cake'} item={cake} /> : null }
                { iceCream.isSold ? <CustomerItem itemName={'Ice Cream'} item={iceCream} /> : null }
                { pizza.isSold ? <CustomerItem itemName={'Pizza'} item={pizza} /> : null }
                { itemsSold ? (
                    <>
                        <p className="add_border">Cash: <span>₱ { cashComma(cash) }</span></p>
                        <p><strong> Total: </strong><strong><span>₱ { cashComma(addEarnings) }</span> </strong></p>
                        <p className="add_border"> Change: <span>₱ { cashComma(getChange) }</span> </p>
                    </>
                ) : (
                    <figure>
                        <img className="cartimg" src={cart} alt="cart" />
                    </figure>
                ) }
            </div>
            { popup ? (
                <PopupPurchase 
                    cake={cake}
                    burger={burger}
                    pizza={pizza}
                    iceCream={iceCream}
                    cash={cash} 
                    setCash={setCash} 
                    getChange={getChange} 
                    addEarnings={addEarnings} 
                    pressClose={pressClose}
                />
            ) : null }
        </div>
    )
}

export default Customer;