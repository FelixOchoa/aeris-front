"use client";
import React from "react";
import useLogin from "@/hooks/useLogin";
import { Input } from "@/components/Login/Input";
import { Slide } from "react-awesome-reveal";
import { useLoginMutation } from "@/redux/services/User";

const Login = () => {
  const { email, password, handleEmail, handlePassword } = useLogin();
  const [login, { isSuccess, data }] = useLoginMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const loginUser = {
      email,
      password,
    };

    login(loginUser);
  };
  console.log(data);

  return (
    <main className="flex flex-col items-center">
      <form className="mt-28 flex flex-col w-1/2" onSubmit={handleSubmit}>
        <Slide direction="up" triggerOnce>
          <h1 className="px-8 text-2xl text-[#202124] font-semibold">
            Bienvenido a Aeris
          </h1>
          <p className="px-8 text-[#a8a9ac] font-medium text-sm mb-5">
            Inicia sesión para continuar
          </p>
          <Input type="email" handle={handleEmail} />
          <Input type="password" handle={handlePassword} />
          <div className="w-full px-8">
            <button className="w-full bg-[#202124] text-white py-3 rounded-md font-medium border-2 hover:bg-[#595c61] hover:text-white transition-all ease-in-out mt-5">
              Iniciar sesión
            </button>
          </div>
        </Slide>
      </form>
    </main>
  );
};

export default Login;
