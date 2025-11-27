import { useState } from 'react';
import './scss/style.css'
import Wrapper from './modules/Wrapper';
import { MarketProvider } from './components/Context/MarketContext';


function App() {
  return (
    <>
    <MarketProvider>
           <Wrapper />
    </MarketProvider>
    </>
  );
}

export default App;