import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import e404 from "./../../assets/images/404.svg";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-8 max-w-2xl flex flex-col gap-6">
        <img src={e404} alt="" />
        <Link to="/" className="my-primary-btn">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
