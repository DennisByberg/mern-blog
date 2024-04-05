import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={ref}>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={() => setIsOpen(!isOpen)}
      >
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
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={"/"} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/dashboard"} onClick={closeMenu}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/projects"} onClick={closeMenu}>
              Projects
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerButton;
