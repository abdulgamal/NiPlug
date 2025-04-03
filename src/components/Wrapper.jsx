import React from "react";

function Wrapper({ children }) {
  return (
    <section className="h-full container mx-auto">
      <div className="lg:grid lg:h-full lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/section_D.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <section className="flex items-center justify-center px-8 py-8 sm:px-10 lg:col-span-7 lg:px-10 lg:py-12 xl:col-span-6">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </section>
  );
}

export default Wrapper;
