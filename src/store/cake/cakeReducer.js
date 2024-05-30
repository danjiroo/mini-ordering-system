const initState = {
    default: 20,
    initQuantity: 20,
    itemQuantity: 20,
    itemSold: 0,
    initPrice: 10,
    itemPrice: 10,
    itemTotalEarnings: 0,
    currentEarning: 0,
    isSold: false,
    totalSold: 0
}

const cakeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_CAKE': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                currentEarning: state.itemPrice * itemSold,
                isSold: true
            }
        }
        case 'CANCEL_CAKE': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + state.itemSold,
                itemSold: 0,
                currentEarning: 0,
                isSold: false
            }
        }
        case 'RESET_CAKE': return initState;
        case 'ADD_TO_CART_CAKE': {
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
        case 'ADD_STOCK_CAKE': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + Number(action.payload),
                initQuantity: state.initQuantity + Number(action.payload)
            }
        }
        case 'EDIT_CAKE': {
            return {
                ...state,
                initQuantity: Number(action.payload),
                itemQuantity: Number(action.payload) - (state.totalSold + state.itemSold)
            }
        }
        case 'EDIT_PRICE_CAKE': {
            return {
                ...state,
                itemPrice: Number(action.payload),
                currentEarning: Number(action.payload) * state.itemSold
            }
        }
        default: return state
    }
}

export default cakeReducer;