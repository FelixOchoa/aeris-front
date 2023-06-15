import { authService } from "@/services/auth/authService";
import { User } from "../types/authType";

export const setCredentials = async (user: User) => {
  const { code, data } = await authService.login(user);
  const { id_user, email, token, type_user } = data;

  if (code === 400) {
    return {
      type: "LOGIN_ERROR",
      payload: {
        id: "",
        email: "",
        token: "",
        isLogged: false,
      },
    };
  }

  localStorage.setItem("id", id_user);
  localStorage.setItem("email", email);
  localStorage.setItem("token", token);
  localStorage.setItem("isLogged", "true");
  localStorage.setItem("typeUser", type_user);

  return {
    type: "SET_CREDENTIALS",
    payload: {
      id: id_user,
      email,
      token,
    },
  };
};

export const logOut = async (user: User) => {
  const response = await authService.logout(user);

  if (response) {
    window.localStorage.removeItem("isLogged");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("id");
    window.location.href = "/";
  }

  return {
    type: "LOG_OUT",
  };
};

export const getCurrentUser = () => {
  return {
    type: "GET_CURRENT_USER",
    payload: {
      id: localStorage.getItem("id"),
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token"),
      isLogged: localStorage.getItem("isLogged"),
      typeUser: localStorage.getItem("typeUser"),
    },
  };
};
