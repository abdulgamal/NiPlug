"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NipHome from "@/components/NipHome";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* {user ? <Home /> : <Landing />} */}
      <NipHome />
      <Footer />
    </>
  );
}
