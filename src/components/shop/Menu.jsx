import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({cake, pizza, iceCream, burger}) => {

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    return (
        <div className="menu">
            <NavLink exact to="/"><small>&raquo; </small><span className="menu">Menu</span></NavLink>
            <ul>
                <li><NavLink to="/burger"><h3>Burger</h3> <span>{ cashComma(burger.itemQuantity) }/{ cashComma(burger.initQuantity) }</span></NavLink></li>
                <li><NavLink to="/icecream"><h3>Ice Cream</h3> <span>{ cashComma(iceCream.itemQuantity) }/ { cashComma(iceCream.initQuantity) }</span></NavLink></li>
                <li><NavLink to="/pizza"><h3>Pizza</h3> <span>{ cashComma(pizza.itemQuantity) }/{ cashComma(pizza.initQuantity) }</span></NavLink></li>
                <li><NavLink to="/cake"><h3>Cake</h3> <span>{ cashComma(cake.itemQuantity) }/{ cashComma(cake.initQuantity) }</span></NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;