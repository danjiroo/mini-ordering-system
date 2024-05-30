const initState = {
    default: 45,
    initQuantity: 45,
    itemQuantity: 45,
    itemSold: 0,
    initPrice: 13,
    itemPrice: 13,
    itemTotalEarnings: 0,
    currentEarning: 0,
    isSold: false,
    totalSold: 0
}

const pizzaReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_PIZZA': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                currentEarning: state.itemPrice * itemSold,
                isSold: true
            }
        }
        case 'CANCEL_PIZZA': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + state.itemSold,
                itemSold: 0,
                currentEarning: 0,
                isSold: false
            }
        }
        case 'RESET_PIZZA': return initState;
        case 'ADD_TO_CART_PIZZA': {
            const totalSold = state.totalSold + state.itemSold
            return {
                ...state,
                itemQuantity: action.payload,
                itemSold: 0,
                currentEarning: 0,
                totalSold,
                itemTotalEarnings: state.itemTotalEarnings + state.currentEarning,
                isSold: false
            }
        }
        case 'ADD_STOCK_PIZZA': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + Number(action.payload),
                initQuantity: state.initQuantity + Number(action.payload)
            }
        }
        case 'EDIT_PIZZA': {
            return {
                ...state,
                initQuantity: Number(action.payload),
                itemQuantity: Number(action.payload) - (state.totalSold + state.itemSold)
            }
        }
        case 'EDIT_PRICE_PIZZA': {
            return {
                ...state,
                itemPrice: Number(action.payload),
                currentEarning: Number(action.payload) * state.itemSold
            }
        }
        default: return state
    }
}

export default pizzaReducer;