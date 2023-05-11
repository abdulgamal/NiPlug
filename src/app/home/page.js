import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

export const products = [
  {
    id: 1,
    title: "Dope Mocassins",
    img: "https://images.unsplash.com/photo-1678784973551-f38208de2529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Dope Mocassin",
    cat: "dress",
  },
  {
    id: 2,
    title: "Borderless Barber Shop",
    img: "https://images.unsplash.com/photo-1682957376808-dcb27d61f95e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    code: "Borderless",
    cat: "hang",
  },
  {
    id: 3,
    title: "Dope Jordans 3",
    img: "https://images.unsplash.com/photo-1679872995990-a9811773f3d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    code: "Dope Nikes",
    cat: "dress",
  },
  {
    id: 13,
    title: "Dope Mocassins",
    img: "https://images.unsplash.com/photo-1678784973551-f38208de2529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Dope Mocassin",
    cat: "dress",
  },
  {
    id: 4,
    title: "Kanisa",
    img: "https://images.unsplash.com/photo-1682789196658-ef1c03fd2110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Kanisa",
    cat: "party",
  },
  {
    id: 5,
    title: "Nuria Library",
    img: "https://images.unsplash.com/photo-1682445392345-e764214b10e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Nuria",
    cat: "hang",
  },
  {
    id: 15,
    title: "Borderless Barber Shop",
    img: "https://images.unsplash.com/photo-1682957376808-dcb27d61f95e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    code: "Borderless",
    cat: "hang",
  },
  {
    id: 6,
    title: "Burj Khalifa",
    img: "https://images.unsplash.com/photo-1682414593590-767a4016be89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Dubai",
    cat: "vacation",
  },
  {
    id: 7,
    title: "Watamu",
    img: "https://images.unsplash.com/photo-1682687982141-0143020ed57a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    code: "Watamu",
    cat: "vacation",
  },
  {
    id: 8,
    title: "Santorini",
    img: "https://images.unsplash.com/photo-1682700370797-f9905bf866b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Santorini",
    cat: "vacation",
  },
  {
    id: 9,
    title: "Nodo Eggs",
    img: "https://images.unsplash.com/photo-1636522637419-50322e27b0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    code: "Poached Eggs",
    cat: "eat",
  },
  {
    id: 10,
    title: "Pink mushroom choyala",
    img: "https://images.unsplash.com/photo-1682423199837-e1f233a13de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    code: "Bitten Rice",
    cat: "eat",
  },
  {
    id: 14,
    title: "Nodo Eggs",
    img: "https://images.unsplash.com/photo-1636522637419-50322e27b0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    code: "Poached Eggs",
    cat: "eat",
  },
  {
    id: 11,
    title: "Sharubati",
    img: "https://images.unsplash.com/photo-1681821671107-751c9f0ce619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Cocktail",
    cat: "drink",
  },
  {
    id: 12,
    title: "Kahawa Tungu",
    img: "https://images.unsplash.com/photo-1681477578092-979cc57ba5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Kahwa Tungu",
    cat: "drink",
  },
  {
    id: 16,
    title: "Sharubati",
    img: "https://images.unsplash.com/photo-1681821671107-751c9f0ce619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    code: "Cocktail",
    cat: "drink",
  },
];

export const cats = [
  {
    id: 1,
    title: "How am dressed",
    bgImg:
      "https://plus.unsplash.com/premium_photo-1675186049406-3fabe5f387eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    slug: "dress",
  },
  {
    id: 2,
    title: "What am eating",
    bgImg:
      "https://images.unsplash.com/photo-1682655012898-28f5c96a4c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    slug: "eat",
  },
  {
    id: 3,
    title: "What am drinking",
    bgImg:
      "https://images.unsplash.com/photo-1680762299092-6d972ab7f25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    slug: "drink",
  },
  {
    id: 4,
    title: "Where am hanging out",
    bgImg:
      "https://images.unsplash.com/photo-1682957376808-dcb27d61f95e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    slug: "hang",
  },
  {
    id: 5,
    title: "My hair style",
    bgImg:
      "https://images.unsplash.com/photo-1682439263455-ad62d50ec0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    slug: "hair",
  },
  {
    id: 6,
    title: "Where am vacationing",
    bgImg:
      "https://images.unsplash.com/photo-1682700371999-01262207ee4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    slug: "vacation",
  },
  {
    id: 7,
    title: "Where am partying at",
    bgImg:
      "https://images.unsplash.com/photo-1682946618072-fb615b0d0961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    slug: "party",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Choose from the categories
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            {cats.map((cat) => (
              <div
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                key={cat.id}
                style={{
                  backgroundImage: `url(
                ${cat.bgImg}
              )`,
                }}
              >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
                    {cat.title}
                  </h2>
                  <Link
                    href={`/product/${cat.slug}`}
                    className="inline-flex items-center gap-0.5 rounded-full mt-2 bg-blue-500 px-2 py-1 text-xs font-semibold text-white"
                  >
                    Peep
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
