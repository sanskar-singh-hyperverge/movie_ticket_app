import React from 'react';
import { TicketCard } from 'movie-design-hv';
import {PaymentMethod} from 'movie-design-hv';
import {HomeHero} from 'movie-design-hv';
import {BrowserRouter as Router, Route,Routes, BrowserRouter} from 'react-router-dom';
import IndexPage from './Layouts/IndexPage';
import './App.css';
import BookingPage from './Layouts/BookingPage';
import MenuPage from './Layouts/MenuPage';
import CheckoutPage from './Layouts/CheckoutPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route 
              path='/index' 
              element={<IndexPage />}>  
            </Route>
            <Route 
              path='/sign_in'
              element = {<CheckoutPage/>}>
            </Route>
            <Route 
              path='/ticket_details' 
              element = {<BookingPage />}>
            </Route>
            <Route 
              path='/buffet_page'
              element = {<MenuPage/>}>
            </Route>
            <Route 
              path='/buy_ticket'
              element = {<CheckoutPage/>}>
            </Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
