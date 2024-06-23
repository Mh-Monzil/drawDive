import { useForm } from "react-hook-form";
import UseAuth from "../hooks/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff, IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { MdDriveFileRenameOutline, MdInsertPhoto } from "react-icons/md";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();
//   const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, displayName, image } = data;
    console.log(email, password, displayName, image);
    if (password.length < 6) {
      toast.error("password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("password must have one uppercase");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("password must have one lowercase");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(displayName, image).then(() => {
          navigate("/");
          return toast.success("User created successfully");
        });
      })
      .catch((error) => {
        return toast.error(
          `${error.message
            .replace("Firebase: Error (auth/", " ")
            .replace(/\)/, "")
            .replace(/-/g, " ")}`
        );
      });
  };

  return (
    <div>
      <div className="p-4">
        <form
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 lg:w-2/5 my-12 h-full mx-auto p-6 md:p-10 bg-white backdrop-blur-sm rounded-lg  shadow-md border-t border-red-300 shadow-red-100"
        >
          <div className="flex justify-center mb-2">
            <span className="text-center text-3xl font-bold border-b-[3px] border-b-[#E76F51] px-4">
              Create your account
            </span>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="font-semibold">Name</span>
            </label>
            <div className="relative">
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-semibold w-full px-10"
                {...register("displayName", { required: true })}
              />
              <MdDriveFileRenameOutline className="absolute bottom-4 left-4" />
            </div>
            {errors.displayName && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Image URL</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter your image URL"
                className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-semibold w-full px-10"
                {...register("image")}
              />
              <MdInsertPhoto className="absolute bottom-4 left-4" />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Email</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-semibold w-full px-10"
                {...register("email", { required: true })}
              />
              <IoMail className="absolute bottom-4 left-4" />
            </div>
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-semibold w-full px-10"
                {...register("password", { required: true })}
              />
              <FaLock className="absolute bottom-4 left-4 disabled" />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-xl absolute right-4 bottom-3.5 cursor-pointer"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div className="flex items-center justify-between mt-3 font-medium">
            <p className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 cursor-pointer" />
              Remember me
            </p>
            <p>Forgot Password?</p>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-[#E76F51] text-white font-bold text-xl hover:bg-[#e25f3f] border border-[@#E76F51] hover:border-[#E76F51">
              Register
            </button>
          </div>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-2 m-2 font-semibold">
            <p>Already have an account ?</p>
            <Link
              to="/login"
              className=" border-purple-700 text-[#E76F51] font-bold"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;