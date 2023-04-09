import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../common/Button";

import { userRegister } from "../util/api";
import validateEmail from "../util/validation";

const SignUP = ({ setSignInForm }) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!validateEmail(registerData.email)) {
        throw new Error("Please enter a valid email"); // check if email is valid
      }
      const user = await userRegister(registerData);
      if (!user.success) {
        throw new Error(user.message);
      }
      toast.success("🦄 Please verify your email address !", {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setSignInForm(true);
    } catch (error) {
      if (error.message === "Not able to validate the data sent in the request") {
        error.message = "Please enter a valid email";
      }
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <form className=" flex flex-col justify-center mt-6 p-4" onSubmit={handleSubmit}>
        <label className="flex">Username:</label>
        <input
          type="text"
          name="name"
          className="bg-slate-100 mb-3 rounded-md p-2 pl-3 focus-within:outline-none"
          required
          placeholder="Enter your name"
          value={registerData.name}
          onChange={(e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value })}
        />

        <label className="flex">Email:</label>
        <input
          type="email"
          name="email"
          className="bg-slate-100 mb-3 rounded-md p-2 pl-3 focus-within:outline-none"
          placeholder="Enter your email"
          value={registerData.email}
          required
          onChange={(e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value })}
        />
        <label className="flex">Password :</label>
        <input
          type="password"
          name="password"
          className="bg-slate-100 mb-3 rounded-md p-2 pl-3 focus-within:outline-none"
          placeholder="Enter your password"
          value={registerData.password}
          required
          minLength={3}
          onChange={(e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value })}
        />
        <div className="flex justify-center">
          <Button title={"Create Account"} customStyle={" bg-primarypurple mt-4 py-4 px-5 shadow-xl text-slate-100 "} />
        </div>
      </form>
    </>
  );
};
export default SignUP;
