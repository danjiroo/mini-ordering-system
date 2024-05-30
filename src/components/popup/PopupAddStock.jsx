import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStockCake } from '../../store/cake/cakeAction';
import { addStockPizza } from '../../store/pizza/pizzaAction';
import { addStockBurger } from '../../store/burger/burgerAction';
import { addStockIceCream } from '../../store/iceCream/iceCreamAction';

const PopupAddStock = ({itemName, number, pressClose, setError, addError, setAddError }) => {
    const [ isActive, setIsActive ] = useState(true);
    const [ addSuccess, setAddSuccess ] = useState(false);
    const dispatch = useDispatch();
    
    const getAddStockButton = theitem => {
        switch(theitem) {
            case 'Cake': return addStockCake
            case 'Pizza': return addStockPizza
            case 'Burger': return addStockBurger
            case 'Ice Cream': return addStockIceCream
            default: null
        }
    }

    const pressAdd = (whatItem, num) => {
        dispatch(whatItem(num));
        setIsActive(false)
        setAddSuccess(true)
        setAddError(false)
        setError(false)
    }

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="popup">
            <div className="popup_con">
                <div className="popup_close" onClick={() => pressClose()}>x</div>
                <div className="popup_body">
                    { addError ? (
                        <>
                            <h3 style={{color: 'red'}}>Error!</h3>
                            <p>Input a number greater than 0!</p>
                        </>
                    ) : isActive ? (
                        <>
                            <h3>Our Stock</h3>
                            <p>Add {cashComma(number) || '' } { number > 1 ? itemName + 's' : itemName } to stock?</p>
                        </>
                    ) : addSuccess ? (
                        <>
                            <h3>Success!</h3>
                            <p>Added {cashComma(number)} { number > 1 ? itemName + 's' : itemName }!</p>
                        </>
                    ) : null }
                    <div className="popup_btns">
                        { addError ? (
                            <button onClick={() => pressClose()}>Close</button>
                        ) : isActive ? (
                            <>
                                <button onClick={() => pressAdd(getAddStockButton(itemName), number)}>Add</button>
                                <button onClick={() => pressClose()}>Cancel</button>
                            </>
                        ) : <button onClick={() => pressClose()}>Close</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupAddStock;