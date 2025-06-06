import { logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle, FaEnvelope, FaBell } from "react-icons/fa";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Datos de ejemplo para el usuario
  const userInfo = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    notifications: 5,
  };

  return (
    <>
      <style>{`
        .dashboard-container {
          min-height: 100vh;
          background: #fff;
          color: #001f3f;
          display: flex;
          flex-direction: column;
          padding: 20px 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 900px;
          margin: 0 auto;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #001f3f;
          padding-bottom: 10px;
          margin-bottom: 40px;
        }
        header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 1.2px;
        }
        button.logout-btn {
          background-color: #001f3f;
          color: white;
          border: none;
          padding: 10px 22px;
          font-size: 1rem;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 8px rgba(0,31,63,0.2);
        }
        button.logout-btn:hover {
          background-color: #00509e;
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0,80,158,0.4);
        }
        button.logout-btn svg {
          font-size: 1.2rem;
        }
        main {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .user-info {
          background-color: #001f3f;
          color: white;
          padding: 25px 30px;
          border-radius: 10px;
          box-shadow: 0 6px 15px rgba(0,31,63,0.3);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .user-icon {
          font-size: 4rem;
          opacity: 0.8;
        }
        .user-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .user-name {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .user-email {
          font-size: 1.2rem;
          opacity: 0.8;
        }
        .notifications {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 600;
        }
        .notifications svg {
          font-size: 1.5rem;
          color: #ffcc00;
        }
        footer {
          margin-top: auto;
          padding: 20px;
          text-align: center;
          font-size: 0.9rem;
          color: #666;
          border-top: 1px solid #ddd;
        }
      `}</style>

      <div className="dashboard-container">
        <header>
          <h1>Panel de Usuario</h1>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Cerrar sesión
          </button>
        </header>

        <main>
          <section className="user-info">
            <FaUserCircle className="user-icon" />
            <div className="user-details">
              <div className="user-name">{userInfo.name}</div>
              <div className="user-email">{userInfo.email}</div>
              <div className="notifications">
                <FaBell /> {userInfo.notifications} Notificaciones
              </div>
            </div>
          </section>
        </main>

        <footer>
          &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
        </footer>
      </div>
    </>
  );
};

export default UserDashboard;
