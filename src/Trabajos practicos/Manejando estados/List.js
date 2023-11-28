import React from 'react';
import Product from './Product';
import './App.css';

export default function List({ products }) {
  return (
    <>
      <div>
        <h3>Listado</h3>
        {products.length === 0 ? (
          <h2>Cargar productos...</h2>
        ) : (
          <div>
            <Product products={products} />
          </div>
        )}
      </div>
    </>
  );
}
