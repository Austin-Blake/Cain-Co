import React, { useContext, useState } from 'react';
import MyContext from '../../Context/MyContext';
import {
    ProductsContainer,
    ProductWrapper,
    ProductCard,
    ProductDesc,
    DetailWrapper,
    ProductDetail,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductBrand,
    ProductPrice,
    ProductSizes,
    ProductSize,
SizeWrapper,
ProductButton} from './ProductDetailElements';

export const ProductDetails = ({match}) => {
    const myContext = useContext(MyContext);
    const { products, dispatch} = myContext;
    const [size, setSize] = useState();
    
    //filter products array for product id that matches Router (match.params.id)
    //to get the right product to display

    
    let displayItem = products.filter(product => product.styleId === match.params.id);
    //reduce filter output to single object
    let item = displayItem[0];
 

    return (
        
        <ProductsContainer>
            <ProductBrand>Made by: {item.brand}</ProductBrand>
            <ProductWrapper>
                <ProductImg src={item.image} alt={item.productName}/>
                <ProductCard>
                    <ProductInfo>
                        <ProductTitle>{item.productName}</ProductTitle>
                        <ProductDesc>{item.description}</ProductDesc>
                    </ProductInfo>
                    <hr></hr>
                    <DetailWrapper>
                    {item.details.map(product => {
                           return <ProductDetail>{product}</ProductDetail>
                    })}
                    </DetailWrapper>
                    <SizeWrapper>
                        {item.size.map((product) => {
                            return <ProductSizes value={product} onClick={(e) => setSize(item.currentSize = parseInt(e.target.value)) }>{product}</ProductSizes>
                        })}
                    </SizeWrapper>
                    <ProductSize> {size}</ProductSize>
                    <DetailWrapper>
                        <ProductPrice>{item.price}</ProductPrice>
                        <button onClick={() => { dispatch({ type: 'INCREMENT', payload: item }); item.id = Date.now(); }}>Add</button>

                        <h4>Amount: <span>{item.amount}</span></h4>
                        
                        <button onClick={() => item.amount >= 2 ? dispatch({ type: 'DECREMENT', payload: item }) : null}>Delete</button>
                        
                        <ProductButton onClick={() => {
                            if (item.currentSize && item.amount > 0) {
                                item.id = Date.now();
                                dispatch({ type: 'ADD_TO_CART', payload: item });
                            } else {
                                return null
                            }
                            
                        }}>Add to Cart</ProductButton>
                        
                    </DetailWrapper>
                </ProductCard>  
             </ProductWrapper>
        </ProductsContainer>
    )
}
