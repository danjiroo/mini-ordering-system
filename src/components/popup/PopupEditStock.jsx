import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCake } from '../../store/cake/cakeAction';
import { editPizza } from '../../store/pizza/pizzaAction';
import { editBurger } from '../../store/burger/burgerAction';
import { editIceCream } from '../../store/iceCream/iceCreamAction';

const PopupEditStock = ({itemName, number, pressClose, setError, editError, errorZero, setEditError, setErrorZero, editSuccess, setEditSuccess }) => {
    const [ isActive, setIsActive ] = useState(true);
    const dispatch = useDispatch();
    
    const getEditStockButton = theitem => {
        switch(theitem) {
            case 'Cake': return editCake
            case 'Pizza': return editPizza
            case 'Burger': return editBurger
            case 'Ice Cream': return editIceCream
            default: null
        }
    }

    const pressUpdate = (whatItem, num) => {
        dispatch(whatItem(num));
        setIsActive(false)
        setError(false)
        setErrorZero(false)
        setEditError(false)
        setEditSuccess(false)
    }

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="popup">
            <div className="popup_con">
                <div className="popup_close" onClick={() => pressClose()}>x</div>
                <div className="popup_body">
                    { errorZero ? (
                        <>
                            <h3 style={{color: 'red'}}>Error!</h3>
                            <p>Input a number greater than 0!</p>
                        </>
                    ) : editError ? (
                        <>
                            <h3 style={{color: 'red'}}>Error!</h3>
                            <p>Input a number greater than the current sold items!</p>
                        </>
                    ) : editSuccess ? (
                        <>
                            <h3>Update Quantity</h3>
                            <p>Update total quantity of {number > 1 ? itemName + 's' : itemName} to {cashComma(number)}?</p>
                        </>
                    ) : (
                        <>
                            <h3>Success!</h3>
                            <p>Total quantity of {number > 1 ? itemName + 's' : itemName} is now: <strong>{ cashComma(number) }</strong></p>
                        </>
                    ) }
                    <div className="popup_btns">
                        { errorZero ? (
                            <button onClick={() => pressClose()}>Close</button>
                        ) : editError ? (
                            <button onClick={() => pressClose()}>Close</button>
                        ) : isActive ? (
                            <>
                                <button onClick={() => pressUpdate(getEditStockButton(itemName), number)}>Update</button>
                                <button onClick={() => pressClose()}>Cancel</button>
                            </>
                        ) : <button onClick={() => pressClose()}>Close</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupEditStock;