import { useState } from "react";

const SignUP = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("called", registerData);
  };
  return (
    <form className=" flex flex-col justify-center mt-6 p-4" onSubmit={handleSubmit}>
      <label className="flex">Username:</label>
      <input
        type="text"
        name="name"
        className="bg-slate-100 mb-3 rounded-md p-2 pl-3 focus-within:outline-none"
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
        onChange={(e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value })}
      />
      <label className="flex">Password :</label>
      <input
        type="password"
        name="password"
        className="bg-slate-100 mb-3 rounded-md p-2 pl-3 focus-within:outline-none"
        placeholder="Enter your password"
        value={registerData.password}
        onChange={(e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value })}
      />
      <div className="flex justify-center">
        <button className="bg-blue-400 rounded-md mt-3 py-3 text-white px-7"> Create Account</button>
      </div>
    </form>
  );
};
export default SignUP;
