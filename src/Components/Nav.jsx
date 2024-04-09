import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10 px-8 work-sans">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52 text-xl"
          >
            <NavLink to='/'>
              <a>Home</a>
            </NavLink>
            <NavLink to="/listed-books">
              <a>Listed Books</a>
            </NavLink>
            <NavLink to="/pages-to-read">
              <a>Pages to Read</a>
            </NavLink>
            <NavLink to="/authors">
              <a>Authors</a>
            </NavLink>
            <NavLink to="/about-us">
              <a>About Ua</a>
            </NavLink>
            <NavLink to="#">
              <a>Sign In</a>
            </NavLink>
            <NavLink to="#">
              <a>Sign Up</a>
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-3xl font-bold">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl items-center gap-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-2 p-2 border-green-500 rounded-xl text-green-500"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive
                ? "border-2 p-2 border-green-500 rounded-xl text-green-500"
                : ""
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages-to-read"
            className={({ isActive }) =>
              isActive
                ? "border-2 p-2 border-green-500 rounded-xl text-green-500"
                : ""
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/authors"
            className={({ isActive }) =>
              isActive
                ? "border-2 p-2 border-green-500 rounded-xl text-green-500"
                : ""
            }
          >
           Authors
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "border-2 p-2 border-green-500 rounded-xl text-green-500"
                : ""
            }
          >
           About Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end font-semibold hidden md:flex ">
        <a className="btn bg-green-500 mr-2 text-white">Sign In</a>
        <a className="btn bg-sky-400 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
