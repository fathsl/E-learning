import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const formations = [
  {
    id: 'react',
    name: 'Formation React',
    description: 'Apprenez à construire des applications web modernes avec React.',
    courses: [
      'Introduction à React',
      'Composants et Props',
      'State et Cycle de Vie',
      'Hooks avancés',
      'Gestion d’état avec Redux',
    ],
    exams: ['Examen de mi-parcours', 'Examen final'],
    quizzes: ['Quiz JSX', 'Quiz State & Props', 'Quiz Hooks'],
  },
  {
    id: 'python',
    name: 'Formation Python',
    description: 'Maîtrisez le langage Python pour le développement, l’analyse de données, et plus.',
    courses: [
      'Syntaxe et Variables',
      'Structures de contrôle',
      'Fonctions et Modules',
      'Programmation Orientée Objet',
      'Introduction à la Data Science',
    ],
    exams: ['Examen pratique', 'Examen théorique'],
    quizzes: ['Quiz syntaxe', 'Quiz fonctions', 'Quiz POO'],
  },
  {
    id: 'design',
    name: 'Formation UX/UI',
    description: 'Apprenez à concevoir des interfaces utilisateur attractives et ergonomiques.',
    courses: [
      'Principes de design',
      'Psychologie utilisateur',
      'Wireframing et prototypage',
      'Design responsive',
      'Tests utilisateurs',
    ],
    exams: ['Projet final', 'Examen théorique'],
    quizzes: ['Quiz design', 'Quiz prototypage', 'Quiz ergonomie'],
  },
];

const Formation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Nos Formations Disponibles</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map(({ id, name, description, courses, exams, quizzes }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{name}</h2>
              <p className="text-gray-700 mb-4">{description}</p>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-1">Cours :</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-1">Examens :</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {exams.map((exam, index) => (
                    <li key={index}>{exam}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-1">Quiz :</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {quizzes.map((quiz, index) => (
                    <li key={index}>{quiz}</li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/formation/${id}`}
                className="inline-block mt-3 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Voir Détails
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Formation;
