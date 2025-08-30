import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={
              <>
                <Header />
                <ProductListing />
              </>
            } />
            <Route path="/cart" element={
              <>
                <Header />
                <ShoppingCart />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
