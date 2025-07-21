import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const images = [
    { src: "/1.jpg", alt: "Formations interactives", caption: "Formations interactives" },
    { src: "/2.jpg", alt: "Suivi personnalisé", caption: "Suivi personnalisé" },
    { src: "/3.jpg", alt: "Modules variés", caption: "Modules variés" },
    { src: "/4.jpg", alt: "Certificats officiels", caption: "Certificats officiels" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 px-8 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Découvrez nos services de formation
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Une plateforme moderne, intuitive et performante pensée pour tous les apprenants.
        </p>

        {/* Grille d’images haut de gamme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-2 text-center">
                <p className="text-sm font-medium text-gray-800">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
