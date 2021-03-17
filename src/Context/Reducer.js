

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'SENDING_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'REQUEST_FINISHED':
            return {
                ...state,
                loading: false
            }
            case 'ADD_TO_CART':
                return {
                    ...state,
                    cart: state.cart.concat(action.payload),
            }
            case 'DELETE_FROM_CART':
                return {
                    ...state,
                    cart: state.cart.filter(item => {
                        return item.id !== action.payload.styleId;
                    }),
            }
            case 'EMPTY_CART':
                return {
                    ...state,
                    cart: [],
            }
        case 'SET_ITEM':
            return {
                ...state,
                productItem: action.payload,
            }
    
        default:
            return state;
    }
};

export default reducer;