import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            <Link to="/">Insightful Bytes</Link>
          </span>
        </p>
        {path === "/" && (
          <div className="flex justify-center items-center space-x-2 border-2 border-white rounded-md p-2 bg-gray-200">
            <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} className="cursor-pointer">
              <BsSearch />
            </p>
            <input
              onChange={(e) => setPrompt(e.target.value)}
              className="outline-none px-3 flex-1 bg-gray-200"
              placeholder="Search a post"
              type="text"
            />
          </div>
        )}
        <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
          {user ? (
            <h3 className="w-full px-4 py-2 text-lg font-bold text-black bg-white rounded-lg">
              <Link to="/write">Write</Link>
            </h3>
          ) : (
            <h3 className="w-full px-4 py-2 text-lg font-bold text-black bg-white rounded-lg">
              <Link to="/login">Login</Link>
            </h3>
          )}
          {user ? (
            <div onClick={showMenu}>
              <p className="cursor-pointer relative text-white"><FaBars /></p>
              {menu && <Menu />}
            </div>
          ) : (
            <h3 className="w-full px-4 py-2 text-lg font-bold text-black bg-white rounded-lg">
              <Link to="/register">Register</Link>
            </h3>
          )}
        </div>
        <div onClick={showMenu} className="md:hidden text-lg">
          <p className="cursor-pointer relative"><FaBars /></p>
          {menu && <Menu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
