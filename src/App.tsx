import React from 'react';
import { TicketCard } from 'movie-design-hv';
import {PaymentMethod} from 'movie-design-hv';
import {HomeHero} from 'movie-design-hv';
import {BrowserRouter as Router, Route,Routes, BrowserRouter} from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import './App.css';

function App() {

  const ticketProps = {
    movieName: "Kung Fu Panda 4",
    ticketCount: "2 Adult",
    ticketPrice: 40,
    sessionTime: "20.30 pm - 22.00 pm",
    seatNumbers: ["C3", "C4"],
    buffetProducts: "None",
    buffetPrice: 0,
    movieTheater: "Cinema Village",
    isPaymentSuccess: false,
  };

  const applePayProps = {
    imageClassName: "h-[100%] w-13 rounded-lg",
    textClassName: "font-bold",
    className: "text-sm m-2" ,
    borderRadius: "10px",
    borderColor: "#17e64e",
    text: "Pay with Apple Pay",
    backgroundColor: "linear-gradient(to right, #000000, #333333)",
    imageUrl: "/Group_56.jpg",
  };
  
  const homeHeroProps = {
    logoClassName:"",
    className:"absolute",
    backgroundImage:"/bgImage.jpg",
    logoImage:"/Group 3.png",
    overlayColor: "rgba(0, 0, 0, 0.7)",
    overlayOpacity: 0.4,
  };
  return (
    <div className="App">
      {/* <TicketCard {...ticketProps} />
      <PaymentMethod  {...applePayProps} />
       <HomeHero {...homeHeroProps} /> */}
       <BrowserRouter>
          <Routes>
            <Route path='/index' element={<IndexLayout />}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
