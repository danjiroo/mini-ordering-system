import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetCake } from '../../store/cake/cakeAction';
import { resetPizza } from '../../store/pizza/pizzaAction';
import { resetBurger } from '../../store/burger/burgerAction';
import { resetIceCream } from '../../store/iceCream/iceCreamAction';

const PopupResetStock = ({item, itemName, pressClose}) => {
    const [ isActive, setIsActive ] = useState(true);
    const [ code, setCode ] = useState('');
    const [ invalidCode, setInvalidCode ] = useState(false);
    const dispatch = useDispatch();
    
    const getResetButton = theitem => {
        switch(theitem) {
            case 'Cake': return resetCake
            case 'Pizza': return resetPizza
            case 'Burger': return resetBurger
            case 'Ice Cream': return resetIceCream
            default: null
        }
    }

    const pressReset = (whatItem) => {
        if( code == null || code == '' ) { setInvalidCode(true); return; }
        if( code != itemName.toUpperCase() ) { setInvalidCode(true); return; }
        dispatch(whatItem);
        setIsActive(false)
        setInvalidCode(false)
    }

    return (
        <div className="popup">
            <div className="popup_con">
                <div className="popup_close" onClick={() => pressClose()}>x</div>
                <div className="popup_body">
                    { invalidCode ? (
                        <>
                            <h3 style={{color: 'red'}}>Error!</h3>
                            <p style={{ display: 'block' }}>Invalid code! Please input <strong>{ itemName.toUpperCase() }</strong>.</p>
                        </>
                    ) : isActive ? (
                        <>
                            <h3 style={{color: 'red'}}>Reset</h3>
                            <p>Reset all { itemName }s to its default stock ({item.default})?</p>
                            <p><em>Note: All { itemName } earnings will also be reset.</em></p>
                            <br/>
                            <p style={{ display: 'block' }}>Input <strong>{ itemName.toUpperCase() }</strong> in the box below to proceed.</p>
                            <input type="text" onChange={e => setCode(e.target.value)} value={code} />
                        </>
                    ) : (
                        <>
                            <h3>Success!</h3>
                            <p>All {itemName}s are now back to its default stock ({item.default}).</p>
                        </>
                    ) }
                    <div className="popup_btns">
                        { invalidCode ? (
                            <button onClick={() => pressClose()}>Close</button>
                        ): isActive ? (
                            <>
                                <button onClick={() => pressReset(getResetButton(itemName))}>Reset</button>
                                <button onClick={() => pressClose()}>Cancel</button>
                            </>
                        ) : <button onClick={() => pressClose()}>Close</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupResetStock;