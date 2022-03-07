import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Cart, Favorite, Product, Order } from './components/page';

import './App.css';

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};
