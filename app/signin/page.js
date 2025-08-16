"use client";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { signIn, useSession } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ ঠিক ইমপোর্ট

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const session = useSession()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:6007/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful ✅");

        router.push("/"); // ✅ Next.js redirect
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full lg:w-[460px]">
            <img
              src="https://i.ibb.co.com/tps2qf29/Frame-3.png"
              alt="Sign In"
              className="w-full h-full"
            />
          </div>

          <div className="p-8 border-2 border-gray-100">
            <h2 className="text-center font-bold text-[#FF3811] text-3xl mb-10">
              Sign In
            </h2>

            <form className="flex flex-col gap-8" onSubmit={handleLogin}>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email} // ✅ state bind করো
                  onChange={(e) => setEmail(e.target.value)}
                  className="input border-2 border-gray-100 input-bordered w-full"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password} // ✅ state bind করো
                  onChange={(e) => setPassword(e.target.value)}
                  className="input border-2 border-gray-100 input-bordered w-full"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <input
                type="submit"
                value="Sign In"
                className="input border-2 font-bold text-white rounded-2xl border-gray-100 bg-[#FF3811] input-bordered w-full cursor-pointer"
              />

              <div className="flex flex-col items-center gap-4">
                <h4>Or Sign In With</h4>
                <div className="flex gap-2">
                  <div className="p-2 bg-gray-800 rounded-full">
                    <CiFacebook className="text-white text-lg" />
                  </div>
                  <div className="p-2 bg-gray-800 rounded-full">
                    <CiFacebook className="text-white text-lg" />
                  </div>
                  <div className="p-2 bg-gray-800 rounded-full">
                    <CiFacebook className="text-white text-lg" />
                  </div>
                </div>
              </div>

              <p className="text-center mt-8">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-lg font-semibold text-yellow-400">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
