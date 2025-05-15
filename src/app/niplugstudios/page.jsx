"use client";
import axios from "axios";
import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";
import { useOnBoardingContext } from "../../../context/OnBoarding";
import { ToastContainer } from "react-toastify";
import ServicesCard from "@/components/ServicesCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import StudioNav from "@/components/StudioNav";

function Academy() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsDigital } = useOnBoardingContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo("");
    const obj = {
      fullname: name + " " + lastName,
      email: email,
      subject: subject,
      message: message,
      phone: phone,
    };

    try {
      const response = await axios.post(
        "https://contact-api-5l47.onrender.com/submit-form",
        obj
      );

      if (response.status == 200) {
        setName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setPhone("");
        setInfo(response.data);
      }
    } catch (error) {
      setInfo(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-X6QMWQL048"
      />
      <Script
        id="google-analytics-product"
        strategy="afterInteractive"
      >{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X6QMWQL048');`}</Script>

      <ToastContainer />
      <StudioNav />
      <section className="bg-[#FBF2B8] lg:grid lg:place-content-center min-h-screen">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-24 sm:px-6 sm:py-16 grid md:grid-cols-2 md:items-center gap-10 lg:px-8 lg:py-16">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              NiPlug Studios & Academy.
              <strong className="text-teal-600"> Create </strong> .{" "}
              <strong className="text-teal-600"> Learn </strong> .{" "}
              <strong className="text-teal-600"> Grow </strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              From content production to hands-on training in creative and tech
              skills, we turn ideas into opportunities. Start today!
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link
                className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
                href="/services"
              >
                Get Started
              </Link>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#contacts"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div>
            <img
              alt=""
              src="/section_D.png"
              className="mx-auto text-gray-900 h-96 aspect-auto md:block"
            />
          </div>
        </div>
      </section>

      <div
        id="services"
        className="container relative flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 my-8"
      >
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
          NiPlug Studios Services
        </h2>
        <p className="mb-12 text-lg text-gray-500">
          Here is a few of the awesome Services we provide.
        </p>

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <ServicesCard
            title={"Videography + Event Videography"}
            imageUrl="https://africadslive.com/wp-content/uploads/2025/04/pexels-brunomassao-2873486-scaled.jpg"
          />
          <ServicesCard
            title={"Voiceover"}
            imageUrl="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9pY2VvdmVyfGVufDB8fDB8fHww"
          />
          <ServicesCard
            title={"Photography + Event Photography"}
            imageUrl="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
          />
          <ServicesCard
            title={"Podcast"}
            imageUrl="https://plus.unsplash.com/premium_photo-1683140721527-262985d7c8ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <ServicesCard
            title={"Ad Creation"}
            imageUrl="https://www.shutterstock.com/shutterstock/videos/3693710249/thumb/12.jpg?ip=x480"
          />
          <ServicesCard
            title={"Content Studio"}
            imageUrl="https://plus.unsplash.com/premium_photo-1664699106133-c338e54d395b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGlvc3xlbnwwfHwwfHx8MA%3D%3D"
          />
          <ServicesCard
            title={"Drone Services"}
            imageUrl="https://images.unsplash.com/photo-1697537335900-88bd20e24822?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJvbmUlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
          />
          <ServicesCard
            title={"Rent Our Space"}
            imageUrl="https://img.freepik.com/premium-vector/vacant-place-banner-search-leader-loft-style-table-workplace-books-documents-laptop-vector_174639-30356.jpg"
          />
          <ServicesCard
            title={"Live Streaming"}
            imageUrl="https://img.freepik.com/free-vector/gradient-instagram-live-user-frame-set_23-2149487373.jpg"
          />
        </div>
      </div>

      <section className="bg-teal-700">
        <div
          className="container relative flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 py-8"
          id="academy"
        >
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
            NiPlug Academy Course Categories
          </h2>
          <p className="mb-12 text-lg text-[#FBF2B8]">
            Here is a few of the awesome Course Categories we provide.
          </p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <Link href="/onboarding" onClick={() => setIsDigital(true)}>
                    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                          <h3 className="mt-0.5 text-lg text-white">
                            Digital Transformation
                          </h3>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            Gain hands-on experience and learn the benefits of
                            POS, ERP and E-Commerce to transform your business
                            and thrive in the digital world
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <Link href="/onboarding" onClick={() => setIsDigital(false)}>
                    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                          <h3 className="mt-0.5 text-lg text-white">
                            Graphic Design / Videography
                          </h3>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            Master visual storytelling, from design principles
                            to professional video editing.
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <a
                    href="#contacts"
                    // onClick={() => setCurrentPackage(packagesArray[2])}
                  >
                    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1526979118433-63c7344f06f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8REp8ZW58MHx8MHx8fDA%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 h-full w-full object-cover bg-black/40 flex justify-center items-center">
                        <p className="text-3xl font-bold text-white tracking-wider">
                          Coming Soon
                        </p>
                      </div>

                      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                          <h3 className="mt-0.5 text-lg text-white">DJ</h3>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            Gain hands-on training in mixing, sound production,
                            and music curation.
                          </p>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <a
                    href="#contacts"
                    // onClick={() => setCurrentPackage(packagesArray[3])}
                  >
                    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2h8ZW58MHx8MHx8fDA%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 h-full w-full object-cover bg-black/40 flex justify-center items-center">
                        <p className="text-3xl font-bold text-white tracking-wider">
                          Coming Soon
                        </p>
                      </div>

                      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                          <h3 className="mt-0.5 text-lg text-white">
                            Tech Enablement
                          </h3>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            Explore AI, coding, and digital solutions designed
                            to enhance creativity.
                          </p>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <a href="#contacts">
                    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1546427660-eb346c344ba5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRhbmNlfGVufDB8fDB8fHww"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 h-full w-full object-cover bg-black/40 flex justify-center items-center">
                        <p className="text-3xl font-bold text-white tracking-wider">
                          Coming Soon
                        </p>
                      </div>

                      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                          <h3 className="mt-0.5 text-lg text-white">Dance</h3>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            Learn various dance styles and enhance your movement
                            techniques with expert choreography
                          </p>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FBF2B8]" id="contacts">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-teal-500">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
              Chat to our friendly team
            </h1>

            <p className="mt-3 text-gray-500">
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-teal-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-teal-500">
                  niplug@paysokosystems.com
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-teal-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-teal-500">
                  Bishop Magua Building, 3rd Floor.
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-teal-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-teal-500">+254794403000</p>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="0712345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option value="" selected>
                      Choose a category
                    </option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Dance">Dance</option>
                    <option value="DJ">DJ</option>
                    <option value="Tech Enablement">Tech Enablement</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Videography">
                      Videography + Event Videography
                    </option>
                    <option value="Voiceover">Voiceover</option>
                    <option value="Photography">
                      Photography + Event Photography
                    </option>
                    <option value="Podcast">Podcast</option>
                    <option value="Ad Creation">Ad Creation</option>
                    <option value="Content Studio">Content Studio</option>
                    <option value="Drone Services">Drone Services</option>
                    <option value="Rent space">Rent Our Space</option>
                    <option value="Live Streaming">Live Streaming</option>
                  </select>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
                {info && <p className="text-xl text-teal-500 my-4">{info}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton
        phoneNumber="+254794403000" // Replace with your number (international format without +)
        message="Hi, I would like to know more about your services!"
      />
    </>
  );
}

export default Academy;
