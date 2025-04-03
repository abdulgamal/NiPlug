"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useState } from "react";

const packagesArray = [
  {
    name: "Graphic Design",
    packages: [
      {
        name: "Bronze 5,000",
        accent: "#B87333",
        color: "#3E3E3E",
        benefits: [
          "8-week course (2 session per week)",
          "Graphic design (Adobe Illustrator, Adobe in Design, Adobe Photoshop, Corel Draw, Microsoft Publisher) & video editing (Premiere Pro, CapCut, After Effects, DaVinci Resolve, Final Cut)",
          "Hands-on exercises & practice projects",
        ],
      },
    ],
  },
  {
    name: "Dance Packages",
    packages: [
      {
        name: "Bronze 8,000",
        accent: "#B87333",
        color: "#3E3E3E",
        benefits: [
          "4-week beginners’ course",
          "Basics of choreography & movement styles",
        ],
      },
      {
        name: "Silver 15,000",
        accent: "#D3D3D3",
        color: "#333333",
        benefits: [
          "6-week intermediate course",
          "Exploring various dance styles (Afro, Hip-hop, Contemporary)",
        ],
      },
      {
        name: "Gold 25,000",
        accent: "#E6B800",
        color: "#5A4F3C",
        benefits: [
          "8-week intensive training",
          "Dance routine creation & performance training",
          "One professional dance video recording",
        ],
      },
      {
        name: "Platinum 40,000",
        accent: "#A7A8AA",
        color: "#2E2E2E",
        benefits: [
          "12-week elite training program",
          "Choreography development & stage performance techniques",
          "Brand building for professional dancers",
        ],
      },
    ],
  },
  {
    name: " DJ Packages",
    packages: [
      {
        name: "Bronze 12,000",
        accent: "#B87333",
        color: "#3E3E3E",
        benefits: [
          "4-week introduction to DJing",
          "Basics of mixing, beatmatching, and equipment setup",
        ],
      },
      {
        name: "Silver 20,000",
        accent: "#D3D3D3",
        color: "#333333",
        benefits: [
          "6-week hands-on training with industry-standard equipment",
          "Genre-blending techniques & crowd control basics",
        ],
      },
      {
        name: "Gold 35,000",
        accent: "#E6B800",
        color: "#5A4F3C",
        benefits: [
          "8-week advanced DJ course",
          "Live performance coaching & playlist curation",
          "One recorded DJ set for portfolio building",
        ],
      },
      {
        name: "Platinum 50,000",
        accent: "#A7A8AA",
        color: "#2E2E2E",
        benefits: [
          "10-week mentorship with professional DJs",
          "Club & event performance training",
          "Opportunities for live gigs & industry networking",
        ],
      },
    ],
  },
  {
    name: "Tech Enablement Packages (AI, Coding, Automation)",
    packages: [
      {
        name: "Bronze 10,000",
        accent: "#B87333",
        color: "#3E3E3E",
        benefits: [
          "4-week introduction to tech enablement",
          "Basics of AI, automation, and coding",
        ],
      },
      {
        name: "Silver 20,000",
        accent: "#D3D3D3",
        color: "#333333",
        benefits: [
          "6-week hands-on coding & AI tools training",
          "Website automation & chatbot development",
        ],
      },
      {
        name: "Gold 35,000",
        accent: "#E6B800",
        color: "#5A4F3C",
        benefits: [
          "8-week specialized training in tech solutions",
          "Digital tools for businesses & content creators",
        ],
      },
      {
        name: "Platinum 50,000",
        accent: "#A7A8AA",
        color: "#2E2E2E",
        benefits: [
          "12-week deep-dive into AI, coding, and automation",
          "Live projects & startup tech solutions development",
          "Internship & job placement opportunities",
        ],
      },
    ],
  },
  {
    name: "Digital Transformation Packages",
    packages: [
      {
        name: "Bronze 10,000",
        accent: "#B87333",
        color: "#3E3E3E",
        benefits: [
          "4-week course on social media basics",
          "Introduction to content strategy & analytics",
        ],
      },
      {
        name: "Silver 20,000",
        accent: "#D3D3D3",
        color: "#333333",
        benefits: [
          "6-week training on paid ads, SEO, and engagement tactics",
          "Hands-on campaign management",
        ],
      },
      {
        name: "Gold 35,000",
        accent: "#E6B800",
        color: "#5A4F3C",
        benefits: [
          "8-week course on digital marketing strategy",
          "Growth hacking & brand positioning",
        ],
      },
      {
        name: "Platinum 50,000",
        accent: "#A7A8AA",
        color: "#2E2E2E",
        benefits: [
          "12-week advanced training",
          "Monetization strategies & influencer marketing",
          "Portfolio-building with real clients",
        ],
      },
    ],
  },
];

