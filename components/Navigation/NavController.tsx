import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentUser, logOut } from "@/redux/actions/authActions";
import { NavUnLogged } from "./NavUnLogin";
import { NavLoggedData } from "@/utils/Navigation/HomePage";
import Link from "next/link";
import Image from "next/image";

export const NavController = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const { payload } = dispatch(getCurrentUser());
    setUser(payload);
  }, [dispatch]);

  const handleLogout = async () => {
    dispatch(await logOut(user));
  };

  if (user?.isLogged) {
    return (
      <>
        <header>
          <nav className="bg-[#202124] text-white text-sm py-6 px-20 flex justify-between md:gap-10 2xl:justify-center">
            <div className="flex gap-10 font-semibold items-center">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={100}
                  height={40}
                  alt="logo"
                />
              </Link>

              <ul className="flex gap-10">
                {NavLoggedData.map((item, key) => (
                  <li key={key} className="font-medium">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-10 items-center">
              <Link href="" className="font-medium" onClick={handleLogout}>
                Cerrar Sesión
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }
  return <NavUnLogged />;
};
