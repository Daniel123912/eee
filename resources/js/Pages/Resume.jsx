import DefaultLayout from '@/Components/compon/DefaultLayout'
import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

export default function Resume({auth}) {
  const [message, setMessage] = useState("");
  const { data, setData, errors, post } = useForm({
    full_name: '',
    // contactInfo: '',
    // city: '',
    // professionalGoal: '',
    // education: '',
    // workExperience: '',
    // skills: '',
    // courses: '',
    // languages: '',
    // additionalInfo: '',
    // salary: '',
    // age: '',
    // phone: '',
    // email: '',
    // github: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('resumes.store'), {
      onSuccess: () => setMessage("Резюме добавлено"),
      onError: () => setMessage("Не удалось добавить резюме"),
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  }

  return (
    <DefaultLayout auth={auth}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="full_name">
              <Form.Label>ФИО</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                value={data.full_name}
                onChange={handleChange}
                isInvalid={!!errors.full_name}
              />
              {errors.full_name && <Form.Control.Feedback type="invalid">{errors.full_name}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="contactInfo">
              <Form.Label>Контактная информация</Form.Label>
              <Form.Control
                type="text"
                name="contactInfo"
                value={data.contactInfo}
                onChange={handleChange}
                isInvalid={!!errors.contactInfo}
              />
              {errors.contactInfo && <Form.Control.Feedback type="invalid">{errors.contactInfo}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>Город проживания</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={data.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              {errors.city && <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="professionalGoal">
              <Form.Label>Профессиональная цель</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="professionalGoal"
                value={data.professionalGoal}
                onChange={handleChange}
                isInvalid={!!errors.professionalGoal}
              />
              {errors.professionalGoal && <Form.Control.Feedback type="invalid">{errors.professionalGoal}</Form.Control.Feedback>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="education">
              <Form.Label>Образование</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="education"
                value={data.education}
                onChange={handleChange}
                isInvalid={!!errors.education}
              />
              {errors.education && <Form.Control.Feedback type="invalid">{errors.education}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="workExperience">
              <Form.Label>Опыт работы</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="workExperience"
                value={data.workExperience}
                onChange={handleChange}
                isInvalid={!!errors.workExperience}
              />
              {errors.workExperience && <Form.Control.Feedback type="invalid">{errors.workExperience}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="skills">
              <Form.Label>Навыки</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="skills"
                value={data.skills}
                onChange={handleChange}
                isInvalid={!!errors.skills}
              />
              {errors.skills && <Form.Control.Feedback type="invalid">{errors.skills}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="courses">
              <Form.Label>Курсы и сертификаты</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="courses"
                value={data.courses}
                onChange={handleChange}
                isInvalid={!!errors.courses}
              />
              {errors.courses && <Form.Control.Feedback type="invalid">{errors.courses}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="languages">
              <Form.Label>Языки</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="languages"
                value={data.languages}
                onChange={handleChange}
                isInvalid={!!errors.languages}
              />
              {errors.languages && <Form.Control.Feedback type="invalid">{errors.languages}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="additionalInfo">
              <Form.Label>Дополнительная информация</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="additionalInfo"
                value={data.additionalInfo}
                onChange={handleChange}
                isInvalid={!!errors.additionalInfo}
              />
              {errors.additionalInfo && <Form.Control.Feedback type="invalid">{errors.additionalInfo}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="salary">
              <Form.Label>Зарплата</Form.Label>
              <Form.Control
                type="number"
                name="salary"
                value={data.salary}
                onChange={handleChange}
                isInvalid={!!errors.salary}
              />
              {errors.salary && <Form.Control.Feedback type="invalid">{errors.salary}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Возраст</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={data.age}
                onChange={handleChange}
                isInvalid={!!errors.age}
              />
              {errors.age && <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              {errors.phone && <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group controlId="github">
              <Form.Label>GitHub</Form.Label>
              <Form.Control
                type="text"
                name="github"
                value={data.github}
                onChange={handleChange}
                isInvalid={!!errors.github}
              />
              {errors.github && <Form.Control.Feedback type="invalid">{errors.github}</Form.Control.Feedback>}
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Добавить резюме
        </Button>
        {message && <div className="text-red-500">{message}</div>}
      </Form>
    </DefaultLayout>
  );
}
