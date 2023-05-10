import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen container mx-auto">
        <div className=" grid md:grid-cols-2 gap-10">
          <div className="h-screen flex flex-col justify-center px-4">
            <div className="max-w-md">
              <div className="mb-5">
                <p className="text-5xl font-bold tracking-widest">Not just a</p>
                <p className="text-5xl my-3 font-bold tracking-widest">
                  link in bio
                </p>
              </div>
              <p className="text-base md:text-2xl tracking-wider">
                Make everything you promote on social searchable to help your
                followers find exactly what they're looking for.
              </p>
            </div>
            <div className="mt-5">
              <Button />
            </div>
          </div>
          <div className="md:h-screen">
            <img
              src="banner1.webp"
              alt="banner-image"
              className="md:rounded-2xl"
            />
          </div>
        </div>
        <div className="bg-[#F4F4F4] min-h-screen p-5 md:rounded-2xl my-10 flex flex-col justify-around items-center">
          <h2 className="text-4xl text-center mb-3 font-bold text-gray-800">
            Any of these sound familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 my-3">
            <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
              <h5 className="font-bold text-gray-800 mb-5 text-lg md:text-2xl">
                Your followers are always asking "where can I get that?" 🤔
              </h5>
              <p className="text-gray-500 tracking-wide">
                We provide a way to link to any product, anywhere, right from
                your shorts, videos and podcasts. ✌🏻
              </p>
            </div>
            <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
              <h5 className="font-bold text-gray-800 mb-5 text-lg md:text-2xl">
                Your brand partners keep asking you to change your link in bio
                😣
              </h5>
              <p className="text-gray-500 tracking-wide">
                Your brand partners keep asking you to change your link in bio
                😣 Offer your affiliates a long-standing code that will always
                be searchable from your link in bio. 🙌🏻
              </p>
            </div>
            <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
              <h5 className="font-bold text-gray-800 mb-5 text-lg md:text-2xl">
                Your current link in bio is so stacked with links it's
                impossible to navigate 🤯
              </h5>
              <p className="text-gray-500 tracking-wide">
                Get a single, clean, aesthetically pleasing search bar connected
                to unlimited links (with the option to add permanent ones).{" "}
              </p>
            </div>
          </div>
          <Button />
        </div>
        <div className="my-12 min-h-screen grid md:grid-cols-2 gap-10">
          <div className="px-4 mb-4 pt-10">
            <p className="text-2xl md:text-5xl font-bold tracking-widest">
              With NiPlug,
            </p>
            <p className="text-2xl md:text-5xl font-bold tracking-widest my-1 md:my-3">
              get ready for:
            </p>
            <div className="mt-5">
              <div className="flex items-center gap-4 border-b border-gray-300 py-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F36050] font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <p className="text-xl font-bold">
                  Higher traffic to your affiliate links
                </p>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-300 py-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F36050] font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <p className="text-xl font-bold">Boosted revenue</p>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-300 py-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F36050] font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <p className="text-xl font-bold">
                  Increased brand partnership requests
                </p>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-300 py-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F36050] font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <p className="text-xl font-bold">
                  More trust with your community and future followers
                </p>
              </div>
              <div className="flex items-center gap-4 py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F36050] font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <p className="text-xl font-bold">
                  Better engagement with your followers
                </p>
              </div>
            </div>
            <Button />
          </div>
          <div className="order-first">
            <img
              src="banner2.webp"
              alt="banner-img"
              className="md:rounded-2xl"
            />
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#131569] to-[#151B7B] px-5 md:rounded-3xl mt-5 flex flex-col items-center justify-around py-10 min-h-screen">
          <h2 className="text-gray-300 text-center font-bold text-3xl tracking-widest">
            How it works
          </h2>
          <div className="mt-5 flex justify-between items-center gap-10">
            <div className="hidden md:block">
              <img src="banner3.gif" alt="banner-image" className="w-[50vh]" />
            </div>
            <div>
              <div className="border-b border-gray-400 flex items-center gap-5 py-7 w-[40vh] mb-7">
                <p className="font-bold text-4xl text-gray-100">1</p>
                <div>
                  <p className="font-bold text-2xl text-gray-100">Create</p>
                  <p className="text-base text-gray-100 tracking-wider">
                    a code for what you want to promote and assign it a URL.
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-400 flex items-center gap-5 py-7 w-[40vh] mb-7">
                <p className="font-bold text-4xl text-gray-100">2</p>
                <div>
                  <p className="font-bold text-2xl text-gray-100">Share</p>
                  <p className="text-base text-gray-100 tracking-wider">
                    your code in text, on a sticker, or in your videos.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 py-7 w-[40vh] mb-5">
                <p className="font-bold text-4xl text-gray-100">3</p>
                <div>
                  <p className="font-bold text-2xl text-gray-100">Grow</p>
                  <p className="text-base text-gray-100 tracking-wider">
                    your audience with a platform that lets followers search for
                    whatever they are looking for—easy as that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
