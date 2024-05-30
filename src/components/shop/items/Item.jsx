import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PopupAddStock from '../../popup/PopupAddStock';
import PopupEditStock from '../../popup/PopupEditStock';
import PopupResetStock from '../../popup/PopupResetStock';
import PopupEditPrice from '../../popup/PopupEditPrice';
import PopupLogin from '../../popup/PopupLogin';

const Item = ({item, itemName}) => {
    // input error red border
    const [ error, setError ] = useState(false);

    // popup errors
    const [ addError, setAddError ] = useState(false);
    const [ editError, setEditError ] = useState(false);
    const [ errorZero, setErrorZero ] = useState(false);
    const [ priceError, setPriceError ] = useState(false);

    // popup edit success msg
    const [ editSuccess, setEditSuccess ] = useState(false);
    const [ editPriceSuccess, setEditPriceSuccess ] = useState(false);

    // popups
    const [ popupAdd, setPopupAdd ] = useState(false);
    const [ popupEdit, setPopupEdit ] = useState(false);
    const [ popupReset, setPopupReset ] = useState(false);
    const [ popupEditPrice, setPopupEditPrice ] = useState(false);
    const [ popupLogin, setPopupLogin ] = useState(false);

    // own states
    const [ number, setNumber ] = useState('');
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ loggedOut, setLoggedOut ] = useState(true);

    const totalEarnings = useSelector(state => state)

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleAddStock = () => {
        if ( number <= 0 ) { setAddError(true); setError(true); }
        else { setAddError(false); setError(false)}
        setPopupAdd(true)
    }

    const handleEdit = () => {
        if ( number <= 0 ) { setError(true); setErrorZero(true); }
        else { setError(false); setErrorZero(false); }
        if ( number < item.totalSold + 1 || number < item.itemSold + 1 ) { setError(true); setEditError(true); }
        else { setError(false); setEditError(false); }
        setPopupEdit(true)
        setEditSuccess(true)
    }

    const handleEditPrice = () => {
        if ( number <= 0 ) { setPriceError(true); setError(true); }
        else { setPriceError(false); setError(false)}
        setPopupEditPrice(true)
        setEditPriceSuccess(true)
    }

    const handleReset = () => {
        setError(false)
        setPopupReset(true)
    }

    const pressClose = () => {
        setNumber('')
        setError(false);
        setPopupAdd(false)
        setPopupEdit(false)
        setPopupReset(false)
        setPopupEditPrice(false)
        setPopupLogin(false)
    }

    const handleLogin = () => {
        setPopupLogin(true)
    }

    const handleLogout = () => {
        setPopupLogin(true)
    }

    const allEarnings = totalEarnings.cake.itemTotalEarnings + totalEarnings.pizza.itemTotalEarnings + totalEarnings.iceCream.itemTotalEarnings + totalEarnings.burger.itemTotalEarnings;
    
    return (
        <>
            <div className="item_summary">
                <h2>{ itemName }</h2>
                <p>Number of { itemName }s left: <span>{ item.itemQuantity }/{ item.initQuantity }</span></p>
                <p>Number of {itemName}s Sold: <span>{ item.totalSold }</span></p>
                <p>Price of 1 { itemName }: <span>₱ { item.itemPrice }</span></p>
                <p>Total Earnings: <span>{ item.itemTotalEarnings ? '₱ ' + cashComma(item.itemTotalEarnings) : '- -' }</span></p>
                <div className="all_earnings">
                    <h3>All Items Earnings: <span> ₱ { cashComma(allEarnings ) }</span> </h3>
                </div>
            </div>
            <div className="stock_btns">
                { loggedOut ? (
                    <>
                        <p style={{marginBottom: '10px'}}>Login as administrator?</p>
                        <button className="login" onClick={handleLogin}>Login</button>
                    </>
                ) : (
                    <>
                        <input 
                            type="number" 
                            placeholder={'Stocks only: Modify ' + itemName + 's' } 
                            onChange={e => setNumber(e.target.value)} 
                            className={ error ? 'active' : null }
                            value={number}
                        />
                        <div className="stock_btns_bot">
                            <button 
                                onClick={handleAddStock} 
                                className="add">Add Stock
                            </button>
                            <button 
                                    onClick={handleEdit} 
                                    className="edit">Edit Quantity
                            </button>
                        </div>
                        <div className="stock_btns_bot">
                            <button 
                                onClick={handleEditPrice} 
                                className="editprice">Edit Price
                            </button>
                            <button 
                                onClick={handleReset} 
                                className="reset">Reset Stock
                            </button>
                        </div>
                        { loggedIn ? (
                            <button className="logout" onClick={handleLogout}>Logout</button>
                        ) : null }
                    </>
                )}
            </div>
            { popupAdd ? ( <PopupAddStock itemName={itemName} number={number} setError={setError} addError={addError} setAddError={setAddError} pressClose={pressClose} /> ) : null }
            { popupEdit ? ( <PopupEditStock itemName={itemName} number={number} editSuccess={editSuccess} setEditSuccess={setEditSuccess} setError={setError} setNumber={setNumber} editError={editError} setEditError={setEditError} errorZero={errorZero} setErrorZero={setErrorZero} pressClose={pressClose} /> ) : null }
            { popupReset ? ( <PopupResetStock item={item} itemName={itemName} pressClose={pressClose} /> ) : null }
            { popupEditPrice ? ( <PopupEditPrice item={item} itemName={itemName} number={number} priceError={priceError} editPriceSuccess={editPriceSuccess} setEditPriceSuccess={setEditPriceSuccess} pressClose={pressClose} /> ) : null }
            { popupLogin ? ( <PopupLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} pressClose={pressClose} /> ) : null }
        </>
    )
}

export default Item;