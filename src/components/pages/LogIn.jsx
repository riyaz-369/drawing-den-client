import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpImg from "./../../assets/images/sign-up.svg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  const { logInUser, logInWithGoogle, gitHubLogIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (logInFormData) => {
    const { email, password } = logInFormData;

    if (password.length < 6) {
      toast.error("Length must be at least 6 character.");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      toast.error("Password must have an uppercase letter");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      toast.error("Password must have an lowercase letter");
      return;
    } else {
      logInUser(email, password)
        .then(() => {
          Swal.fire({
            title: "Login Successful !",
            icon: "success",
            confirmButtonText: "Okay",
          });
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 3500);
        })
        .catch((error) => {
          const errorMsg = error.code.slice(5, 12);
          const err = errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
          toast.error(`${err} account or password`);
        });
      return;
    }
  };

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Login Successful !",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 3500);
      })
      .catch(() => {
        Swal.fire({
          title: "Something went wrong !",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  const handleGithubLogin = () => {
    gitHubLogIn()
      .then(() => {
        Swal.fire({
          title: "Login Successful !",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 3500);
      })
      .catch(() => {
        Swal.fire({
          title: "Something went wrong !",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto my-12 lg:flex justify-between items-end">
        <div className="p-4 lg:p-0 lg:pb-8 w-full lg:w-1/3 space-y-3">
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-2"
                {...register("password", { required: true })}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="text-lg absolute -translate-y-9 translate-x-64 md:translate-x-[400px]"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
              <div className="flex justify-end text-xs ">
                <a>Forgot Password?</a>
              </div>
            </div>
            <button className="form-btn uppercase">Log In</button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16"></div>
            <p className="px-3 text-sm ">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16"></div>
          </div>
          <div className="my-6 space-y-4">
            <button
              onClick={handleGoogleLogIn}
              aria-label="Login with Google"
              type="button"
              className="flex btn-sm py-6 items-center justify-center w-full p-4 space-x-4 border rounded-md border-gray-600 hover:border-violet-600 hover:shadow-md transition-all"
            >
              <span className="text-3xl">
                <FcGoogle />
              </span>
              <p>Login with Google</p>
            </button>
            <button
              onClick={handleGithubLogin}
              aria-label="Login with GitHub"
              role="button"
              className="flex btn-sm py-6 items-center justify-center w-full p-4 space-x-4 border rounded-md border-gray-600 hover:border-violet-600 hover:shadow-md transition-all"
            >
              <span className="text-3xl">
                <FaGithub />
              </span>
              <p>Login with GitHub</p>
            </button>
          </div>
          <p className="text-center">
            Dont have an account?
            <Link
              to="/register"
              className="btn-link text-violet-500 font-bold hover:text-indigo-500 no-underline hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <h1 className="text-3xl pl-28 font-semibold pb-4 pt-8">
            Login Your Account
          </h1>
          <img className="w-[600px]" src={signUpImg} alt="" />
        </div>
      </div>
      <ToastContainer position="top-center" />
    </section>
  );
};

export default LogIn;
