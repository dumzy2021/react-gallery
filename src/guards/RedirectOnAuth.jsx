import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";

export const RedirectOnAuth = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/dashboard" replace={true} /> : <Outlet />;
};
