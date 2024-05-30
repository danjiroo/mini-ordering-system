import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Keys from './Keys';
import { buyCake } from '../../store/cake/cakeAction';
import { buyPizza } from '../../store/pizza/pizzaAction';
import { buyBurger } from '../../store/burger/burgerAction';
import { buyIceCream } from '../../store/iceCream/iceCreamAction';
import { Route, Switch } from 'react-router-dom';

const KeysContainer = ({cake, pizza, iceCream, burger}) => {
    const [ number, setNumber ] = useState('');
    const [ numNull, setNumNull ] = useState(false);
    const [ stock, setStock ] = useState(false);
    const [ over, setOver ] = useState(false);
    const [ select, setSelect ] = useState(false);
    const quantityInput = useRef();
    const dispatch = useDispatch();

    const noinputFunc = () => {
        setNumNull(true)
        setOver(false)
        setStock(false)
        setSelect(false)
        setTimeout(() => { setNumNull(false); }, 2000);
    }

    const zeroInputFunc = () => {
        setStock(false)
        setNumNull(false)
        setOver(false)
        setNumber('')
        quantityInput.current.value = ''
    }

    const outOfStockFunc = () => {
        setStock(true)
        setNumNull(false)
        setSelect(false)
        setTimeout(() => { setStock(false); }, 2000);
        setNumber('')
        quantityInput.current.value = ''
    }

    const exceedStockFunc = () => {
        setOver(true)
        setNumNull(false)
        setSelect(false)
        setTimeout(() => { setOver(false); }, 2000);
        setNumber('')
        quantityInput.current.value = ''
    }

    const handleSubmit = (whatItem, itemQuantity, e) => {
        e.preventDefault();
        if ( number == '' ) {
            noinputFunc()
        } else if ( number == 0 ) {
            zeroInputFunc()
            setSelect(false)
        } else if ( itemQuantity == 0 ) {
            outOfStockFunc()
        } else if ( number > itemQuantity ) {
            exceedStockFunc()
        } else {
            zeroInputFunc()
            dispatch(whatItem(number))
            setNumber('')
            quantityInput.current.value = ''
        }
    }

    const handleSelect = e => {
        e.preventDefault()
        zeroInputFunc()
        setSelect(true)
        setTimeout(() => { setSelect(false); }, 3000);
    }

    const getInputKey = num => {
        quantityInput.current.value += num
        setNumber(quantityInput.current.value)
    }

    const deleteInputKey = () => {
        quantityInput.current.value = quantityInput.current.value.substring(0, quantityInput.current.value.length - 1)
        setNumber(quantityInput.current.value)
    }

    const resetInputKey = () => {
        setNumber('')
        quantityInput.current.value = ''
    }

    const BuyButtonHome = () => <button onClick={(e) => handleSelect(e)} className="default_btn">Add to cart</button>
    const BuyButtonCake = () => <button onClick={(e) => handleSubmit(buyCake, cake.itemQuantity, e)}>Add {number} { number > 1 ? 'Cakes' : 'Cake' } to cart</button>
    const BuyButtonPizza = () => <button onClick={(e) => handleSubmit(buyPizza, pizza.itemQuantity, e)}>Add {number} { number > 1 ? 'Pizzas' : 'Pizza' } to cart</button>
    const BuyButtonBurger = () => <button onClick={(e) => handleSubmit(buyBurger, burger.itemQuantity, e)}>Add {number} { number > 1 ? 'Burgers' : 'Burger' } to cart</button>
    const BuyButtonIceCream = () => <button onClick={(e) => handleSubmit(buyIceCream, iceCream.itemQuantity, e)}>Add {number} { number > 1 ? 'Ice Creams' : 'Ice Cream' } to cart</button>

    return (
        <div className="keypad">
            <Keys getInputKey={getInputKey} deleteInputKey={deleteInputKey} resetInputKey={resetInputKey} />
            <form onSubmit={handleSubmit}>
                <input type="number" ref={quantityInput} onChange={ e => setNumber(e.target.value) || getInputKey } placeholder="Enter quantity..." />
                <Switch>
                    <Route exact path="/" component={BuyButtonHome} />
                    <Route path="/cake" component={BuyButtonCake} />
                    <Route path="/pizza" component={BuyButtonPizza} />
                    <Route path="/burger" component={BuyButtonBurger} />
                    <Route path="/icecream" component={BuyButtonIceCream} />
                </Switch>
                <p className="errorText" id="errortext">
                    { numNull ? <span>Please input something!</span> : null }
                    { stock ? <span>Out of stock!</span> : null }
                    { over ? <span>Stock not enough!</span> : null }
                    { select ? <span>Select an item from the menu!</span> : null }
                </p>
            </form>
        </div>
    )
}

export default KeysContainer;