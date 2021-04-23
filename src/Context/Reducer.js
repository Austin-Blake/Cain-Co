import {filterId, iterateStateFilter} from './helper'
import {cloneDeep } from 'lodash';



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

            const payload = cloneDeep(action.payload);
            

            if (state.cart.length === 0) {                

                state.cart.push(payload);

                return {
                    ...state,
                    cart: state.cart,
                };
            } if (iterateStateFilter(state.cart, payload, filterId) === true) {
                
                return {
                    ...state,
                    cart: state.cart,
                };
            } 
            else {

                state.cart.push(payload)

                return {
                    ...state,
                    cart: state.cart,
                    
                }
            }

        case 'DELETE_FROM_CART':

                return {
                    ...state,
                    cart: state.cart.filter(item => {

                        return item.id !== action.payload.id;
                        
                    }),
            }
        
            case 'EMPTY_CART':
                return {
                    ...state,
                    cart: [],
            }
        case 'INCREMENT':
            const payloadSecond = cloneDeep(action.payload);
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id === payloadSecond.id) {
                        item = {...item, amount: item.amount + 1 };

                        return item;
                    } else {
                        return item;
                    }
                }),
                cart: state.cart.map((item) => {
                    if (item.id === payloadSecond.id) {
                        item = {...item, amount: item.amount + 1 };

                        return item;

                    } else {

                        return item;
                    }
                })
            }
        case 'DECREMENT':
            const payloadThird = cloneDeep(action.payload);
                return {
                    ...state,
                    products: state.products.map(item => {
                        if (item.id === payloadThird.id) {
                            item = {...item, amount: item.amount - 1 };
                            return item;
                        } else {
                            return item;
                        }
                    }),
                    cart: state.cart.map((item) => {
                        if (item.id === payloadThird.id) {
                            item = {...item, amount: item.amount - 1 };

                            return item;
                        } else {
                            return item;
                        }
                    })
            }
        case 'TOTAL':

            let { total, amount } = state.cart.reduce(
                (cartTotal, item) => {
                    const { price, amount } = item;
                    const itemTotal = price * amount;

                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;

                    return cartTotal;
                },
                {
                    total: 0,
                    amount: 0
                })
            total = parseFloat(total.toFixed(2));
            return {
                ...state,
                total,
                amount
    
            }
        
        case 'AMOUNT':

            let { itemAmount } = state.cart.reduce((cartTotal, item) => {
                
                cartTotal.amount += item.amount;
                console.log(cartTotal.amount)
                return cartTotal;
            }, { itemAmount: 0 })
            return {
                ...state,
                itemAmount
            }
        
        case 'SET_ITEM_DETAIL':
            return {
                ...state,
                productItem: action.payload,
            }
        
        case 'SET_BRAND':
                return {
                    ...state,
                    brand: action.payload
                }
    
        default:
            return state;
    }
};



export default reducer;