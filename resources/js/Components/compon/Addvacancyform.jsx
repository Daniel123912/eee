// Ваш React-компонент, например AddVacancyForm.js

import React, { useState } from 'react';
import axios from 'axios';

const Addvacancyform = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    // Другие поля вакансии, если необходимо
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/add-vacancy', formData);
      console.log(response.data); // Ответ от сервера HH API
      // Дополнительная логика после успешного добавления вакансии
    } catch (error) {
      console.error('Error adding vacancy:', error);
      // Обработка ошибок
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Salary"
        required
      />
      {/* Другие поля вакансии */}
      <button type="submit">Add Vacancy</button>
    </form>
  );
};

export default Addvacancyform;
