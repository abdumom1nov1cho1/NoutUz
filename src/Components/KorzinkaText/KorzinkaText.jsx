import React from "react";
import "../KorzinkaText/KorzinkaText.scss";
import { useCart } from "react-use-cart";
import axios from "axios";

const KorzinkaText = () => {
  let total = 0;

  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();

  console.log(items);
  const postTest = () => {
    axios.post(
      `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
        `<b>Details:</b>
  
      <b>The operation was completed successfully!</b>
      <b>our couriers will contact you soon!</b>
      <b> Call Center: +998 99 855 73 85 </b>
      
  ${items
    .map((item) => {
      return `
  <b>${item.name}</b>
  ${item.count} x ${item.price} som = ${item.count} 
      `;
    })
    .join("")}        
  <b>Total:</b> ${total} $`
      )}&parse_mode=html`
    );
    // window.location.reload();
  };

  return (
    <div>
      {isEmpty ? <h1 className="ddd"> Hechnarsa yoq </h1> : null}

      {items.map((item) => {
        const prCount = item.count * item.price;
        total += prCount;

        if (item.count >= 1) {
          return (
            <div className="container">
              <div className="carddd" key={item.id}>
                <div className="left">
                  <img className="imggg" src={item.image} alt="" />
                  <div className="right">
                    <div className="text">
                      <h1 className="h1">{item.name}</h1>
                      <p className="p">{prCount} $</p>
                    </div>
                    <div className="clicks">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.count++)
                        }
                        className="btn btn-primary"
                      >
                        +
                      </button>

                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          updateItemQuantity(item.id, item.count--)
                        }
                      >
                        -
                      </button>
                      <img
                        onClick={() => removeItem(item.id)}
                        className="jjj"
                        src="https://play-lh.googleusercontent.com/Si72P4Dn-_54FeMqGtnDOAOwYcHVIAnSzB8OpeYp8BTP0xNUx0S_G4Cv5rxhlNPK2CA"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          removeItem(item.id);
        }
      })}
      <aside>
        <div className="btnd">
          <img
            className="h11"
            src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg"
            alt=""
          />
          <div className="oplata">
            <h1 className="hh1"> Hammasi - </h1>
            <h1 className="obshi">{total} $</h1>
          </div>
          <div className="oplata">
            <h1 className="hh1"> Доставка - </h1>
            <h1 className="obshi"> 0 $</h1>
          </div>
          <button
            className="zakaz btn btn-primary"
            onClick={() => {
              postTest();
              localStorage.clear();
            }}
          >
            {" "}
            Нажмите
          </button>
        </div>
      </aside>
    </div>
  );
};

export default KorzinkaText;
