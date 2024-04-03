import { Navigate, Outlet } from "react-router-dom";
import { getIdToken } from "../utils/tokenUtils";

const ProtectedRoutes = () => {
  // const idToken = getIdToken();
  const idToken = true;

  if (!idToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
