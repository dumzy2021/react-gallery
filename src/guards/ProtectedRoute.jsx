import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";

export const ProtectedRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/auth" replace={true} />;
};
