import {filterCart, filterPayload} from './helper'
const _ = require('lodash');



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

            console.log('0th', ...state.cart);
            const payload = _.clone(action.payload);

            const iterateStateFilter = () => {
               const trueOrFalse = state.cart.forEach((item) => {
                    console.log('iterateFilter-item', item)
                    console.log('iterateFilter-payload', payload)
                    if (_.isEqual(filterPayload(item), filterPayload(payload))) {
                        return true;
                    }
                    return false;
               });
                console.log(trueOrFalse)
                return trueOrFalse;
            }

            if (state.cart.length === 0) {
                state.cart.push(payload);
                
                console.log('filterCart', filterCart(state.cart));
                console.log('filterPayload',filterPayload(payload));
                console.log('1st cart', ...state.cart);
                return {
                    ...state,
                    cart: state.cart
                };
            } if (iterateStateFilter === true) {
                console.log('2nd cart', ...state.cart);
                return {
                    ...state,
                    cart: state.cart
                };
            } 
            else {
                console.log('3nd cart', ...state.cart);
                console.log('passed isEqual')
                console.log('2nd filter', filterCart(state.cart));

                return {
                    ...state,
                    cart: state.cart.concat(payload),
                }
            }
            
           

        case 'DELETE_FROM_CART':
            console.log('deleted')
                return {
                    ...state,
                    cart: state.cart.filter(item => {
                        console.log('action.payload:', action.payload, 'Id:', item.id);
                        return item.id !== action.payload.id;
                        
                    }), 
            }
        
            case 'EMPTY_CART':
                return {
                    ...state,
                    cart: [],
            }
        
        case 'INCREMENT':
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        item = {...item, amount: item.amount + 1 };
                        console.log(item)
                        return item;
                    } else {
                        return item;
                    }
                }),
                cart: state.cart.map((item) => {
                    if (item.styleId === action.payload.styleId) {
                        item = {...item, amount: item.amount + 1 };
                        console.log(item)
                        return item;
                    } else {
                        return item;
                    }
                })
            }
            case 'DECREMENT':
                return {
                    ...state,
                    products: state.products.map(item => {
                        if (item.id === action.payload.id) {
                            item = {...item, amount: item.amount - 1 };
                            return item;
                        } else {
                            return item;
                        }
                    }),
                    cart: state.cart.map((item) => {
                        if (item.styleId === action.payload.styleId) {
                            item = {...item, amount: item.amount - 1 };
                            console.log(item)
                            return item;
                        } else {
                            return item;
                        }
                    })
            }
        case 'TOTAL':
            console.log('TOTAL');
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
                amount,
    
            }
        case 'SET_ITEM_DETAIL':
            return {
                ...state,
                productItem: action.payload,
            }
    
        default:
            return state;
    }
};

export default reducer;