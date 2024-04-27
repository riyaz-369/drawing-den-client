import { Link } from "react-router-dom";
import registerImg from "./../../assets/images/register.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (formData) => {
    const { fullName, email, photoUrl, password } = formData;

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
      createUser(email, password)
        .then((result) => {
          console.log(result.user);

          userProfile(fullName, photoUrl)
            .then(() => {
              // console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });

          fetch(" http://localhost:5000/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Registration Successful !",
                  icon: "success",
                  confirmButtonText: "Okay",
                });
              }
            });
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  return (
    <div>
      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto my-12 flex justify-between items-end">
          <div className="py-8 w-1/3 space-y-3">
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-md border-2"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-sm text-red-500">Name is required</span>
                )}
              </div>
              <div className="space-y-1 text-sm">
                <label className="block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border-2"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Email address is required
                  </span>
                )}
              </div>
              <div className="space-y-1 text-sm">
                <label className="block">Photo URL</label>
                <input
                  type="url"
                  placeholder="https://image/1s8vQ2D/123.jpg"
                  className="w-full px-4 py-3 rounded-md border-2"
                  {...register("photoUrl")}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block ">Password</label>
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
                {errors.password && (
                  <span className="text-sm text-red-500">
                    Password is required
                  </span>
                )}
              </div>
              <button className="btn w-full text-base rounded-md bg-blue-700 text-white uppercase">
                Register
              </button>
            </form>
            <p className="text-center">
              Already have an account?
              <Link
                to="/logIn"
                className="btn-link font-bold hover:text-indigo-500 no-underline hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-6">
              Register Your Account
            </h1>
            <img className="w-[600px]" src={registerImg} />
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Register;
