"use client";

import Link from "next/link";
import { Cinzel_Decorative, Inter } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // listen for localStorage changes (login/logout from anywhere)
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/signin");
  };

  const Links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="navbar">
        {/* START */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100
        space-y-6 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links.map((link) => (
                <Link
                  className={`${inter.className} space-y-4
                text-[#555555] text-lg font-semibold`}
                  href={link.path}
                  key={link.path}
                  title={link.title}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/" className="w-[101px] h-[54px]">
            <img
              src="https://i.ibb.co.com/2HhwB7k/Group-1.png"
              className="w-full h-full"
              alt=""
            />
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            {Links.map((link) => (
              <Link
                className={`${inter.className} space-y-4
                text-[#555555] text-lg font-semibold`}
                href={link.path}
                key={link.path}
                title={link.title}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>

        {/* END */}
        <div className="navbar-end space-x-6">
          <Link href="">
            {" "}
            <IoBagOutline className="text-lg font-bold" />{" "}
          </Link>
          <Link href="">
            <CiSearch className="text-lg font-bold" />
          </Link>
          <Link
            href=""
            className={`${inter.className} px-4 py-2 text-lg font-semibold border-2 text-[#FF3811]
      rounded-lg border-[#FF3811]`}
          >
            Appointment
          </Link>

          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-lg font-semibold border-2 text-red-500 rounded-lg border-red-500"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/signin"
                className="px-4 py-2 text-lg font-semibold border-2 text-[#FF3811] rounded-lg border-[#FF3811]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
