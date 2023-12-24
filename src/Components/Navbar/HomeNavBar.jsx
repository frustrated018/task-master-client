import { Link } from "react-router-dom";

const navlinks = (
  <>
    <li>
      <a className="text-white">Home</a>
    </li>
    <li>
      <a className="text-white">Tasks</a>
    </li>
    <li>
      <a className="text-white">Completed Task</a>
    </li>
  </>
);

const HomeNavBar = () => {
  return (
    <>
      <div className="navbar bg-opacity-90 backdrop-blur-md bg-gray-900 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Task Master</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        {/* Login Button and User Profile */}
        <div className="navbar-end gap-2">
          <Link to={"/login"}>
            <button className="btn btn-md bg-blue-200">Login</button>
          </Link>
          <div className="avatar">
            <div className="w-10 rounded">
              <img
                src="https://i.ibb.co/Yyn8B5K/512x512.png"
                alt="User Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;
