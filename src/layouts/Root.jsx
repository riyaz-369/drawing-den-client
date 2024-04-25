import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
