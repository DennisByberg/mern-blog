import { Link } from "react-router-dom";
import DarkModeButton from "../Buttons/DarkModeButton";
import HamburgerButton from "../Buttons/HamburgerButton";
import LoginButton from "../Buttons/LoginButton";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      {/* NAVBAR START */}
      <div className="navbar-start">
        <HamburgerButton />
        <Link to={"/"} className="btn btn-ghost text-xl">
          MERN BLOG
        </Link>
      </div>
      {/* NAVBAR CENTER */}
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      {/* NAVBAR END */}
      <div className="navbar-end">
        <DarkModeButton />
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
