import classes from "./AuthForm.module.css";
import React, { useRef, useState } from "react";
import Profile from "../Profile/Profile";
import { useContext } from "react";
import AuthContext from "../Store/Auth-Context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [userId, setuserId] = useState("");
  const authctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // const auth = getAuth;
    // signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQDeWQo3-1YgUVl6wrlcGdYhdXgIt2e78",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        header: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        authctx.login(responseData.idToken);
        setuserId(responseData.localId);
      });
  };

  return (
    <div>
      <section className={classes.auth}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <Profile id={userId} />
          <div className={classes.actions}>
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
