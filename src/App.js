import React from 'react';
import './App.scss';
import Header from "./Header/Header.js";
import DisplayCards from "./DisplayCards/DisplayCards.js";
import AppTabs from "./AppTabs/AppTabs.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <AppTabs />      
      <Footer />
    </div>
  );
}

export default App;
