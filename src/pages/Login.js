import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const { setToken } = useContext(ShopContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCp3CtTZKkTpTX35hg6q4KXdL6fJXTDCgk", {
        method: "POST",
        body: JSON.stringify({ 
            email : email,
          password: password,
          returnSecureToken: true,
         }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Authentication failed!");
      }

      const data = await response.json();
      setToken(data.token);
      localStorage.setItem("authToken", data.token);
     navigate("/shop");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" required ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password" required ref={passwordInputRef} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
