import { Link } from "react-router-dom";
import signUpImg from "./../../assets/images/sign-up.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const LogIn = () => {
  const { logInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleLogIn = (logInFormData) => {
    const { email, password } = logInFormData;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful !",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto my-12 flex justify-between items-end">
        <div className="pb-8 w-1/3 space-y-3">
          <form onSubmit={handleSubmit(handleLogIn)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-md border-2"
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
              />
              <div className="flex justify-end text-xs ">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white uppercase">
              Log In
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16"></div>
            <p className="px-3 text-sm ">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16"></div>
          </div>
          <div className="my-6 space-y-4">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex btn-sm items-center justify-center w-full p-4 space-x-4 border rounded-md border-gray-600 hover:border-blue-700 hover:shadow-md transition-all"
            >
              {/* logo */}
              <p>Login with Google</p>
            </button>
            <button
              aria-label="Login with GitHub"
              role="button"
              className="flex btn-sm items-center justify-center w-full p-4 space-x-4 border rounded-md border-gray-600 hover:border-blue-700 hover:shadow-md transition-all"
            >
              {/* logo */}
              <p>Login with GitHub</p>
            </button>
          </div>
          <p className="text-center">
            Dont have an account?
            <Link
              to="/register"
              className="btn-link font-bold hover:text-indigo-500 no-underline hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
        <div>
          <h1 className="text-3xl pl-28 font-semibold pb-4 pt-8">
            Login Your Account
          </h1>
          <img className="w-[600px]" src={signUpImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LogIn;
