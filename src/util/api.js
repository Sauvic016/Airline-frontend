import axios from "axios";
const AUTH_API_URL = `http://localhost:3005/authservice/api/v1`;

export const userlogin = async (data) => {
  const user = await axios.post(`${AUTH_API_URL}/signin`, data);

  const token = user.data?.data?.token;
  if (token) {
    localStorage.setItem("user", JSON.stringify(user?.data?.data));
  }
  return user.data.data;
};

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return JSON.parse(user);
};
