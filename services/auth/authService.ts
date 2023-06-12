import { User } from "@/redux/types/authType";

const login = async (user: User) => {
  try {
    const { email, password } = user;

    const response = await fetch(`${process.env.API_AERIS_BACKEND}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const logout = async (user: User) => {
  try {
    const { email } = user;

    const response = await fetch(`${process.env.API_AERIS_BACKEND}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const authService = {
  login,
  logout,
};
