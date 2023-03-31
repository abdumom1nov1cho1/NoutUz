import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from 'react-use-cart'
import "../Hp/HpText.scss"

const HpText = () => {

  const [data, setData] = useState([]);
  const{addItem , getItem , removeItem} = useCart();


  useEffect(() => {
    axios
      .get("https://razer-api.onrender.com/devices")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newarray = data.filter((el) => el.category === "Hp");

  return (
    <div>
      <header>
        <div className="container">
          <h1 className="Header__h1">Ноутбуки HP</h1>
        </div>
        <div className="lenovo__tips">
          <img
            src="https://nout.uz/wp-content/uploads/2022/06/envy.jpg"
            alt=""
          />
          <img
            src="https://nout.uz/wp-content/uploads/2022/06/hp-victus-16-1.jpg"
            alt=""
          />
          <img
            src="https://nout.uz/wp-content/uploads/2022/06/hp-pavilion.jpg"
            alt=""
          />
          <img
            src="https://nout.uz/wp-content/uploads/2022/06/spectre-2.jpg"
            alt=""
          />
          <img
            src="https://nout.uz/wp-content/uploads/2022/06/hp-omen-16-2.jpg"
            alt=""
          />
          <img
            src="https://nout.uz/wp-content/uploads/2022/05/zenbook-1970x500-1.jpg"
            alt=""
          />
        </div>
      </header>
      <div className="container">
        <div className="parent">
          {newarray.map((el) => {
            return (
              <>
                <div className="cardd" key={el._id}>
                  <img className="card__img" src={el.image} alt="" />
                  <h1 className="card__h1">{el.name}</h1>
                  <h5 className="card__h5">{el.desc}</h5>
                  <p className="card__p">{el.price} $</p>
                  {!getItem(el._id) ? (
                    <button
                      onClick={() => addItem({ ...el, id: el._id })}
                      className="btn3 btn-primary"
                    >
                      Добавлять
                    </button>
                  ) : (
                    <button
                      className="btn3 btn-secondary"
                      onClick={() => removeItem(el._id)}
                    >
                      Удалять
                    </button>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
      </div>
  )
}

export default HpText