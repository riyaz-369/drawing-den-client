import { Link } from "react-router-dom";
import registerImg from "./../../assets/images/register.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (formData) => {
    const { fullName, email, photoUrl, password } = formData;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
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
              </div>
              <div className="space-y-1 text-sm">
                <label className="block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border-2"
                  {...register("email", { required: true })}
                />
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
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-2"
                  {...register("password", { required: true })}
                />
              </div>
              <button className="block w-full p-3 text-center rounded-sm bg-blue-700 text-white uppercase">
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
    </div>
  );
};

export default Register;
