import React, { useReducer } from 'react';
import './Product.css';

function getTotal(cart) {
  return cart.reduce((totalCost, item) => totalCost + item.price, 0);
}

function shoppingCartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      const productIndex = state.findIndex(
        (item) => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

function getTotalSelectedAmountPerProduct(cart, productName) {
  return cart.filter((item) => item.name === productName).length;
}

export default function Product({ products }) {
  const [cart, setCart] = useReducer(shoppingCartReducer, []);

  function add(product) {
    const action = { product, type: 'add' };
    setCart(action);
  }

  function remove(product) {
    const action = { product, type: 'remove' };
    setCart(action);
  }

  return (
    <>
      <div className="wrapper">
        <div className="shoppingcart">
          <div>
            <i className="fa fa-3x fa-shopping-cart"></i>
          </div>
          <strong>Shopping Cart</strong>
          <div>{cart.length} total items</div>
          <div>Total price: ${getTotal(cart)}</div>
        </div>
        <div className="listGrid">
          {products.map((product) => (
            <div key={product.name}>
              <div className="product">
                <span>ID: {product.id}</span>
                <span>Nombre: {product.name}</span>
                <span>Descripcion: {product.desc}</span>
                <span>$ {product.price}</span>
              </div>
              <div className="selectproduct">
                <button onClick={() => add(product)}>+</button>
                <b>{getTotalSelectedAmountPerProduct(cart, product.name)}</b>
                <button onClick={() => remove(product)}>-</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
