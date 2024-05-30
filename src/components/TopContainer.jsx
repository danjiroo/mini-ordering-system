import React from 'react';
import { useSelector } from 'react-redux';
import Customer from './shop/Customer';
import KeysContainer from './keys/KeysContainer';

const TopContainer = () => {
    const cake = useSelector(state => state.cake);
    const pizza = useSelector(state => state.pizza);
    const iceCream = useSelector(state => state.iceCream);
    const burger = useSelector(state => state.burger);
 
    return (
        <div className="top_con">
            <Customer cake={cake} pizza={pizza} burger={burger} iceCream={iceCream} />
            <KeysContainer cake={cake} pizza={pizza} burger={burger} iceCream={iceCream} />
        </div>
    )
}

export default TopContainer;