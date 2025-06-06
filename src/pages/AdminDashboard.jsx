import { logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUsers, FaTasks, FaChartBar } from "react-icons/fa";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Datos de ejemplo para las estadísticas
  const stats = [
    { id: 1, icon: <FaUsers />, label: "Usuarios Registrados", value: 1200 },
    { id: 2, icon: <FaTasks />, label: "Tareas Pendientes", value: 34 },
    { id: 3, icon: <FaChartBar />, label: "Ventas del Mes", value: "$8,540" },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .dashboard-container {
          min-height: 100vh;
          background: #fff;
          color: #001f3f;
          display: flex;
          flex-direction: column;
          padding: 20px 40px;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          border-bottom: 2px solid #001f3f;
          padding-bottom: 10px;
        }
        header h1 {
          font-weight: 700;
          font-size: 2.8rem;
          letter-spacing: 1.5px;
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
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .welcome-section {
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .stats-grid {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .stat-card {
          background-color: #001f3f;
          color: white;
          flex: 1 1 200px;
          padding: 25px 30px;
          border-radius: 10px;
          box-shadow: 0 6px 15px rgba(0,31,63,0.3);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: background-color 0.3s ease;
          cursor: default;
        }
        .stat-card:hover {
          background-color: #00509e;
          box-shadow: 0 8px 20px rgba(0,80,158,0.4);
        }
        .stat-icon {
          font-size: 3rem;
          opacity: 0.8;
        }
        .stat-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .stat-label {
          font-size: 1rem;
          opacity: 0.8;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: 700;
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
          <h1>Panel de Administrador</h1>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Cerrar sesión
          </button>
        </header>

        <main>
          <section className="welcome-section">
            ¡Bienvenido, Admin! Aquí tienes un resumen rápido.
          </section>

          <section className="stats-grid">
            {stats.map(({ id, icon, label, value }) => (
              <div key={id} className="stat-card">
                <div className="stat-icon">{icon}</div>
                <div className="stat-info">
                  <div className="stat-label">{label}</div>
                  <div className="stat-value">{value}</div>
                </div>
              </div>
            ))}
          </section>
        </main>

        <footer>
          &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
        </footer>
      </div>
    </>
  );
};

export default AdminDashboard;
