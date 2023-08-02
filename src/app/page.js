"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useContext } from "react";
import { AuthenticateContext } from "../../context/AuthContext";
import Landing from "@/components/Landing";
import Home from "@/components/Home";

export default function HomePage() {
  const { user } = useContext(AuthenticateContext);
  return (
    <>
      <Navbar />
      {user ? <Home /> : <Landing />}
      <Footer />
    </>
  );
}
