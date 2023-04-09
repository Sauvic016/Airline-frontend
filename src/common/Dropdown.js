import { useContext } from "react";
import UserContext from "../context/userContext";

export default function Dropdown() {
  const { logout, currentUser } = useContext(UserContext);

  function handleLogout() {
    logout();
  }

  function handleProfile() {
    // Handle profile logic here
  }

  return (
    <div className="relative z-50">
      <div className="absolute z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg right-0">
        <div className="py-1">
          <button
            className="block w-full px-4 py-2 text-sm text-primarypurple font-semibold border border-spacing-1 hover:bg-gray-100 hover:text-gray-900"
            onClick={handleProfile}
          >
            {currentUser.username}
          </button>
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 hover:text-gray-900"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
