import { useState } from "react";
import { AiFillWarning as WarningIcon } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

interface IFormData {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("All field are required");
    }

    try {
      setLoading(true);
      setErrorMessage("");
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }

      setLoading(false);

      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage("An error ocurred");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full  min-h-scree px-5 py-5">
      <div className="xl:max-w-7xl  drop-shadow-xl w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-2xl font-semibold">
            MERN BLOG
          </h1>
          <h1 className="text-center text-1xl sm:text-1xl font-semibold">
            Sign up with your email and password or with Google
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5"
            >
              <input
                type="text"
                id="username"
                placeholder="Enter Your Username"
                className="input input-bordered input-primary w-full"
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-primary w-full"
                onChange={handleChange}
              />
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                className="input input-bordered input-primary w-full"
                onChange={handleChange}
              />
              {errorMessage && (
                <p className="text-red-500 flex items-center gap-1">
                  {errorMessage} <WarningIcon />
                </p>
              )}
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button
                  disabled={loading}
                  className="btn btn-active btn-primary btn-block "
                >
                  Sign Up
                  {loading && (
                    <span className="loading loading-spinner loading-sm"></span>
                  )}
                </button>
              </div>
              <div>
                Already have an account?{" "}
                <Link className="underline" to={"/login"}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
