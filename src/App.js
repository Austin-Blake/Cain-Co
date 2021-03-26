//React Import Files
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Style Component Imports
import { GlobalStyle } from './globalStyles';
import { Hero } from './Components/Hero';
import { Products } from './Components/Products';
import {ProductDetails} from './Components/ProductDetail';
import { Footer } from './Components/Footer';
import Provider from './Context/Provider'
import { Cart } from './Components/Cart/Cart';
import { Category } from './Components/Category/Category'


const App = () => {
  
  return (
    <Provider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetails} />
          <Route path="/category" exact component={Category} />
          <Route path="/cart" component={Cart} />
          
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
