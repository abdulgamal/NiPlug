import React from "react";

function NipSection({
  title,
  content,
  image = "https://niplug.com/assets/image/others/Rio-App-3.png",
  left,
  right,
  link,
}) {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
      {left && (
        <img
          alt="Violin"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tr-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tr-[60px]"
          src={image}
        />
      )}
      {right && (
        <img
          alt="Violin"
          className="block md:hidden h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          src={image}
        />
      )}
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>

          <p className="text-gray-500 md:mt-4">{content}</p>

          {link && (
            <div className="mt-4 md:mt-8">
              <a
                href="https://advertising.niplug.com/"
                target="_blank"
                className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#010101] py-3 px-8 rounded-full gap-2 my-2"
              >
                View Ad Plugs
              </a>
            </div>
          )}
        </div>
      </div>
      {right && (
        <img
          alt="Violin"
          className="hidden md:block h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          src={image}
        />
      )}
    </section>
  );
}

export default NipSection;
