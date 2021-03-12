import React, { useReducer } from 'react';
import MyContext from './MyContext';
import reducer from './Reducer'



const Provider = ({ children }) => {
    const initialState = {
        products: [],
        // id: '',
        // title: '',
        // price: 0,
        // category: '',
        // description: '',
        // image: '',
        loading: false
    };

    const [state, dispatch] =
        useReducer(reducer, initialState);
    
    const getProducts = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch('https://fakestoreapi.com/products?limit=5');
            const data = await res.json();
            console.log(data);
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_PRODUCTS', payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MyContext.Provider value={{
            products: state.products,
            // id: state.id,
            // title: state.title,
            // price: state.price,
            // category: state.category,
            // description: state.description,
            // image: state.image,
            loading: state.loading,
            getProducts: getProducts
        }}>
            {children}
        </MyContext.Provider>
    )
};

export default Provider;
