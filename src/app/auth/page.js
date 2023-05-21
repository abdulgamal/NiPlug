"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { login, register } from "../../../requests";
import { AuthenticateContext } from "../../../context/AuthContext";
import Modal from "@/components/Modal";

export default function Auth() {
  const router = useRouter();
  const { handleAuth } = useContext(AuthenticateContext);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState(null);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    setErrMessage("");
    setLoading(true);
    if (!isLogin) {
      const data = {
        name,
        email,
        username: userName,
        phone,
        password,
        password_confirmation: confirmPassword,
      };
      try {
        const response = await register(data);
        if (response?.validation_errors) {
          setErrors(response.validation_errors);
          setLoading(false);
        } else {
          setLoading(false);
          const {
            token,
            users: { email, id },
          } = response;
          handleAuth(token, email, id);
          router.replace("/home");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const data = {
        email,
        password,
      };
      try {
        const response = await login(data);
        if (response.message) {
          setErrMessage(response.message);
          setLoading(false);
        } else {
          setLoading(false);
          const {
            token,
            users: { email, id },
          } = response;
          handleAuth(token, email, id);
          router.replace("/home");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Modal isToggle={isToggle} setToggle={setIsToggle} />
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-5">
          <div className="text-center pb-8">
            <img
              src="https://res.cloudinary.com/dinfpnmrf/image/upload/v1684594826/dukaapp/ymusvqugr2sck88mmp5r.png"
              width={150}
              className="mx-auto"
            />
            <div className="mt-5">
              {isLogin ? (
                <h3 className="text-[#1d7874] text-2xl font-bold sm:text-3xl">
                  Log in to your account
                </h3>
              ) : (
                <h3 className="text-[#1d7874] text-2xl font-bold sm:text-3xl">
                  Sign Up to your account
                </h3>
              )}
            </div>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#1d7874] shadow-sm rounded-lg"
                />
                {errors?.username && (
                  <span className="my-2 text-red-300 text-xs">
                    {errors.username.join("")}
                  </span>
                )}
              </div>
            )}
            {!isLogin && (
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#1d7874] shadow-sm rounded-lg"
                />
                {errors?.name && (
                  <span className="my-2 text-red-300 text-xs">
                    {errors.name.join("")}
                  </span>
                )}
              </div>
            )}
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#1d7874] shadow-sm rounded-lg"
              />
              {errors?.email && (
                <span className="my-2 text-red-300 text-xs">
                  {errors.email.join("")}
                </span>
              )}
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#1d7874] shadow-sm rounded-lg"
              />
              {errors?.password && (
                <span className="my-2 text-red-300 text-xs">
                  {errors.password.join("")}
                </span>
              )}
            </div>
            {!isLogin && (
              <div>
                <label className="font-medium">Confirm Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#1d7874] shadow-sm rounded-lg"
                />
              </div>
            )}
            {!isLogin && (
              <div>
                <label className="font-medium">Phone</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#1d7874] shadow-sm rounded-lg"
                />
                {errors?.phone && (
                  <span className="my-2 text-red-300 text-xs">
                    {errors.phone.join("")}
                  </span>
                )}
              </div>
            )}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    id="remember-me-checkbox"
                    className="checkbox-item peer hidden"
                  />
                  <label
                    htmlFor="remember-me-checkbox"
                    className="relative flex w-5 h-5 bg-white peer-checked:bg-[#1d7874] rounded-md border ring-offset-2 ring-[#1d7874] duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                  ></label>
                  <span>Remember me</span>
                </div>
                <span
                  onClick={() => setIsToggle(true)}
                  className="text-center text-[#1d7874] hover:text-indigo-500"
                >
                  Forgot password?
                </span>
              </div>
            )}
            {errMessage && (
              <span className="my-2 text-red-300 text-xs">{errMessage}</span>
            )}
            {isLogin ? (
              <button className="w-full inline-flex items-center justify-center gap-4 px-4 py-2 text-white font-medium bg-[#1d7874] hover:bg-indigo-500 active:bg-[#1d7874] rounded-lg duration-150">
                {loading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                )}
                Sign in
              </button>
            ) : (
              <button className="w-full inline-flex items-center justify-center gap-4 px-4 py-2 text-white font-medium bg-[#1d7874] hover:bg-indigo-500 active:bg-[#1d7874] rounded-lg duration-150">
                {loading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                )}
                Sign Up
              </button>
            )}
          </form>
          {/* <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_40)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </button> */}
          <p className="text-center">
            Don&apos;t have an account?{" "}
            {isLogin ? (
              <span
                className="font-medium text-[#1d7874] hover:text-indigo-500 cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            ) : (
              <span
                className="font-medium text-[#1d7874] hover:text-indigo-500 cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            )}
          </p>
        </div>
      </main>
    </>
  );
}
