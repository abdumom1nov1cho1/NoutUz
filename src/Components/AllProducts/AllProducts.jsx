import React, { useContext, useState } from "react";
import "../AllProducts/AllProducts.scss";
import { Context } from "../../Context";
import axios from "axios";
import "../Asus/AsusText.scss";
import { useCart } from "react-use-cart";
import "../SearchBar/SearchBar.scss";

const Allplants = () => {
  const { mura, searchText, dataSearch } = useContext(Context);

  const { addItem, getItem, removeItem } = useCart();

console.log(mura);

  return (
    <div className="allplants">
      <div className="container">
        <input
          className="inputt"
          type="text"
          placeholder="SearchBar"
          value={mura}
          onChange={searchText.bind(this)}
        />
      </div>
      <div className="container">
        <div className="products">
          <div className="maped">
            {dataSearch?.map((el) => {
              return (
                <div className="container">
                  <div className="cardd" key={el._id}>
                    <img className="card__img" src={el.image} alt="" />
                    <h1 className="card__h1">{el.name}</h1>
                    <h5 className="card__h5">{el.desc}</h5>
                    <p className="card__p">{el.price} $</p>
                    <button
                      onClick={() => addItem({ ...el, id: el._id })}
                      className="btn3 btn-primary"
                    >
                      Добавлять
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allplants;
