import React from 'react';
import './App.scss';
import Header from "./Header/Header.js";
import DisplayCards from "./DisplayCards/DisplayCards.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayCards />
      <Footer />
    </div>
  );
}

export default App;
