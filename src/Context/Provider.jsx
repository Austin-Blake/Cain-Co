import React, { useReducer, useState } from 'react';
import MyContext from './MyContext';
import reducer from './Reducer';
import { products } from '../Components/Data/data';



const Provider = ({ children }) => {
    const initialState = {
        products: products,
        cart: [],
        total: 0,
        itemAmount: 0
    };

    //Set state for filtering products by Brand or Gender
    const [brand, setBrand] = useState('');
    const [gender, setGender] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState();
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
            itemAmount: state.amount,
            state,
            dispatch,
            brand,
            setBrand,
            gender,
            setGender,
            isOpen,
            setIsOpen,
            size,
            setSize,
        }}>
            {children}
        </MyContext.Provider>
    )
};

export default Provider;
