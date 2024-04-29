import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="p-2 lg:p-0 min-h-[calc(100vh-409px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
