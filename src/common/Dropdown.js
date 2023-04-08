import { useContext, useEffect, useRef } from "react";
import UserContext from "../context/userContext";

export default function Dropdown({ isDropdown, setIsDropdown }) {
  const { logout } = useContext(UserContext);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsDropdown]);

  function handleLogout() {
    logout();
  }

  function handleProfile() {
    // Handle profile logic here
  }

  return (
    <div ref={dropdownRef} className="relative z-50">
      {isDropdown && (
        <div className="absolute z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg right-0">
          <div className="py-1">
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={handleProfile}
            >
              Profile
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
