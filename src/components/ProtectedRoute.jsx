import { Navigate } from "react-router-dom";
import { getUser } from "../auth/auth";

export const ProtectedRoute = ({ role, children }) => {
  const user = getUser();

  if (!user) return <Navigate to="/" />;

  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
};
