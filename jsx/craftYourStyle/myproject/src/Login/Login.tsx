import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

export const Login = () => {
  // 🧠 1. Estados arriba
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

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
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Error connecting to the server.");
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

        {message && <p style={{ marginTop: "10px", color: "grey" }}>{message}</p>}

        <div className="footerLogin">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="linkLogin">Sign up</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
