import { useContext, useState } from "react";
import Button from "../common/Button";
import UserContext from "../context/userContext";
// import { userlogin } from "../util/api";

const SignIn = ({ setOpen }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //call api
    await login(loginData);
    // console.log(user);
    setOpen(false);
  };

  return (
    <form className=" flex flex-col justify-center mt-6 p-4" onSubmit={handleSubmit}>
      <label className="flex">Email:</label>
      <input
        type="email"
        name="email"
        className="bg-slate-100 mb-3 rounded-md p-2 pl-3 focus-within:outline-none"
        placeholder="Enter your email"
        value={loginData.email}
        required
        onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })}
      />
      <label className="flex">Password :</label>
      <input
        type="password"
        name="password"
        className="bg-slate-100 mb-3 rounded-md p-2 pl-3 focus-within:outline-none"
        placeholder="Enter your password"
        value={loginData.password}
        required
        onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })}
      />
      <div className="flex justify-center">
        <Button title={"Sign in"} customStyle={"bg-primarypurple mt-4 py-3 px-6 shadow-xl text-slate-100"} />
      </div>
    </form>
  );
};
export default SignIn;
