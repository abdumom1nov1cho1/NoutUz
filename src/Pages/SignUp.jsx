import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const SignUp = () => {
  const {
    signUp,
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
  } = useContext(Context);

  return (
    <div>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={(event) => signUp(event)}>
          Submit
        </button>
      </form>
      <h1>
        Agar avval ham SignUp qilgan bo'lsangiz{" "}
        <Link to="/sign-in">bu yerga</Link> o'ting
      </h1>
    </div>
  );
};

export default SignUp;
