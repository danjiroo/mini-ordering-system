const initState = {
    default: 70,
    initQuantity: 70,
    itemQuantity: 70,
    itemSold: 0,
    initPrice: 29,
    itemPrice: 29,
    itemTotalEarnings: 0,
    currentEarning: 0,
    isSold: false,
    totalSold: 0
}

const iceCreamReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_ICECREAM': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                currentEarning: state.itemPrice * itemSold,
                isSold: true
            }
        }
        case 'CANCEL_ICECREAM': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + state.itemSold,
                itemSold: 0,
                currentEarning: 0,
                isSold: false
            }
        }
        case 'RESET_ICECREAM': return initState;
        case 'ADD_TO_CART_ICECREAM': {
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
        case 'ADD_STOCK_ICECREAM': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + Number(action.payload),
                initQuantity: state.initQuantity + Number(action.payload)
            }
        }
        case 'EDIT_ICECREAM': {
            return {
                ...state,
                initQuantity: Number(action.payload),
                itemQuantity: Number(action.payload) - (state.totalSold + state.itemSold)
            }
        }
        case 'EDIT_PRICE_ICECREAM': {
            return {
                ...state,
                itemPrice: Number(action.payload),
                currentEarning: Number(action.payload) * state.itemSold
            }
        }
        default: return state
    }
}

export default iceCreamReducer;