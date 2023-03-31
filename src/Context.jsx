import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [mura, setMura] = useState("");
  const [loginEmail, setLoginEmail] = useState();
  const [loginPass, setLoginPass] = useState();
  const api = "https://razer-api.onrender.com/devices/";
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchText = (event) => {
    setMura(event.target.value);
  };

  const dataSearch = data.filter((item) => {
    return item.name.toLowerCase().includes(mura.toLowerCase());
  });

  //register uchun ya'ni Sign Up
  const signUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/sign-up", {
        email: email,
        username: userName,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          navigate("/sign-in");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //login uchun ya'ni Sign In
  const signIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/sign-in", {
        email: loginEmail,
        password: loginPass,
      })
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          localStorage.setItem("access", response.data.token);
          navigate("/userAdmin");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
    <Context.Provider
      value={{
        signIn,
        loginEmail,
        setLoginEmail,
        loginPass,
        setLoginPass,
        signUp,
        email,
        setEmail,
        userName,
        setUserName,  
        password,
        setPassword,
        data,
        setData,
        dataSearch,
        category,
        setCategory,
        data,
        searchText,
        mura,
      }}
    >
      {children}
    </Context.Provider>
    </>
  );
};

export { Context, ContextProvider };
