import { Link } from "react-router-dom";
import registerImg from "./../../assets/images/register.svg";
const Register = () => {
  return (
    <div>
      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto my-12 flex justify-between items-end">
          <div className="py-8 w-1/3 space-y-3">
            <h1 className="text-2xl font-semibold mb-6">
              Register Your Account
            </h1>
            <form className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-md border-2"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border-2"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block">
                  Photo URL
                </label>
                <input
                  type="url"
                  placeholder="https://image/1s8vQ2D/123.jpg"
                  className="w-full px-4 py-3 rounded-md border-2"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-2"
                />
              </div>
              <button className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white">
                Register
              </button>
            </form>
            <p className="text-center">
              Already have an account?
              <Link to="/logIn" className="btn-link">
                Log In
              </Link>
            </p>
          </div>
          <div className="">
            <img src={registerImg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
