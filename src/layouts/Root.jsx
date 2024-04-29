import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="min-h-[calc(100vh-117px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
