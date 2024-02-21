import { LuSearch } from "react-icons/lu";
import { MdOutlineInfo } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { LuUser2, LuLogOut } from "react-icons/lu";

const Navigation = () => {
  return (
    <nav className="flex flex-col justify-between">
      <div className="grow flex flex-col gap-14">
        <div className="flex justify-between">
          <p className="text-3xl font-semibold">Leadify</p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="p-2 rounded-md flex items-center gap-2 hover:backdrop-brightness-150">
            <LuSearch />
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="p-2 rounded-md flex items-center gap-2 hover:backdrop-brightness-150">
            <MdOutlineInfo />
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="p-2 rounded-md flex items-center gap-2 hover:backdrop-brightness-150">
            <IoSettingsOutline />
            <NavLink to="/settings">Settings</NavLink>
          </li>
          <li className="p-2 rounded-md flex items-center gap-2 hover:backdrop-brightness-150">
            <PiSignInBold />
            <button>Sign In</button>
          </li>
        </ul>
        <button className="cursor-pointer p-2 bg-indigo-600 rounded-full">Sign up</button>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-4">
          <span className="p-3 bg-indigo-600 rounded-full">
            <LuUser2 />
          </span>
          <div className="text-sm">
            <p>User Name</p>
            <p>someemail@gmail.com</p>
          </div>
        </div>
        <span className="self-start">
          <LuLogOut />
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
