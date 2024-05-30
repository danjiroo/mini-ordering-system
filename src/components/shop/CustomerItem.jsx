import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelPizza } from '../../store/pizza/pizzaAction';
import { cancelCake } from '../../store/cake/cakeAction';
import { cancelBurger } from '../../store/burger/burgerAction';
import { cancelIceCream } from '../../store/iceCream/iceCreamAction';
import trash from '../../assets/images/trash.png';

const CustomerItem = ({itemName, item}) => {
    const dispatch = useDispatch();
    const piece = item.itemSold > 1 ? 'pcs' : 'pc'

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const getCancelItem = theitem => {
        switch(theitem) {
            case 'Cake': return cancelCake
            case 'Pizza': return cancelPizza
            case 'Burger': return cancelBurger
            case 'Ice Cream': return cancelIceCream
            default: null
        }
    }
    
    return (
        <p>
            <small>
            <img className="trashimg" src={trash} alt="trash" onClick={() => dispatch(getCancelItem(itemName))} />
            <q>{ itemName }</q>
            </small>
            <span>{
                item.currentEarning ? (
                    item.itemSold + 
                    piece + 
                    ' x ₱ ' + 
                    item.itemPrice + 
                    ' | ₱ ' + 
                    cashComma(item.itemPrice * item.itemSold)
                ) : '- -'
            }
            </span>
        </p>
    )
}

export default CustomerItem;