export const userlogin = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_API_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    if (!user.success) {
      throw user;
    }
    const token = user?.data?.token;
    if (token) {
      localStorage.setItem("user", JSON.stringify(user?.data));
    }
    return user.data;
  } catch (error) {
    if (error.message === "Failed to fetch") {
      throw new Error("Sorry, our server is down. We're working on it. Please try again later.");
    }
    throw error;
  }
};

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return JSON.parse(user);
};

export const userRegister = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    return user;
  } catch (error) {
    if (error.message === "Failed to fetch") {
      throw new Error("Sorry, our server is down. We're working on it. Please try again later.");
    }
    throw error;
  }
};
