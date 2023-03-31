import React, { useState, useEffect } from "react";
import "../Admin_panel/Admin.scss";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Admin = () => {
  
  const [data, setData] = useState([]);
  const [name, SetName] = useState("");
  const [image, SetImage] = useState("");
  const [price, SetPrice] = useState("");
  const [desc, SetDesc] = useState("");
  const [category, SetCategory] = useState("");


  useEffect(() => {
    axios
      .get("https://razer-api.onrender.com/devices")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const PatchElements = async (_id) => {
    await axios.patch(
      `https://razer-api.onrender.com/devices${_id}`,
      {
        name: name,
        image: image,
        price: price,
        desc: desc,
        category: category,
      }
    );
    window.location.reload();
  }

  const AdminDelete = async (_id) => {
    try {
      const res = await axios
        .delete(`https://razer-api.onrender.com/devices/${_id}`)
        .then(() => window.location.reload());
      console.log("Data deleted");
    } catch (error) {
      alert(error);
    }
  };

  const CreateDevice = (e) => {
    e.preventDefault();
    axios
      .post("https://razer-api.onrender.com/devices", {
        name: name,
        image: image,
        price: price,
        desc: desc,
        category: category,
      })
      .then((res) => {
        console.log(res.data);
        alert("Device qowldi");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <div className="registr">
        <div className="inp">
          <input
            value={name}
            onChange={(e) => SetName(e.target.value)}
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="inp">
          <input
          className="imgg"
          disabled={!name}
            value={image}
            onChange={(e) => SetImage(e.target.value)}
            placeholder="Image"
            type="text"
          />
        </div>
        <div className="inp">
          <input
          disabled={!image}
            value={price}
            onChange={(e) => SetPrice(e.target.value)}
            placeholder="Price $"
            type="number"
          />
        </div>
        <div className="inp">
        <input
        disabled={!price}
          value={desc}
          onChange={(e) => SetDesc(e.target.value)}
          placeholder="Description"
          type="text"
        />
        </div>
        <div className="inp">
        <input
        disabled={!desc}
          value={category}
          onChange={(e) => SetCategory(e.target.value)}
          placeholder="Category"
          type="text"
        />
        </div>
        <button disabled={!category} className="btn__1" onClick={CreateDevice}>Create</button>
      </div>
      <div className="Apport">
        {data.map((el) => {
          return (
            <div className="card__admin" key={el._id}>
              <img className="card__img" src={el.image} alt="" />
              <h1 className="card__h1">{el.name}</h1>
              <p className="card__p1">{el.price} $</p>
              <p className="card__p2">{el.desc}</p>
              <div className="btn__card">
              <button onClick={() => PatchElements(el._id)} className="btn_3">
                Update
              </button>
              <button onClick={() => AdminDelete(el._id)} className="btn_2">
                Delete
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
