import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

const SignIn = () => {
  const { signIn, loginEmail, setLoginEmail, loginPass, setLoginPass } =
    useContext(Context);

  return (
    <div>
      <form>
        <input
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          type="password"
          placeholder="password"
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
        />
        <button onClick={signIn}>Submit</button>
      </form>
      <h1>
        Agar avval SignUp qilmagan bo'lsangiz{" "}
        <Link to="/sign-up">bu yerga</Link> o'ting
      </h1>
    </div>
  );
};

export default SignIn;
