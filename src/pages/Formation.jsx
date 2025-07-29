import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FormationForm from './formulaire';
import { useNavigate } from 'react-router-dom';

const formations = [
  {
    id: 'react',
    name: 'Formation React',
    image: '/React.png',
    description: 'Apprenez à construire des applications web modernes et dynamiques avec React.',
    courses: [
      'Introduction à React et JSX',
      'Création de composants et gestion des props',
      'State, cycle de vie et gestion d’événements',
      'Hooks avancés',
      'Routing avec React Router',
      'Gestion d’état avancée avec Redux',
      'Optimisation des performances',
      'Déploiement d’applications React'
    ],
    exams: [
      'Examen pratique : Création d’une application React',
      'Examen final : Application complète avec Redux'
    ],
    quizzes: [
      'Quiz JSX & Composants',
      'Quiz Hooks et Cycle de vie',
      'Quiz Redux et gestion d’état'
    ]
  },
  {
    id: 'springboot',
    name: 'Formation Spring Boot',
    image: '/spring boot.png',
    description: 'Maîtrisez la création d’API et d’applications robustes avec Spring Boot.',
    courses: [
      'Introduction à Spring & Spring Boot',
      'Configuration et architecture des projets Spring',
      'Gestion des dépendances et beans',
      'Développement d’API REST',
      'Connexion à une base de données (JPA & Hibernate)',
      'Sécurité avec Spring Security',
      'Tests unitaires et d’intégration',
      'Déploiement et maintenance'
    ],
    exams: [
      'Examen pratique : Création d’un service REST',
      'Examen final : API complète sécurisée'
    ],
    quizzes: [
      'Quiz Inversion of Control & Beans',
      'Quiz API REST',
      'Quiz Sécurité et tests'
    ]
  },
  {
    id: 'angular',
    name: 'Formation Angular',
    image: '/angular.png',
    description: 'Développez des applications performantes et modulaires avec Angular.',
    courses: [
      'Introduction à Angular et TypeScript',
      'Structure et architecture d’un projet Angular',
      'Composants, modules et directives',
      'Data binding et gestion des formulaires',
      'Services et injection de dépendances',
      'Communication avec les API (HttpClient)',
      'Routing et navigation',
      'Tests et déploiement'
    ],
    exams: [
      'Examen pratique : Application CRUD avec Angular',
      'Examen final : Application modulaire avec API'
    ],
    quizzes: [
      'Quiz Composants et Modules',
      'Quiz Services & Injection',
      'Quiz Routing et API'
    ]
  },
  {
    id: 'python',
    name: 'Formation Python',
    image: '/python.png',
    description: 'Maîtrisez Python pour le développement, l’automatisation et l’analyse de données.',
    courses: [
      'Introduction à Python et installation',
      'Variables, types de données et opérateurs',
      'Structures de contrôle (boucles, conditions)',
      'Fonctions, modules et packages',
      'Programmation orientée objet',
      'Manipulation de fichiers et exceptions',
      'Introduction à la Data Science (NumPy, Pandas)',
      'Projet pratique : mini-application Python'
    ],
    exams: [
      'Examen pratique : Script Python',
      'Examen final : Application complète'
    ],
    quizzes: [
      'Quiz Variables et Structures',
      'Quiz Fonctions et Modules',
      'Quiz POO et Data Science'
    ]
  },
  {
    id: 'design',
    name: 'Formation UX/UI',
    image: '/ui ux.png',
    description: 'Apprenez à concevoir des interfaces modernes, ergonomiques et attractives.',
    courses: [
      'Introduction à l’UX et UI Design',
      'Principes fondamentaux du design visuel',
      'Psychologie utilisateur et parcours client',
      'Wireframing et prototypage (Figma, Adobe XD)',
      'Design responsive et accessibilité',
      'Design systems et guidelines',
      'Tests utilisateurs et amélioration continue',
      'Projet final : Conception d’une interface complète'
    ],
    exams: [
      'Projet pratique : Prototype interactif',
      'Examen théorique : Principes d’UX/UI'
    ],
    quizzes: [
      'Quiz Principes UX',
      'Quiz Prototypage',
      'Quiz Accessibilité et Responsive Design'
    ]
  }
];

const Formation = () => {
  const [openId, setOpenId] = useState(null);
  const [activeTab, setActiveTab] = useState('courses');
  const [search, setSearch] = useState('');
const navigate = useNavigate();
  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
    setActiveTab('courses');
  };

  const filteredFormations = formations.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Nos Formations</h1>

        {/* Barre de recherche */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Rechercher une formation..."
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
   <button
      onClick={() => navigate('/Formulaire')}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Go to Formulair
    </button>

        </div>

        {/* Cartes formations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormations.map(({ id, name, image, description, courses, exams, quizzes }) => (
            <div key={id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <img src={image} alt={name} className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-blue-600 text-center">{name}</h2>
              <p className="text-gray-700 text-center mb-4">{description}</p>

              <button
                onClick={() => toggleDetails(id)}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {openId === id ? 'Masquer les détails' : 'Voir les détails'}
              </button>

              {openId === id && (
                <div className="mt-4 animate-fadeIn">
                  {/* Onglets */}
                  <div className="flex gap-3 mb-4">
                    {['courses', 'exams', 'quizzes'].map((tab) => (
                      <button
                        key={tab}
                        className={`px-4 py-2 rounded-lg ${
                          activeTab === tab
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab === 'courses' ? 'Cours' : tab === 'exams' ? 'Examens' : 'Quizzes'}
                      </button>
                    ))}
                  </div>

                  {/* Contenu onglets */}
                  {activeTab === 'courses' && (
                    <ul className="list-disc list-inside text-gray-600">
                      {courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'exams' && (
                    <ul className="list-disc list-inside text-gray-600">
                      {exams.map((exam, index) => (
                        <li key={index}>{exam}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'quizzes' && (
                    <ul className="list-disc list-inside text-gray-600">
                      {quizzes.map((quiz, index) => (
                        <li key={index}>{quiz}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Formation;

