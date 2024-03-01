import {
  FaHome,
  FaBell,
  FaUserAlt,
  FaSignOutAlt,
  FaFeatherAlt,
} from "react-icons/fa";
import { IoPawOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-pink-200 h-[10%]">
      <div className="flex justify-center items-center h-full w-full space-x-4">
        <NavItem />
        <IoPawOutline />
        <FaHome />
        <FaBell />
        <FaUserAlt />
        <FaSignOutAlt />
        <FaFeatherAlt />
      </div>
    </nav>
  );
};

export default Nav;
