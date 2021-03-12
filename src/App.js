//React Import Files
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

//Style Component Imports
import { GlobalStyle } from './globalStyles';
import { Hero } from './Components/Hero';
import { Products } from './Components/Products';
import { Feature } from './Components/Feature';
import { Footer } from './Components/Footer';
import Provider from './Context/Provider'

const App = () => {
  return (
    <Provider>
      <Router>
        <GlobalStyle/>
        <Hero />
        <Products heading='Choose your favorite'/> 
        <Feature />
        {/* <Products heading="Sweet Treats for you" /> */}
        <Footer/>
        </Router>
    </Provider>
  );
}

export default App;
