import ServicesCard from "@/components/ServicesCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import React from "react";

function ServicePage() {
  return (
    <div>
      <div className="container relative flex flex-col justify-between max-w-6xl px-10 mx-auto xl:px-0 my-8">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
          NiPlug Studios Services
        </h2>
        <p className="mb-12 text-lg text-gray-500">
          Choose the service you are interested in or reach out to us through
          our WhatsApp button
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
      <WhatsAppButton
        phoneNumber="+254794403000" // Replace with your number (international format without +)
        message="Hi, I would like to know more about your services!"
      />
    </div>
  );
}

export default ServicePage;
