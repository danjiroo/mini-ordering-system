export const buyIceCream = (num) => {
    return {
        type: 'BUY_ICECREAM',
        payload: num
    }
}

export const changeNumOfIceCream = (num) => {
    return {
        type: 'CHANGE_NUM_OF_ICECREAM',
        payload: num
    }
}

export const addToCartIceCream = (num) => {
    return {
        type: 'ADD_TO_CART_ICECREAM',
        payload: num
    }
}

export const addStockIceCream = (num) => {
    return {
        type: 'ADD_STOCK_ICECREAM',
        payload: num
    }
}

export const editIceCream = (num) => {
    return {
        type: 'EDIT_ICECREAM',
        payload: num
    }
}

export const editPriceIceCream = (num) => {
    return {
        type: 'EDIT_PRICE_ICECREAM',
        payload: num
    }
}

export const resetIceCream = {
    type: 'RESET_ICECREAM'
}

export const cancelIceCream = {
    type: 'CANCEL_ICECREAM'
}