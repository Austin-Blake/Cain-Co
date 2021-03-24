import React, { useReducer, useState } from 'react';
import MyContext from './MyContext';
import reducer from './Reducer';
import { products } from '../Components/Data/data';



const Provider = ({ children }) => {
    const initialState = {
        products: products,
        cart: [],
        total: 0,
    };
    const [brand, setBrand] = useState('Justin');

    const [state, dispatch] =
        useReducer(reducer, initialState);
    
    //Async Function to retrieve data from API//
    //Never used because data is hard coded in program//
    
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
            cart: state.cart,
            productItem: state.productItem,
            total: state.total,
            dispatch,
            state,
            brand,
            setBrand
        }}>
            {children}
        </MyContext.Provider>
    )
};

export default Provider;
