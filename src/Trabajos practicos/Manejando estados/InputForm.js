import React from 'react';

export default function InputForm(props) {
  return (
    <>
      <div className="inputCard">
        <h3>Carga de producto</h3>
        <div>
          <form action="" onSubmit={props.handleSubmit}>
            <div className="formField">
              <input
                value={props.inputName}
                type="text"
                name="name"
                onChange={props.inputNameHandler}
              />
            </div>
            <label htmlFor="name">Nombre de producto</label>
            <div className="formField">
              <input
                value={props.inputDesc}
                type="text"
                name="description"
                onChange={props.inputDescHandler}
              />
            </div>
            <label htmlFor="description">Descripción</label>
            <div className="formField">
              <input
                value={props.inputPrice}
                type="text"
                name="price"
                onChange={props.inputPriceHandler}
              />
            </div>
            <label htmlFor="price">Precio</label>
            <div>
              <button type="submit" onClick={props.handleAddProduct}>
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}