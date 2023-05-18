"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { AuthenticateContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteProduct,
  getUserDetails,
  updatePassword,
  updateProfile,
} from "../../../requests";

function Page() {
  const [isActive, setIsActive] = useState("Profile");
  const router = useRouter();
  const { user } = useContext(AuthenticateContext);
  const [copied, setCopied] = useState(false);
  const [host, setHost] = useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [background, setBackground] = useState("");
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [change, setChange] = useState(false);
  const [password, setPassword] = useState("");
  const [current, setCurrent] = useState("");
  const [confirm, setConfirm] = useState("");
  const [products, setProducts] = useState([]);
  // const [errors, setErrors] = useState(null);

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(`${host}/profile/${username}`);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const updateUserProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      phone,
      username,
      facebook,
      twitter,
      instagram,
      pinterest,
      tiktok,
      youtube,
      bio,
      image,
      background,
    };
    try {
      const response = await updateProfile(user?.token, data);
      if (response?.validation_errors) {
        // setErrors(response.validation_errors);
        notify("Error Occured. Try again later");
        setLoading(false);
      } else {
        setLoading(false);
        notify("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (password && current && confirm) {
      try {
        setLoad(true);
        let data = {
          current_password: current,
          password,
          password_confirmation: confirm,
        };
        const response = await updatePassword(data, user?.token);
        setLoad(false);
        setChange(false);
        notify("Password updated successfully");
      } catch (error) {
        console.log(error);
        setLoad(false);
      }
    }
  };

  const handleFile = async (e) => {
    setLoadingFile(true);
    const data = new FormData();
    data.append("upload_preset", "dukaapp");
    data.append("cloud_name", "dinfpnmrf");

    let image = e.target.files[0];
    data.append("file", image);
    let { url } = await fetch(
      "https://api.cloudinary.com/v1_1/dinfpnmrf/image/upload",
      {
        method: "POST",
        body: data,
      }
    ).then((response) => response.json());
    setImage(url);
    setLoadingFile(false);
  };
  const handleBackground = async (e) => {
    setLoadingFile(true);
    const data = new FormData();
    data.append("upload_preset", "dukaapp");
    data.append("cloud_name", "dinfpnmrf");

    let image = e.target.files[0];
    data.append("file", image);
    let { url } = await fetch(
      "https://api.cloudinary.com/v1_1/dinfpnmrf/image/upload",
      {
        method: "POST",
        body: data,
      }
    ).then((response) => response.json());
    setBackground(url);
    setLoadingFile(false);
  };

  const userDetails = async (token) => {
    try {
      const { user } = await getUserDetails(token);
      setProducts(user[0]?.influencer_products);
      setName(user[0]?.name || "");
      setUserName(user[0]?.username || "");
      setPhone(user[0]?.phone || "");
      setEmail(user[0]?.email || "");
      setImage(user[0]?.image || "");
      setBio(user[0]?.influencer?.bio || "");
      setBackground(user[0]?.influencer?.background || "");
      setFacebook(user[0]?.influencer?.facebook || "");
      setTwitter(user[0]?.influencer?.twitter || "");
      setInstagram(user[0]?.influencer?.instagram || "");
      setTiktok(user[0]?.influencer?.tiktok || "");
      setYoutube(user[0]?.influencer?.youtube || "");
      setPinterest(user[0]?.influencer?.pinterest || "");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(user?.token, id);
      let data = products.filter((product) => product.id !== id);
      setProducts(data);
      notify("Product deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.origin;
      setHost(hostname);
    }
  }, []);

  useEffect(() => {
    if (user) {
      userDetails(user?.token);
    }
  }, [user]);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <section className="bg-white min-h-screen">
        <div className="md:max-w-lg md:mx-auto w-full flex px-4 md:py-24 flex-col">
          <div className="">
            <h2 className="text-[#1d7874] font-bold text-xl mb-2">
              Welcome to NiPlug
            </h2>
            <p className="text-gray-500 text-sm">Performance overview</p>
          </div>
          <div className="flex sm:w-auto my-3">
            <div className="rounded-none rounded-l-lg flex bg-gray-50 border items-center gap-3 flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5">
              {`${host}/${username}`}
            </div>
            {copied ? (
              <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
              </span>
            ) : (
              <span
                title="Copy to clipboard"
                className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={copyContent}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                  />
                </svg>
              </span>
            )}
          </div>
          <Link
            href={`/${username}`}
            className="bg-[#1d7874] rounded-2xl py-1 px-7 text-white max-w-max"
          >
            Go To Link
          </Link>

          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul className="flex -mb-px">
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Profile"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Profile")}
                >
                  Profile
                </span>
              </li>
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Product"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Product")}
                >
                  Products
                </span>
              </li>
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Service"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Service")}
                >
                  Services
                </span>
              </li>
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Campaign"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Campaign")}
                >
                  Campaigns
                </span>
              </li>
            </ul>
          </div>
          <div className="my-5">
            {isActive === "Profile" && (
              <form onSubmit={updateUserProfile}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                      placeholder=" "
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      User name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                      placeholder=" "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="facebook"
                    id="facebook"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                  <label
                    htmlFor="facebook"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Facebook
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="instagram"
                    id="floating_instagram"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                  <label
                    htmlFor="floating_instagram"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Instagram
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="pinterest"
                    id="floating_pinterest"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    value={pinterest}
                    onChange={(e) => setPinterest(e.target.value)}
                  />
                  <label
                    htmlFor="floating_pinterest"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Pinterest
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="twitter"
                    id="floating_twitter"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                  <label
                    htmlFor="floating_twitter"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Twitter
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="titktok"
                    id="floating_titktok"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    value={tiktok}
                    onChange={(e) => setTiktok(e.target.value)}
                  />
                  <label
                    htmlFor="floating_titktok"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    TikTok
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="youtube"
                    id="floating_youtube"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                  />
                  <label
                    htmlFor="floating_youtube"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    YouTube
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                      placeholder=" "
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (1234567890)
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Bio
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>
                </div>
                <div className="my-3">
                  <span
                    className="text-xs bg-gray-400 p-2 rounded-lg text-gray-200 cursor-pointer"
                    onClick={() => setChange(!change)}
                  >
                    Change Password
                  </span>
                </div>
                {change && (
                  <div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="password"
                        name="current"
                        id="floating_current"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                        placeholder=" "
                        value={current}
                        onChange={(e) => setCurrent(e.target.value)}
                      />
                      <label
                        htmlFor="floating_current"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Current Password
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="password"
                        name="password"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                        placeholder=" "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="password"
                        name="repeat_password"
                        id="floating_repeat_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                        placeholder=" "
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                      />
                      <label
                        htmlFor="floating_repeat_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Confirm password
                      </label>
                    </div>
                    <p
                      onClick={handleUpdatePassword}
                      className="text-white cursor-pointer inline-flex items-center justify-center gap-4 bg-[#060D50] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      {load && (
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
                      Update Password
                    </p>
                  </div>
                )}
                {loadingFile && (
                  <div className="text-white flex flex-col items-center justify-center gap-2 bg-[#1d7874] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
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
                    <p>Uploading Files</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 md:gap-6 mt-2 mb-4 gap-3">
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600"
                      htmlFor="profile"
                    >
                      Upload Profile
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      aria-describedby="profile_help"
                      id="profile"
                      type="file"
                      onChange={handleFile}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600"
                      htmlFor="file_input"
                    >
                      Upload Background
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      aria-describedby="file_input_help"
                      id="file_input"
                      type="file"
                      onChange={handleBackground}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center justify-center gap-4 bg-[#1d7874] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
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
                  Update Profile
                </button>
              </form>
            )}
            {isActive === "Product" && (
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3 col-span-2">
                    <p className="text-center font-semibold">
                      Total number of products
                    </p>
                    <p className="font-bold text-xl">40</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                    <p className="text-center font-semibold">Products sold</p>
                    <p className="font-bold text-xl">20</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                    <p className="text-center font-semibold">Total sales</p>
                    <p className="font-bold text-xl">20</p>
                  </div>
                </div>
                {products.length > 0 && (
                  <div className="my-5">
                    <h2 className="text-center font-bold">Products</h2>
                    <div className="my-4">
                      {products.map((product) => (
                        <div
                          className="flex justify-between items-center mb-3"
                          key={product?.id}
                        >
                          <p className="font-bold">{product?.product?.title}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                            onClick={() => handleDelete(product?.id)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            {isActive === "Service" && (
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Total number of services
                  </p>
                  <p className="font-bold text-xl">30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Services links clicked
                  </p>
                  <p className="font-bold text-xl">24</p>
                </div>
              </div>
            )}
            {isActive === "Campaign" && (
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Total number of campaigns
                  </p>
                  <p className="font-bold text-xl">50</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Campaign links clicked
                  </p>
                  <p className="font-bold text-xl">34</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
