"use client";
import Wrapper from "@/components/Wrapper";
import axios from "axios";
import React, { useState } from "react";

function Onboarding() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

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
    <Wrapper>
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Lets Begin
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
        Tell me a little about yourself
      </p>
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
              Which package would you like to get?
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
    </Wrapper>
  );
}

export default Onboarding;
