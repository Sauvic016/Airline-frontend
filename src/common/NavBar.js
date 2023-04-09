import { useState, useContext } from "react";
import SignInSignUp from "../components/SignIn&SignUpModal";
import UserContext from "../context/userContext";
import Dropdown from "./Dropdown";

const NavBar = ({ children }) => {
  const [show, setOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const { currentUser } = useContext(UserContext);

  const handlelogout = () => {
    if (currentUser) {
      setIsDropdown((prev) => !prev);
    } else {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div className="w-full top-0 px-6 py-8 bg-[#605DEC] h-56 rounded-b-2xl sm:py-10 sm:h-80">
      <div className="flex justify-between items-center">
        <h1 className="px-5 text-2xl font-semibold break-words text-slate-50 ">Search Flights</h1>
        <div className="text-xl p-2 bg-white rounded-full cursor-pointer" onClick={handlelogout}>
          {currentUser ? "🤗" : "🔒"}
          {isDropdown && <Dropdown isDropdown={isDropdown} setIsDropdown={setIsDropdown} />}
        </div>
      </div>
      {/* <SearchPage /> */}
      {/* <Flights /> */}
      {children}
      {show && <SignInSignUp show={show} setOpen={setOpen} />}
    </div>
  );
};

export default NavBar;
