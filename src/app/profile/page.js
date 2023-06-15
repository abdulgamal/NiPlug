"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { AuthenticateContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToLink,
  deleteProduct,
  deleteProfileLink,
  getUserDetails,
  updatePassword,
  updateProfile,
} from "../../../requests";
import Paper from "@/components/Paper";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import OrderCard from "@/components/OrderCard";

function Page() {
  const [isActive, setIsActive] = useState("Product");
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
  const [links, setLinks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [linkImage, setLinkImage] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const productsSold = orders.filter(
    (order) => order?.payment_status === "paid"
  );

  const displayedOrders = productsSold.map((product) => {
    let data = products.filter(
      (item) => item?.product_id === product?.product_id
    );
    if (data.length > 0) {
      let value = { ...product, prod: data[0]?.product };

      return value;
    }
  });

  const serviceProducts = products?.filter((product) =>
    product?.product?.category?.title.includes("Services")
  );
  const otherProducts = products?.filter(
    (product) => !product?.product?.category?.title.includes("Services")
  );

  const totalSales = productsSold.reduce(
    (acc, current) => acc + current?.total_amount,
    0
  );

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
      notify("Error Occured. Try again later");
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
    if (isAdd) {
      setLinkImage(url);
    } else {
      setImage(url);
    }
    setLoadingFile(false);
  };

  const addLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let value = {
        link,
        title,
        description,
        price,
        image: linkImage,
      };
      await addToLink(value, user?.token);
      notify("Link added successfully");
      setLoading(false);
      setLinks((prev) => [...prev, value]);
      setTitle("");
      setLink("");
      setDescription("");
      setLinkImage("");
      setPrice("");
      setIsAdd(false);
    } catch (error) {
      setLoading(false);
      notify("Something went wrong");
    }
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
    setLoaded(true);
    try {
      const {
        data: { user },
      } = await getUserDetails(token);
      setProducts(user[0]?.influencer_products);
      setLinks(user[0]?.links);
      setOrders(user[0]?.orders);
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
      setLoaded(false);
    } catch (error) {
      console.log(error);
      setLoaded(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      let data = products.filter((product) => product.id !== id);
      setProducts(data);
      await deleteProduct(user?.token, id);
      notify("Product deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = async (id) => {
    try {
      let data = links.filter((link) => link.id !== id);
      setLinks(data);
      await deleteProfileLink(user?.token, id);
      notify("Product deleted successfully");
    } catch (error) {
      notify("Something went wrong deleting link");
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
      {!loaded && (
        <section className="bg-white min-h-screen">
          <div className="md:hidden md:mx-auto w-full flex px-4 md:py-24 flex-col">
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
              Go To Profile Link
            </Link>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <ul className="flex -mb-px overflow-hidden overflow-x-scroll no-scrollbar">
                <li className="mr-2">
                  <span
                    className={`${
                      isActive === "Product"
                        ? "border-[#060D50] text-[#060D50]"
                        : "border-transparent"
                    } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
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
                    } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
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
                    } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
                    onClick={() => setIsActive("Campaign")}
                  >
                    Links
                  </span>
                </li>
                <li className="mr-2">
                  <span
                    className={`${
                      isActive === "Orders"
                        ? "border-[#060D50] text-[#060D50]"
                        : "border-transparent"
                    } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
                    onClick={() => setIsActive("Orders")}
                  >
                    Orders
                  </span>
                </li>
                <li className="mr-2">
                  <span
                    className={`${
                      isActive === "Profile"
                        ? "border-[#060D50] text-[#060D50]"
                        : "border-transparent"
                    } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
                    onClick={() => setIsActive("Profile")}
                  >
                    Profile
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
                  <div className="my-6">
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
                  {image && (
                    <img
                      src={image}
                      alt={"link Image"}
                      className="h-14 w-14 object-cover rounded-md"
                    />
                  )}
                  {background && (
                    <img
                      src={background}
                      alt={"link Image"}
                      className="h-14 w-14 object-cover rounded-md"
                    />
                  )}
                  <div className="grid md:grid-cols-2 md:gap-6 mt-2 my-8 gap-3">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload Profile
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={handleFile}
                        />
                      </label>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload background
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={handleBackground}
                        />
                      </label>
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
                      <p className="font-bold text-xl">
                        {otherProducts?.length}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                      <p className="text-center font-semibold">Products sold</p>
                      <p className="font-bold text-xl">
                        {productsSold?.length}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                      <p className="text-center font-semibold">Total sales</p>
                      <p className="font-bold text-xl">{totalSales}</p>
                    </div>
                  </div>
                  {otherProducts.length > 0 && (
                    <div className="my-5">
                      <h2 className="text-center font-bold">Products</h2>
                      <div className="my-4">
                        {otherProducts.map((product) => (
                          <div
                            className="flex justify-between items-center mb-3"
                            key={product?.id}
                          >
                            <img
                              className="object-cover w-48 rounded-lg h-48"
                              src={product?.product?.image_url}
                              alt=""
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-red-500 cursor-pointer"
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
                <div>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                      <p className="text-center font-semibold">
                        Total number of services
                      </p>
                      <p className="font-bold text-xl">
                        {serviceProducts?.length}
                      </p>
                    </div>
                  </div>
                  {serviceProducts.length > 0 && (
                    <div className="my-5">
                      <h2 className="text-center font-bold">Services</h2>
                      <div className="my-4">
                        {serviceProducts.map((product) => (
                          <div
                            className="flex justify-between items-center mb-3"
                            key={product?.id}
                          >
                            <img
                              className="object-cover w-48 rounded-lg h-48"
                              src={product?.product?.image_url}
                              alt=""
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-red-500 cursor-pointer"
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
              {isActive === "Campaign" && (
                <>
                  <div
                    onClick={() => setIsAdd(!isAdd)}
                    className="my-5 flex items-center bg-[#1d7874] max-w-max text-white px-6 py-1 rounded-md cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>

                    <p>Add Link</p>
                  </div>
                  {isAdd && (
                    <>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                            placeholder=" "
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                          <label
                            htmlFor="first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Title
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            type="text"
                            name="link"
                            id="link"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                            placeholder=" "
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            required
                          />
                          <label
                            htmlFor="first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Link
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            type="text"
                            name="description"
                            id="description"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                            placeholder=" "
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                          <label
                            htmlFor="first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Description
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            type="text"
                            name="price"
                            id="price"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                            placeholder=" "
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                          />
                          <label
                            htmlFor="first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Price (put 0 if price not needed)
                          </label>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="image-file"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">
                                  Click to upload Image
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              id="image-file"
                              type="file"
                              className="hidden"
                              onChange={handleFile}
                            />
                          </label>
                        </div>
                        {linkImage && (
                          <img
                            src={linkImage}
                            alt={"link Image"}
                            className="h-14 w-14 object-cover rounded-md"
                          />
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
                      </div>
                      <button
                        onClick={addLink}
                        disabled={!linkImage}
                        className="text-white disabled:bg-gray-400 inline-flex mt-5 items-center justify-center gap-4 bg-[#1d7874] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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
                        Add Link
                      </button>
                    </>
                  )}
                  {links.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                      {links.map((link, index) => (
                        <Paper
                          item={link}
                          key={link?.id || index}
                          handleLink={deleteLink}
                        />
                      ))}
                    </div>
                  )}
                  {links.length === 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                      <NotFound />
                    </div>
                  )}
                </>
              )}
              {isActive === "Orders" && (
                <>
                  {displayedOrders.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                      {displayedOrders.map((link) => (
                        <OrderCard item={link} key={link?.id} />
                      ))}
                    </div>
                  )}
                  {displayedOrders.length === 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                      <NotFound />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="hidden container mx-auto md:flex">
            <div className="h-[80vh]">
              <div className="text-lg font-medium text-center text-gray-500 border-r border-gray-200 h-full">
                <ul className="flex flex-col items-start">
                  <li className="mr-2">
                    <span
                      className={`${
                        isActive === "Product"
                          ? "border-[#060D50] text-[#060D50]"
                          : "border-transparent"
                      } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
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
                      } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
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
                      } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
                      onClick={() => setIsActive("Campaign")}
                    >
                      Links
                    </span>
                  </li>
                  <li className="mr-2">
                    <span
                      className={`${
                        isActive === "Orders"
                          ? "border-[#060D50] text-[#060D50]"
                          : "border-transparent"
                      } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
                      onClick={() => setIsActive("Orders")}
                    >
                      Orders
                    </span>
                  </li>
                  <li className="mr-2">
                    <span
                      className={`${
                        isActive === "Profile"
                          ? "border-[#060D50] text-[#060D50]"
                          : "border-transparent"
                      } inline-block p-4 border-b-2  rounded-t-lg cursor-pointer`}
                      onClick={() => setIsActive("Profile")}
                    >
                      Profile
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 px-7 h-[80vh] overflow-y-scroll">
              <div className="border-b border-gray-200">
                <h2 className="text-[#1d7874] font-bold text-2xl mb-2">
                  Welcome to NiPlug
                </h2>
                <p className="text-gray-500 text-base">Performance overview</p>

                <div className="flex items-center gap-6">
                  <div className="flex max-w-max my-3">
                    <div className="rounded-none rounded-l-lg flex bg-gray-50 border items-center gap-3 flex-1 min-w-0 w-full text-base border-gray-300 p-2.5">
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
                    className="bg-[#1d7874] rounded-lg py-2 px-7 text-white max-w-max"
                  >
                    Go To Profile Link
                  </Link>
                </div>
              </div>
              <div className="mt-10">
                {isActive === "Profile" && (
                  <form onSubmit={updateUserProfile}>
                    <div className="grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={username}
                          onChange={(e) => setUserName(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="first_name"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          User name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="last_name"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="email"
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
                          id="instagram"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                        <label
                          htmlFor="instagram"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Instagram
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="pinterest"
                          id="pinterest"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={pinterest}
                          onChange={(e) => setPinterest(e.target.value)}
                        />
                        <label
                          htmlFor="pinterest"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Pinterest
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="twitter"
                          id="twitter"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={twitter}
                          onChange={(e) => setTwitter(e.target.value)}
                        />
                        <label
                          htmlFor="twitter"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Twitter
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="titktok"
                          id="titktok"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={tiktok}
                          onChange={(e) => setTiktok(e.target.value)}
                        />
                        <label
                          htmlFor="titktok"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          TikTok
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="youtube"
                          id="youtube"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={youtube}
                          onChange={(e) => setYoutube(e.target.value)}
                        />
                        <label
                          htmlFor="youtube"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          YouTube
                        </label>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                          placeholder=" "
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="phone"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone number (1234567890)
                        </label>
                      </div>
                      <div>
                        <label
                          htmlFor="messages"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Bio
                        </label>
                        <textarea
                          id="messages"
                          rows="3"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="my-6">
                      <span
                        className="text-xs bg-gray-400 p-2 rounded-lg text-gray-200 cursor-pointer"
                        onClick={() => setChange(!change)}
                      >
                        Change Password
                      </span>
                    </div>
                    {change && (
                      <div className="grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 my-6">
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
                    {image && (
                      <img
                        src={image}
                        alt={"link Image"}
                        className="h-14 w-14 object-cover rounded-md"
                      />
                    )}
                    {background && (
                      <img
                        src={background}
                        alt={"link Image"}
                        className="h-14 w-14 object-cover rounded-md"
                      />
                    )}
                    <div className="grid md:grid-cols-2 md:gap-6 mt-2 my-8 gap-3">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="drop-file"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              aria-hidden="true"
                              className="w-10 h-10 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">
                                Click to upload Profile
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="drop-file"
                            type="file"
                            className="hidden"
                            onChange={handleFile}
                          />
                        </label>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="zone-file"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              aria-hidden="true"
                              className="w-10 h-10 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">
                                Click to upload background
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="zone-file"
                            type="file"
                            className="hidden"
                            onChange={handleBackground}
                          />
                        </label>
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                        <p className="text-center font-semibold">
                          Total number of products
                        </p>
                        <p className="font-bold text-xl">
                          {otherProducts?.length}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                        <p className="text-center font-semibold">
                          Products sold
                        </p>
                        <p className="font-bold text-xl">
                          {productsSold?.length}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                        <p className="text-center font-semibold">Total sales</p>
                        <p className="font-bold text-xl">{totalSales}</p>
                      </div>
                    </div>
                    {otherProducts.length > 0 && (
                      <div className="my-5">
                        <h2 className="text-center font-bold">Products</h2>
                        <div className="my-4 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
                          {otherProducts.map((product) => (
                            <div className="w-full pb-4" key={product?.id}>
                              <img
                                className="object-cover w-full rounded-lg h-48"
                                src={product?.product?.image_url}
                                alt=""
                              />
                              <div className="px-2">
                                <h2 className="my-4 text-xl font-semibold text-gray-800 capitalize truncate">
                                  {product?.product?.title}
                                </h2>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6 text-red-500 cursor-pointer"
                                  onClick={() => handleDelete(product?.id)}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {isActive === "Service" && (
                  <div>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                        <p className="text-center font-semibold">
                          Total number of services
                        </p>
                        <p className="font-bold text-xl">
                          {serviceProducts?.length}
                        </p>
                      </div>
                    </div>
                    {serviceProducts.length > 0 && (
                      <div className="my-5">
                        <h2 className="text-center font-bold">Services</h2>
                        <div className="my-4 grid md:grid-cols-3 gap-6">
                          {serviceProducts.map((product) => (
                            <div
                              className="flex justify-between items-center mb-3 shadow-md rounded-md"
                              key={product?.id}
                            >
                              <img
                                className="object-cover w-48 rounded-lg h-48"
                                src={product?.product?.image_url}
                                alt=""
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-red-500 cursor-pointer"
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
                {isActive === "Campaign" && (
                  <>
                    <div
                      onClick={() => setIsAdd(!isAdd)}
                      className="my-5 flex items-center bg-[#1d7874] max-w-max text-white px-6 py-1 rounded-md cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>

                      <p>Add Link</p>
                    </div>
                    {isAdd && (
                      <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                              placeholder=" "
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                            />
                            <label
                              htmlFor="first_name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Title
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="text"
                              name="link"
                              id="link"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                              placeholder=" "
                              value={link}
                              onChange={(e) => setLink(e.target.value)}
                              required
                            />
                            <label
                              htmlFor="first_name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Link
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="text"
                              name="description"
                              id="description"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                              placeholder=" "
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                            />
                            <label
                              htmlFor="first_name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Description
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="text"
                              name="price"
                              id="price"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                              placeholder=" "
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              required
                            />
                            <label
                              htmlFor="first_name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Price (put 0 if price not needed)
                            </label>
                          </div>
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="image-file"
                              className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  aria-hidden="true"
                                  className="w-10 h-10 mb-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  ></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                  <span className="font-semibold">
                                    Click to upload Image
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="image-file"
                                type="file"
                                className="hidden"
                                onChange={handleFile}
                              />
                            </label>
                          </div>
                          {linkImage && (
                            <img
                              src={linkImage}
                              alt={"link Image"}
                              className="h-14 w-14 object-cover rounded-md"
                            />
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
                        </div>
                        <button
                          onClick={addLink}
                          disabled={!linkImage}
                          className="text-white disabled:bg-gray-500 inline-flex items-center justify-center gap-4 bg-[#1d7874] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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
                          Add Link
                        </button>
                      </>
                    )}
                    {links.length > 0 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                        {links.map((link, index) => (
                          <Paper
                            item={link}
                            key={link?.id || index}
                            handleLink={deleteLink}
                          />
                        ))}
                      </div>
                    )}
                    {links.length === 0 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                        <NotFound />
                      </div>
                    )}
                  </>
                )}
                {isActive === "Orders" && (
                  <>
                    {displayedOrders.length > 0 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                        {displayedOrders.map((link) => (
                          <OrderCard item={link} key={link?.id} />
                        ))}
                      </div>
                    )}
                    {displayedOrders.length === 0 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                        <NotFound />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {loaded && <Loading />}
    </>
  );
}

export default Page;
