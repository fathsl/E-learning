import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  // État du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Gestion du changement de champ
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Votre message a été envoyé !");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Barre de navigation */}
      <Navbar />

      {/* Contenu principal animé */}
      <motion.main
        className="flex-1 max-w-3xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Titre */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contactez-nous
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-center text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Une question ? Besoin d'aide ? Remplissez le formulaire ci-dessous.
        </motion.p>

        {/* Formulaire de contact */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Nom */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sujet */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Sujet</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Bouton envoyer */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Envoyer le message
          </motion.button>
        </motion.form>

        {/* Tableau d'informations de contact en bas */}
        <div className="w-full text-xs mt-20">
          <table className="table-auto w-full border-separate border-spacing-x-6">
            <thead className="text-left text-red-600 font-bold">
              <tr>
                <th>Adresse :</th>
                <th>Téléphone :</th>
                <th>Email :</th>
                <th>Horaires administratifs :</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 align-top">
              <tr>
                <td>
                  kalaa kbira<br />
                  Sousse 4021
                </td>
                <td>
                  (+216) 26 224 552<br />
                  (+216) 25 025 090<br />
                  (+216) 56 233 617
                </td>
                <td>
                  <span className="text-green-700 font-semibold">Etudiants</span><br />
                  nada.kahloul@polytechnicien.tn
                  rahma.ben ayada@polytechnicien.tn<br />
                  <span className="text-green-700 font-semibold">Enseignants</span><br />
                  RH_CV@sousse.com.<br />
                  <span className="text-green-700 font-semibold">Partenaires</span><br />
                  info_contact@RNBsousse.com.tn
                </td>
                <td>
                  Lundi – Vendredi : 08:00 – 18:00<br />
                  Samedi : 08:00 – 13:00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default Contact;


  