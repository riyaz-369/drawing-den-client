import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
      </div>
    );
  }

  return <Navigate state={location.pathname} to="/logIn" />;
};

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
