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
        <Button buttonName={'pre-orders'} disabled={'true'} />
      </nav>

      <main>
        <article>
          <span className="imageLabel">Best seller</span>
        </article>
        <article>
          <span className="imageLabel">Best seller</span>
        </article>
        <article>
          <span className="imageLabel">Best seller</span>
        </article>
        <article>
          <span className="imageLabel">Best seller</span>
        </article>

      </main>
    </>
  );
}

export default App;



