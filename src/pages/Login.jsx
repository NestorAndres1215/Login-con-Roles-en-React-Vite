import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setUser } from "../auth/auth";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = login(username, password);
    if (user) {
      setUser(user);
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <>
      <style>{`
        body, html {
          margin: 0; padding: 0; height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #fff;
          color: #001f3f; /* azul marino */
        }
        .login-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          padding: 20px;
        }
        .login-box {
          width: 350px;
          padding: 40px;
          border: 2px solid #001f3f;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 31, 63, 0.2);
          background: white;
          transition: box-shadow 0.3s ease;
        }
        .login-box:hover {
          box-shadow: 0 0 30px rgba(0, 31, 63, 0.4);
        }
        .login-box h2 {
          text-align: center;
          margin-bottom: 30px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-group {
          position: relative;
          display: flex;
          align-items: center;
          border: 2px solid #001f3f;
          border-radius: 5px;
          padding: 10px 15px;
          transition: border-color 0.3s ease;
        }
        .input-group:focus-within {
          border-color: #00509e;
          box-shadow: 0 0 8px #00509e;
        }
        .input-group svg {
          color: #001f3f;
          margin-right: 10px;
          min-width: 20px;
          font-size: 18px;
        }
        input {
          border: none;
          outline: none;
          font-size: 16px;
          flex: 1;
          color: #001f3f;
          background: transparent;
          font-weight: 600;
        }
        input::placeholder {
          color: #3b4a6b;
          font-weight: 400;
        }
        button {
          background-color: #001f3f;
          color: white;
          font-weight: 700;
          border: none;
          padding: 12px 0;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        button:hover {
          background-color: #00509e;
          transform: scale(1.05);
        }
        p.error {
          color: #ff3b3b;
          margin-top: 15px;
          text-align: center;
          font-weight: 600;
          animation: shake 0.3s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        @media (max-width: 400px) {
          .login-box {
            width: 90%;
            padding: 30px 20px;
          }
        }
      `}</style>
      <div className="login-container">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <FaUser />
              <input
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
            <div className="input-group">
              <FaLock />
              <input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
