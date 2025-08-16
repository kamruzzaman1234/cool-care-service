"use client";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";

const SignUp = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value; // ✅ fixed

    const userInfo = { name, email, password };

    try {
      const res = await fetch("http://127.0.0.1:6007/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await res.json();
      console.log("Response from server:", data);

      if (res.ok) {
        alert(data.message);
        form.reset();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Failed to connect with server");
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full lg:w-[460px]">
            <img
              src="https://i.ibb.co.com/tps2qf29/Frame-3.png"
              alt="Sign Up"
              className="w-full h-full"
            />
          </div>

          <div className="p-8 border-2 border-gray-100">
            <h2 className="text-center font-bold text-3xl text-[#FF3811] mb-10">
              Sign Up
            </h2>

            <form className="flex flex-col gap-8" onSubmit={handleSignUp}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input border-2 border-gray-100 input-bordered w-full"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input border-2 border-gray-100 input-bordered w-full"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input border-2 border-gray-100 input-bordered w-full"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="input border-2 font-bold text-white rounded-2xl border-gray-100 bg-[#FF3811] input-bordered w-full cursor-pointer"
              />

              <div className="flex flex-col items-center gap-4">
                <h4>Or Sign Up With</h4>
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
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-lg font-semibold text-[#FF3811]"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
