import { createContext, useState, useEffect } from "react";
import { isAuthenticated, userlogin } from "../util/api";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});
UserContext.displayName = "UserContext";

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = async (inputs) => {
    const user = await userlogin(inputs);
    setCurrentUser(user);
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      let curruser = isAuthenticated();
      if (curruser === null) {
        localStorage.setItem("user", "");
        curruser = "";
      }
      setCurrentUser(curruser);
    };

    checkLoggedIn();
  }, []);

  return <UserContext.Provider value={{ currentUser, setCurrentUser, login }}>{children}</UserContext.Provider>;
};

export default UserContext;