function Academy() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  // const [currentPackage, setCurrentPackage] = useState(packagesArray[1]);
  // const router = useRouter();

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

      <section className="bg-white lg:grid lg:h-screen lg:place-content-center min-h-screen">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-16 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-16">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Welcome to NiPlug Academy - Unlock Your
              <strong className="text-teal-600"> Creative </strong> &{" "}
              <strong className="text-teal-600"> Digital </strong>
              Potential
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              At NiPlug Academy, we empower creatives and aspiring enterpreneurs
              with hands-on skills in design,music,technology,marketing and
              essential business digital tools. Whether you&apos;re building a
              brand, growing your SMEs, or exploring your passion, there&apos;s
              a path for you. Start your journey today!
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
                href="#cats"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#contacts"
              >
                Contact Us
              </a>
            </div>
          </div>
          <img
            alt=""
            src="/section_D.png"
            className="mx-auto hidden text-gray-900 md:block"
          />
        </div>
      </section>

      <div
        className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 my-8"
        id="cats"
      >
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
          Course Categories
        </h2>
        <p className="mb-12 text-lg text-gray-500">
          Here is a few of the awesome Course Categories we provide.
        </p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <Link
                  href="/onboarding"
                  // onClick={() => setCurrentPackage(packagesArray[4])}
                >
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
                          Develop expertise in branding, social media
                          strategies, SEO, and performance marketing.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <a
                  href="#contacts"
                  // onClick={() => setCurrentPackage(packagesArray[1])}
                >
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
                          Explore AI, coding, and digital solutions designed to
                          enhance creativity.
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
                  // onClick={() => setCurrentPackage(packagesArray[0])}
                >
                  <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
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
                          Graphic Design / Videography
                        </h3>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                          Master visual storytelling, from design principles to
                          professional video editing.
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
      {/* Pricing */}
      {/* <div className="bg-white" id="pricing">
        <div className="container px-6 py-8 mx-auto">
          <div className="xl:items-center xl:-mx-8">
            <div className="flex flex-col items-center xl:items-start xl:mx-8">
              <h1 className="text-2xl font-medium text-gray-800 capitalize lg:text-3xl">
                {currentPackage.name}
              </h1>

              <div className="mt-4">
                <span className="inline-block w-40 h-1 bg-teal-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-teal-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-teal-500 rounded-full"></span>
              </div>

              <p className="mt-4 font-medium text-gray-500">
                You can get All Access by selecting your plan!
              </p>
            </div>

            <div className="flex-1 xl:mx-8">
              <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                {currentPackage.packages.map((pac) => (
                  <div
                    className="max-w-sm mx-auto border rounded-lg md:mx-4"
                    key={pac.name}
                  >
                    <div className="p-6">
                      <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl">
                        {pac.name.split(" ")[0]}
                      </h1>

                      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
                        {pac.name.split(" ")[1]}
                        <span className="text-base font-medium">/Month</span>
                      </h2>

                      <button
                        className="w-full px-4 py-2 mt-6 tracking-wide capitalize transition-colors duration-300 transform rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                        style={{
                          color: pac.color,
                          backgroundColor: pac.accent,
                        }}
                        onClick={() => {
                          router.push("/onboarding");
                        }}
                      >
                        Start Now
                      </button>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="p-6">
                      <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl">
                        What’s included:
                      </h1>

                      <div className="mt-8 space-y-4">
                        {pac.benefits.map((benefit, i) => (
                          <div className="flex items-center" key={i}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-teal-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span className="mx-4 text-gray-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* pricing */}
      <section className="bg-white" id="contacts">
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
                  info@paysokosystems.com
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
    </>
  );
}

export default Academy;
