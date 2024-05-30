import React from 'react';
import { useDispatch } from 'react-redux';
import { editPriceCake } from '../../store/cake/cakeAction';
import { editPricePizza } from '../../store/pizza/pizzaAction';
import { editPriceBurger } from '../../store/burger/burgerAction';
import { editPriceIceCream } from '../../store/iceCream/iceCreamAction';

const PopupEditPrice = ({item, itemName, number, pressClose, priceError, editPriceSuccess, setEditPriceSuccess }) => {
    const dispatch = useDispatch();
    
    const getEditPriceButton = theitem => {
        switch(theitem) {
            case 'Cake': return editPriceCake
            case 'Pizza': return editPricePizza
            case 'Burger': return editPriceBurger
            case 'Ice Cream': return editPriceIceCream
            default: null
        }
    }

    const pressUpdate = (whatItem, num) => {
        dispatch(whatItem(num));
        setEditPriceSuccess(false)
        priceError(false)
    }

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="popup">
            <div className="popup_con">
                <div className="popup_close" onClick={() => pressClose()}>x</div>
                <div className="popup_body">
                    { priceError ? (
                        <>
                            <h3 style={{color: 'red'}}>Error!</h3>
                            <p>Input a number greater than 0!</p>
                        </>
                    ) : editPriceSuccess ? (
                        <>
                            <h3>Update Price</h3>
                            <p style={{display: 'block'}}>Update {itemName}'s price to <strong>₱ {cashComma(number)}</strong>?</p>
                            <p><em>Default Price: ₱ {item.initPrice}</em></p>
                            <br />
                            <p><em>Note: Previous {itemName} earnings will not be changed.</em></p>
                        </>
                    ) : (
                        <>
                            <h3>Success!</h3>
                            <p style={{display: 'block'}}>Updated price of {itemName}s to <strong>₱ {cashComma(item.itemPrice)}</strong></p>
                        </>
                    )}
                    <div className="popup_btns">
                        { priceError ? (
                            <button onClick={() => pressClose()}>Close</button>
                        ) : editPriceSuccess ? (
                            <>
                                <button onClick={() => pressUpdate(getEditPriceButton(itemName), number)}>Update</button>
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

export default PopupEditPrice;