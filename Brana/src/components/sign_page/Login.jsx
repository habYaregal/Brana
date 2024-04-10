import { useState } from "react";
import "./Login.css";
import GoogleIcon from "@mui/icons-material/Google";
function Login() {
  const [active, setActive] = useState(false);
  return (
    <div className="whole">
      <div class={active ? "container active" : "container"} id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div class="social-icons ">
              <a href="#" class="icon">
                <GoogleIcon />
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1 >Sign In</h1>
            <div className="social-icons">
              <a href="#" class="icon">
                <GoogleIcon />
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
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
                Register with your personal details to use all of site features
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
