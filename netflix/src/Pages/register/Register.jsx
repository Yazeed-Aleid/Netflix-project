import { useState, useRef } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passWordRef = useRef();
  const handelStart = () => {
    setEmail(emailRef.current.value);
  };
  const handelFinish = () => {
    setPassword(passWordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt=""
            className="logo"
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unliimeited movies,TV shows, and more.</h1>
        <h2>Whach anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter Your Email yo create or restart your membershep.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handelStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Password" ref={passWordRef} />
            <button className="registerButton" onClick={handelFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
