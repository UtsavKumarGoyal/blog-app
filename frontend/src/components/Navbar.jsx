import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar flex items-center justify-between h-[100px] px-[100px] bg-[#0c0c0c] overflow-hidden">
      <div className="logo">
        <Link to="/">
          <img className="w-[240px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links flex items-center gap-[20px]">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>
        <Link to="/blogs" className="navLink">
          Blogs
        </Link>
        {isLoggedIn && (
          <Link to="/uploadBlog" className="navLink">
            UploadBlogs
          </Link>
        )}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btnNormal !bg-grey-500 transition-all hover:!bg-grey-500"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btnNormal !bg-grey-500 transition-all hover:!bg-grey-500"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
