import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import loginImage from "../../public/images/Working.jpeg"; // Import the login image

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/account");
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-20 flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Login to Your Account
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 ">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-md font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="mt-1 block w-full h-14 rounded-md border-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border-1 border-transparent bg-indigo-600 py-3 px-4 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-md font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <FaGoogle className="mr-2" /> Login with Google
              </button>
            </div>
            <div className="mt-2">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-md font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <FaFacebook className="mr-2" /> Login with Facebook
              </button>
            </div>
            <div className="mt-4 text-center mb-5">
              <p className="text-md text-gray-600">
                Do not have an account?{" "}
                <a
                  href="/account"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img
              src={loginImage}
              alt="Login"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
