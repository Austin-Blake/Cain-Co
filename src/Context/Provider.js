import React, { useReducer } from 'react';
import MyContext from './MyContext';
import reducer from './Reducer'
import {products} from '../Components/Data/data'



const Provider = ({ children }) => {
    const initialState = {
        products: products,
        loading: false,
        cart: [],
    };

    const [state, dispatch] =
        useReducer(reducer, initialState);
    
    // const getProducts = async () => {
    //     try {
    //         dispatch({ type: 'SENDING_REQUEST' });
    //         const res = await fetch('https://fakestoreapi.com/products');
    //         const data = await res.json();
    //         console.log(data);
    //         dispatch({ type: 'REQUEST_FINISHED' });
    //         dispatch({ type: 'SET_PRODUCTS', payload: data });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    

    return (
        <MyContext.Provider value={{
            products: state.products,
            loading: state.loading,
            cart: state.cart,
            productItem: state.productItem,
            dispatch,
        }}>
            {children}
        </MyContext.Provider>
    )
};

export default Provider;