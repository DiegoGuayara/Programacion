import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { Google_Icon } from "../images/svg/Login/Google-Icon";
import { Facebook_Icon } from "../images/svg/Login/Facebook-Icon";
import { Github_Icon } from "../images/svg/Login/Github-Icon";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  googleProvider,
  githubProvider,
  facebookProvider,
} from "./firebaseConfig";

export const Login = () => {
  // 🧠 1. Estados arriba
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 🛠️ 2. Funciones debajo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:10101/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message || "Login successful");

      if (response.ok) {
        setFormData({ email: "", password: "" });
        // redirección si quieres

        setTimeout(() => {
          navigate("/Home");
        }, 3000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Error connecting to the server.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Usuario de Google:", user);
      setMessage(`Login successful with Google. Welcome ${user.displayName}!`);
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    } catch (error) {
      console.error("Google login error:", error);
      setMessage("Error logging in with Google.");
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;

      console.log("Usuario de Github:", user);
      setMessage(`Login successful with Github. Welcome ${user.displayName}!`);
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    } catch (error) {
      console.error("Github login error:", error);
      setMessage("Error logging in with Github.");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      console.log("Usuario de Facebook:", user);
      setMessage(
        `Login successful with Facebook. Welcome ${user.displayName}!`
      );
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    } catch (error) {
      console.error("Facebook login error:", error);
      setMessage("Error logging in with Facebook.");
    }
  };

  // 🧱 3. JSX al final
  return (
    <main className="mainLogin">
      <div className="contLogin">
        <h1>Login</h1>
        <p className="subtitleLogin">Login with your email and password.</p>

        <form className="contInputsLogin" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "10px",
              color: "grey",
              padding: 0,
              marginBottom: 0,
              fontSize: "10px",
            }}
          >
            {message}
          </p>
        )}

        <div className="contLoginWith">
          <p>Or login with</p>
          <div className="contIconsLogin">
            <button className="iconLogin" onClick={handleGoogleLogin}>
              <Google_Icon />
            </button>
            <button className="iconLogin" onClick={handleFacebookLogin}>
              <Facebook_Icon />
            </button>
            <button className="iconLogin" onClick={handleGithubLogin}>
              <Github_Icon />
            </button>
          </div>
        </div>

        <div className="footerLogin">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="linkLogin">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
