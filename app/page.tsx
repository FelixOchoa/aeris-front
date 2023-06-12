"use client";
import useAuth from "@/hooks/useAuth";
import { HomePage as Home } from "@/components/HomePage/page";

const HomePage = () => {
  const { user } = useAuth();

  if (user?.isLogged) {
    return (
      <main>
        <h1>Te has logueado</h1>
      </main>
    );
  }

  return <Home />;
};

export default HomePage;
