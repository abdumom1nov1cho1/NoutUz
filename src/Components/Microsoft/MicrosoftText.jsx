
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Asus/AsusText.scss";
import { useCart } from "react-use-cart";

const MicrosoftText = () => {
  

  const [data, setData] = useState([]);
  const { addItem, getItem, removeItem } = useCart();


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

  const newarray = data.filter((el) => el.category === "Microsoft");
  return (
    <div>
         <header>
            <div className="container">
                <h1 className="Header__h1">Microsoft</h1>
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

export default MicrosoftText