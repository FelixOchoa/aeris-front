import Link from "next/link";
import Image from "next/image";
import { NavHomePageData } from "@/utils/Navigation/HomePage";

export const NavHomePage = () => {
  return (
    <header>
      <nav className="bg-[#202124] text-white text-sm py-6 px-20 flex justify-between md:gap-10 2xl:justify-center">
        <div className="flex gap-10 font-semibold items-center">
          <Link href="/">
            <Image src="/images/logo.png" width={100} height={40} alt="logo" />
          </Link>

          <ul className="flex gap-10">
            {NavHomePageData.map((item, key) => (
              <li key={key} className="font-medium">
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-10 items-center">
          <Link href="/login" className="font-medium">
            Iniciar Sesión
          </Link>
        </div>
      </nav>
    </header>
  );
};
