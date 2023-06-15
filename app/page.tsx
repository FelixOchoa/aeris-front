"use client";
import useAuth from "@/hooks/useAuth";
import { HomePage as Home } from "@/components/HomePage/page";
import HomePageAdmin from "@/components/HomePage/PageAdmin";

const HomePage = () => {
  const { user } = useAuth();

  if (user?.isLogged) {
    return <>{user?.typeUser === "admin" && <HomePageAdmin/>}</>;
  }

  return <Home />;
};

export default HomePage;
