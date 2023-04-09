import { useState, useContext, useRef, useEffect } from "react";
import SignInSignUp from "../components/SignIn&SignUpModal";
import UserContext from "../context/userContext";
import Dropdown from "./Dropdown";

const NavBar = ({ children }) => {
  const [show, setOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const { currentUser } = useContext(UserContext);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (iconRef.current && !iconRef.current.contains(e.target)) {
        setIsDropdown(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [setIsDropdown]);

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
        <h1 className="px-5 text-4xl font-semibold break-words text-slate-50 ">EzFlights 🛫</h1>
        <div className="text-xl p-2 bg-white rounded-full cursor-pointer" onClick={handlelogout} ref={iconRef}>
          {currentUser ? "🤗" : "🔒"}
          {isDropdown && <Dropdown />}
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
