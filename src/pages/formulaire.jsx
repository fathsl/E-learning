import React, { useState } from 'react';

export default function FormationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    courses: [''],
    exams: [''],
    quizzes: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeField = (field, index) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: '',
      description: '',
      image: '',
      courses: [''],
      exams: [''],
      quizzes: ['']
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Ajouter une formation</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nom de la formation"
        className="w-full p-3 border rounded-lg"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Lien de l'image (ex: /images/logo.png)"
        className="w-full p-3 border rounded-lg"
      />

      {/* Cours dynamiques */}
      <div>
        <label className="block font-semibold">Cours :</label>
        {formData.courses.map((course, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              value={course}
              onChange={(e) => handleArrayChange(i, 'courses', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button type="button" onClick={() => removeField('courses', i)} className="bg-red-500 text-white px-2 rounded">
              X
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addField('courses')} className="mt-2 px-3 py-1 bg-green-500 text-white rounded">
          + Ajouter un cours
        </button>
      </div>

      {/* Examens dynamiques */}
      <div>
        <label className="block font-semibold">Examens :</label>
        {formData.exams.map((exam, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              value={exam}
              onChange={(e) => handleArrayChange(i, 'exams', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button type="button" onClick={() => removeField('exams', i)} className="bg-red-500 text-white px-2 rounded">
              X
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addField('exams')} className="mt-2 px-3 py-1 bg-green-500 text-white rounded">
          + Ajouter un examen
        </button>
      </div>

      {/* Quizzes dynamiques */}
      <div>
        <label className="block font-semibold">Quizzes :</label>
        {formData.quizzes.map((quiz, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              value={quiz}
              onChange={(e) => handleArrayChange(i, 'quizzes', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button type="button" onClick={() => removeField('quizzes', i)} className="bg-red-500 text-white px-2 rounded">
              X
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addField('quizzes')} className="mt-2 px-3 py-1 bg-green-500 text-white rounded">
          + Ajouter un quiz
        </button>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Enregistrer la formation
      </button>
    </form>
  );
}
