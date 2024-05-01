import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleIcon from "@mui/icons-material/Google";
function Login() {
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [logErrors, setLogErrors] = useState("");
  const navigate = useNavigate();
  function signupSubmitHandler(event) {
    let userData = {
      name: name,
      email: email,
      password: password,
    };
    event.preventDefault();
    if (
      userData.name.trim() === "" ||
      userData.email.trim() === "" ||
      userData.password.trim() === ""
    ) {
      setErrors("Please fill in all required fields!");
    }else if(userData.password.trim() != confirmPassword.trim()){
      setErrors("Passwords don't match!");
    } else {
      fetch("http://localhost:3000/register/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.text())
        .then((data) => setErrors(data));
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      if (!errors) {
        navigate("/blog/");
      }
      setErrors("");
    }
  }
  function signinSubmitHandler(event){
    let userData = {
      email: logEmail,
      password: logPassword,
    };
    event.preventDefault();
    if (
      userData.email.trim() === "" ||
      userData.password.trim() === ""
    ) {
      setLogErrors("Please fill in all required fields!");
    }else {
      fetch("http://localhost:3000/login/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.text())
        .then((data) => setLogErrors(data));
      setLogEmail("");
      setLogPassword("");
      if (!logErrors) {
        navigate("/blog/");
      }
      setLogErrors("");
    }
  }
  return (
    <div className="whole">
      <div class={active ? "container active" : "container"} id="container">
        <div class="form-container sign-up">
          <form onSubmit={signupSubmitHandler}>
            <h1>Create Account</h1>
            <div class="social-icons ">
              <a href="#" class="icon">
                <GoogleIcon />
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <span className="error" value={errors}>
              {errors}
            </span>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={signinSubmitHandler}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" class="icon">
                <GoogleIcon />
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" value={logEmail} onChange={(e) => setLogEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={logPassword} onChange={(e) => setLogPassword(e.target.value)}></input>
            <span className="error" value={logErrors}>
              {logErrors}
            </span>
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to get into brana</p>
              <button
                class=""
                id="login"
                onClick={() => {
                  setActive(false);
                }}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to start your reading
                journey
              </p>
              <button
                className=""
                id="register"
                onClick={() => {
                  setActive(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
