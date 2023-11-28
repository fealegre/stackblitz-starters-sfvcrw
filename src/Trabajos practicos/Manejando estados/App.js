import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import InputForm from './InputForm';
import List from './List';







function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputPrice, setInputPrice] = useState('');

  function inputNameHandler(event) {
    setInputName(event.target.value);
  }

  function inputDescHandler(event) {
    setInputDesc(event.target.value);
  }

  function inputPriceHandler(event) {
    setInputPrice(event.target.value);
  }

  function handleAddProduct() {
    const newProduct = {
      id: Math.floor(Math.random() * 1000000000),
      name: inputName,
      desc: inputDesc,
      price: Number(inputPrice),
    };
    setProducts([...products, newProduct]);
    setId('');
    setInputName('');
    setInputDesc('');
    setInputPrice('');
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="app">
        <InputForm
          products={products}
          handleSubmit={handleSubmit}
          inputName={inputName}
          inputDesc={inputDesc}
          inputPrice={inputPrice}
          inputNameHandler={inputNameHandler}
          inputDescHandler={inputDescHandler}
          inputPriceHandler={inputPriceHandler}
          handleAddProduct={handleAddProduct}
        />
        <List products={products} />
      </div>
    </>
  );
}

const container = document.querySelector('#app');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
