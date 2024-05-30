export const buyPizza = (num) => {
    return {
        type: 'BUY_PIZZA',
        payload: num
    }
}

export const changeNumOfPizza = (num) => {
    return {
        type: 'CHANGE_NUM_OF_PIZZA',
        payload: num
    }
}

export const addToCartPizza = (num) => {
    return {
        type: 'ADD_TO_CART_PIZZA',
        payload: num
    }
}

export const addStockPizza = (num) => {
    return {
        type: 'ADD_STOCK_PIZZA',
        payload: num
    }
}

export const editPizza = (num) => {
    return {
        type: 'EDIT_PIZZA',
        payload: num
    }
}

export const editPricePizza = (num) => {
    return {
        type: 'EDIT_PRICE_PIZZA',
        payload: num
    }
}

export const resetPizza = {
    type: 'RESET_PIZZA'
}

export const cancelPizza = {
    type: 'CANCEL_PIZZA'
}