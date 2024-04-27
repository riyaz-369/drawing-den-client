import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
      </div>
    );
  }

  return <Navigate to="/logIn" />;
};

export default PrivetRoute;
