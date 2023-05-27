import { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return { email, password, handleEmail, handlePassword };
};

export default useLogin;
