import React from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button buttonName={'to the collection'} />
        <Button buttonName={'shop all bags'} />
        <Button buttonName={'pre-orders'} />

        {/* <button>to the collection</button>
        <button>shop all bags</button>
        <button>pre-orders</button> */}
      </nav>
    </>
  );
}

export default App;



