import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClick = (id) => {
    setSelectedContent(id === selectedContent ? null : id); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex-1 px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          📷 Découvrez notre plateforme
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            onClick={() => handleClick(1)}
            style={{ height: '350px' }} 
          >
            <img
              src="/presentation.webp"
              alt="Présentation"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 overflow-y-auto h-[calc(100%-12rem)]">
              {selectedContent === 1 && (
                <>
                  <h3 className="text-lg font-semibold text-indigo-700 mb-2">🎓 Présentation</h3>
                  <p className="text-gray-700 text-sm">
                    Notre plateforme utilise les dernières technologies d’enseignement numérique. Elle propose un environnement d’apprentissage accessible, flexible et adapté à tous les profils d’apprenants et de formateurs.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            onClick={() => handleClick(2)}
            style={{ height: '350px' }}
          >
            <img
              src="/objectif.jpg"
              alt="Objectifs"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 overflow-y-auto h-[calc(100%-12rem)]">
              {selectedContent === 2 && (
                <>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">🎯 Objectifs</h2>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Centraliser les ressources de formation</li>
                    <li>Encourager l’apprentissage autonome</li>
                    <li>Améliorer le suivi et l’interaction pédagogique</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            onClick={() => handleClick(3)}
            style={{ height: '350px' }}
          >
            <img
              src="/fonct.jpg"
              alt="Fonctionnalités"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 overflow-y-auto h-[calc(100%-12rem)]">
              {selectedContent === 3 && (
                <>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">🧩 Fonctionnalités clés</h2>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Cours interactifs avec vidéos et quiz</li>
                    <li>Suivi de progression personnalisé</li>
                    <li>Forum d’échange entre participants</li>
                    <li>Certificats de réussite</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

