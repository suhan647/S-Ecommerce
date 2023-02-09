import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Routing from './routing/Routing';
import Carousal from './components/carousal/Carousal';

function App() {
  return (
    <>
     <Header />
     {/* <Carousal /> */}
     <Routing/>
    </>
  );
}

export default App;
