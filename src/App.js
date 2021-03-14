import React from 'react';
import Button from './components/Button';
import Product from './components/Product';
import tas1 from './assets/bag_1.jpg';
import tas2 from './assets/bag_2.jpg';
import tas3 from './assets/bag_3.jpg';
import tas4 from './assets/bag_4.jpg';
import brand from'./assets/brand.jpg';
import story from './assets/our_story.jpg';
import './App.css';

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button buttonName={'to the collection'} />
        <Button buttonName={'shop all bags'} />
        <Button buttonName={'pre-orders'} disabled={'true'} />
      </nav>

      <main>
        <Product
          image={tas1}
          label="Best seller"
          name="The Handy Bag"
          price="€400,-"
        />
        <Product
          image={tas2}
          label="Best seller"
          name="The Stylish Bag"
          price="€250,-"
        />
        <Product
          image={tas3}
          label="New collection"
          name="The Simple Bag"
          price="€300,-"
        />
        <Product
          image={tas4}
          label="New collection"
          name="The Trendy Bag"
          price="€150,-"
        />
      </main>

      <footer>
        <section className="tile-1"></section>
        <section className="tile-2"></section>
        <section className="tile-3"></section>
        <section className="tile-4"></section>
      </footer>
    </>
  );
}

export default App;



