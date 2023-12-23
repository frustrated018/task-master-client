import backgroundImage from "../../assets/backgound.svg";

const Login = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg-cover bg-no-repeat min-h-screen flex items-center justify-center"
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          border: "3px solid rgba(255, 255, 255, .7)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        className="bg-white p-8 w-[90%] lg:w-[40%] lg:h-[60%] rounded-lg shadow-md"
      >
        <h2 className="text-5xl text-center font-bold mb-4 text-white">
          Login
        </h2>
        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full outline-none rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-base font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full outline-none rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black text-xl font-bold p-2 rounded-md hover:bg-[#3DDEBF]"
          >
            Log in
          </button>
        </form>
        <div className="mt-4 text-[18px] text-black">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-black underline hover:text-[#3DDEBF]">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
