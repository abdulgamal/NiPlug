"use client";
import axios from "axios";
import Script from "next/script";
import React, { useState } from "react";

const packagesArray = [
  {
    name: "Graphic Design",
    packages: [
      {
        name: "KES 5,000 per software",
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
        name: "Bronze (KES 8,000)",
        benefits: [
          "4-week beginners’ course",
          "Basics of choreography & movement styles",
        ],
      },
      {
        name: "Silver (KES 15,000)",
        benefits: [
          "6-week intermediate course",
          "Exploring various dance styles (Afro, Hip-hop, Contemporary)",
        ],
      },
      {
        name: "Gold (KES 25,000)",
        benefits: [
          "8-week intensive training",
          "Dance routine creation & performance training",
          "One professional dance video recording",
        ],
      },
      {
        name: "Platinum (KES 40,000)",
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
        name: "Bronze (KES 12,000)",
        benefits: [
          "4-week introduction to DJing",
          "Basics of mixing, beatmatching, and equipment setup",
        ],
      },
      {
        name: "Silver (KES 20,000)",
        benefits: [
          "6-week hands-on training with industry-standard equipment",
          "Genre-blending techniques & crowd control basics",
        ],
      },
      {
        name: "Gold (KES 35,000)",
        benefits: [
          "8-week advanced DJ course",
          "Live performance coaching & playlist curation",
          "One recorded DJ set for portfolio building",
        ],
      },
      {
        name: "Platinum (KES 50,000)",
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
        name: "Bronze (KES 10,000)",
        benefits: [
          "4-week introduction to tech enablement",
          "Basics of AI, automation, and coding",
        ],
      },
      {
        name: "Silver (KES 20,000)",
        benefits: [
          "6-week hands-on coding & AI tools training",
          "Website automation & chatbot development",
        ],
      },
      {
        name: "Gold (KES 35,000)",
        benefits: [
          "8-week specialized training in tech solutions",
          "Digital tools for businesses & content creators",
        ],
      },
      {
        name: "Platinum (KES 50,000)",
        benefits: [
          "12-week deep-dive into AI, coding, and automation",
          "Live projects & startup tech solutions development",
          "Internship & job placement opportunities",
        ],
      },
    ],
  },
  {
    name: "Digital Marketing Packages",
    packages: [
      {
        name: "Bronze (KES 10,000)",
        benefits: [
          "4-week course on social media basics",
          "Introduction to content strategy & analytics",
        ],
      },
      {
        name: "Silver (KES 20,000)",
        benefits: [
          "6-week training on paid ads, SEO, and engagement tactics",
          "Hands-on campaign management",
        ],
      },
      {
        name: "Gold (KES 35,000)",
        benefits: [
          "8-week course on digital marketing strategy",
          "Growth hacking & brand positioning",
        ],
      },
      {
        name: "Platinum (KES 50,000)",
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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(packagesArray[1]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo("");
    const obj = {
      fullname: name + " " + lastName,
      email: email,
      subject: subject,
      message: message,
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
      <div className="flex pt-10 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden container mx-auto">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              Welcome to NiPlug Academy – Unlock Your Creative Potential
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              At NiPlug Academy, we empower creatives with hands-on skills in
              design, music, tech, and marketing. Choose your path and start
              your journey today!
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-teal-500 text-white border-2 border-teal-500">
                <a href="#cats">Get started</a>
              </button>
              <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-teal-500 border-2 border-gray-500">
                <a href="#contacts">Contact Us</a>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGxlYXJuaW5nfGVufDB8fDB8fHww" />
          </div>
        </div>
      </div>
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
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <a
                  href="#pricing"
                  onClick={() => setCurrentPackage(packagesArray[0])}
                >
                  <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Graphic Design / Videography
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Master visual storytelling, from design principles to
                      professional video editing.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                <a
                  href="#pricing"
                  onClick={() => setCurrentPackage(packagesArray[1])}
                >
                  <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Dance
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Learn various dance styles and enhance your movement
                      techniques with expert choreography
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                <a
                  href="#pricing"
                  onClick={() => setCurrentPackage(packagesArray[2])}
                >
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        DJ
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Gain hands-on training in mixing, sound production, and
                      music curation.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <a
                  href="#pricing"
                  onClick={() => setCurrentPackage(packagesArray[3])}
                >
                  <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Tech Enablement
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Explore AI, coding, and digital solutions designed to
                      enhance creativity.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                <a
                  href="#pricing"
                  onClick={() => setCurrentPackage(packagesArray[4])}
                >
                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Digital Marketing
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Develop expertise in branding, social media strategies,
                      SEO, and performance marketing.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="px-4 py-16 min-h-screen" id="pricing">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
              {currentPackage.name}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {currentPackage.packages.map((pac) => (
              <div
                className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl border-gray-200 shadow-gray-300/10 shadow-none m-2 flex-1 max-w-md"
                key={pac.name}
              >
                <h2 className="text-lg sm:text-xl font-medium mb-2">
                  {pac.name}
                </h2>
                {/* <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold">$19</span> /
                  Month
                </p> */}
                <ul className="list-none list-inside mb-6 text-center text-gray-700">
                  {pac.benefits.map((ben) => (
                    <li key={ben}>{ben}</li>
                  ))}
                  {/* <li className="font-bold text-orange-600">1 Website</li>
                  <li>Custom Domain</li>
                  <li>Basic SEO</li>
                  <li>Limited Support</li> */}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
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
                  <label for="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Choose a category</option>
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
