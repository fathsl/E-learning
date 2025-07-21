import React from "react";
import BubbleSearch from "../components/BubbleSearch";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";


// Composant principal Home
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">Bienvenue sur RNB Formation</h1>
          <p className="text-lg mb-6">
            Gérer facilement vos formations, utilisateurs, modules et progrès à partir de cette plateforme moderne.
          </p>
          <div className="flex justify-center gap-6 mt-10">
  <img src="1.jpg" alt="Image d’accueil" className="w-[320px] h-[200px] object-cover rounded-lg shadow" />
  <img src="2.jpg" alt="Image d’accueil 2" className="w-[320px] h-[200px] object-cover rounded-lg shadow" />
</div>


        </main>
      </div>
      
      <Footer />
    </div>
    
  );
  
};

export default Home;
