import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { userId, login } = useAuth();

  useEffect(() => {
    if (userId) {
      navigate('/test');
    }
  }, [userId, navigate]);

  const handleLogin = async (username: string, password: string) => {
    setError(null);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, null, {
        params: { username, password },
      });
      const id = response.data.id;
      login(id);
      navigate("/test");
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return(
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 320,
        margin: "60px auto",
        padding: 24,
        border: "1px solid #ccc",
        borderRadius: 8,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24, fontSize: '35px', color: 'black' }}>Login</h2>

      <label htmlFor="username" style={{ marginBottom: 8, fontWeight: "bold" }}>
        Username
      </label>
      <input
        id="username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: 8,
          marginBottom: 16,
          borderRadius: 4,
          border: "1px solid black",
          fontSize: 16,
          backgroundColor: 'white',
          color: 'black',
        }}
      />

      <label htmlFor="password" style={{ marginBottom: 8, fontWeight: "bold" }}>
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: 8,
          marginBottom: 16,
          borderRadius: 4,
          border: "1px solid black",
          fontSize: 16,
          backgroundColor: 'white',
          color: 'black',
        }}
      />

      {error && (
        <div
          style={{
            color: "red",
            marginBottom: 16,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {error}
        </div>
      )}

      <button
        onClick={() => handleLogin(username, password)}
        style={{
          padding: 10,
          fontSize: 16,
          fontWeight: "bold",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          transition: "background-color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        disabled={!username || !password}
      >
        Log In
      </button>
    </main>
  );
}

export default Login;
