import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/auth/login", {
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate("/chat");
      }
    } catch (error) {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Chat</h1>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
