import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:10101/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message || "Usuario registrado");

      if (response.ok) {
        setFormData({ name: "", email: "", password: "" });
      }
    } catch (error) {
      console.error("Error al registrarse:", error);
      setMessage("Error al conectar con el servidor.");
    }
  };

  return (
    <main className="mainRegister">
      <div className="contRegister">
        <h1>Register</h1>
        <p className="subtitle">Create a free account with your email.</p>

        <form className="contInputs" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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

          <button type="submit">Sign up</button>
        </form>

        {message && (
          <p style={{ color: "grey", marginTop: "1rem" }}>{message}</p>
        )}

        <div className="footerRegister">
          <p>
            Have an account? <Link to="/login">Login in</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
