import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartBurger } from '../../store/burger/burgerAction';
import { addToCartPizza } from '../../store/pizza/pizzaAction';
import { addToCartCake } from '../../store/cake/cakeAction';
import { addToCartIceCream } from '../../store/iceCream/iceCreamAction';
import PopupItem from './PopupItem';

const PopupPurchase = ({setCash, getChange, cash, addEarnings, pressClose, burger, iceCream, cake, pizza}) => {
    const [ viewSummary, setViewSummary ] = useState(true);
    const [ active, setActive ] = useState(false);
    const dispatch = useDispatch();

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const pressPurchase = () => {
        if(getChange < 0) { setActive(true); console.log('kuwang oi'); return }
        if ( burger.isSold ) { dispatch(addToCartBurger(burger.itemQuantity)); }
        if ( iceCream.isSold ) { dispatch(addToCartIceCream(iceCream.itemQuantity)); }
        if ( cake.isSold ) { dispatch(addToCartCake(cake.itemQuantity)) }
        if ( pizza.isSold ) { dispatch(addToCartPizza(pizza.itemQuantity)) }
        setCash(getChange);
        setViewSummary(false);
    }

    return (
        <div className="popup">
            <div className="popup_con">
                <div className="popup_close" onClick={() => pressClose()}>x</div>
                <div className="popup_body">
                    { viewSummary ? (
                        <>
                            <h3>Current items:</h3>
                            { burger.isSold ? <PopupItem itemName={'Burger'} item={burger} /> : null }
                            { cake.isSold ? <PopupItem itemName={'Cake'} item={cake} /> : null }
                            { iceCream.isSold ? <PopupItem itemName={'Ice Cream'} item={iceCream} /> : null }
                            { pizza.isSold ? <PopupItem itemName={'Pizza'} item={pizza} /> : null }
                            <p className="cash">Cash: <span>₱ {cashComma(cash)}</span></p>
                            <p className="total">Total: <span>₱ {cashComma(addEarnings)}</span></p>
                            <p className="change">Change: <span className={ active ? 'active' : null }>₱ {cashComma(getChange)}</span></p>
                            <br/><br/>
                            <p><em>Purchase selected items? Cancel or close to continue shopping.</em></p>
                        </>
                    ) : (
                        <>
                            <h3>Successfully purchased</h3>
                            <p>Thank you for shopping!</p>
                        </>
                    )}
                    <div className="popup_btns">
                        { viewSummary ? (
                            <>
                                <button onClick={pressPurchase}>Yes</button>
                                <button onClick={() => pressClose()}>Cancel</button>
                            </>
                        ) : (
                            <button onClick={() => pressClose()}>Close</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupPurchase;