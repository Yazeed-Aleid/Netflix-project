import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt=""
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In </button>
          <span>
            New to Netflix?<b>Sign up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
