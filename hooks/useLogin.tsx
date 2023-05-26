import { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: HTMLInputElement) => {
    setEmail(e.value);
  };
  const handlePassword = (e: HTMLInputElement) => {
    setPassword(e.value);
  };

  return { email, password, handleEmail, handlePassword };
};

export default useLogin;
