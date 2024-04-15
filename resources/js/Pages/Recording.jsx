import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Registration() {
  const [showPassportBlock, setShowPassportBlock] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    surname: '',
    name: '',
    patronymic: '',
    job: '',
    country: '',
    inn: '',
    phone_number: '',
    telegram: '',
    
    password_confirmation: '',
    remember: false,
  });

  const togglePassportBlock = () => {
    setShowPassportBlock(!showPassportBlock);
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="surname">Фамилия:</label>
        <input type="text" name="surname" value={data.surname} onChange={e => setData('surname', e.target.value)} />
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" value={data.name} onChange={e => setData('name', e.target.value)} required />
        <label htmlFor="patronymic">Отчество:</label>
        <input type="text" id="patronymic" name="patronymic" value={data.patronymic} onChange={e => setData('patronymic', e.target.value)} />
        <label htmlFor="job">Интересующая вакансия:</label>
        <select id="job" name="job" required value={data.job} onChange={e => setData('job', e.target.value)}>
          <option value="">Выберите вакансию</option>
          <option value="Senior front-end developer">Senior front-end developer</option>
          <option value="Software Engineer (Entry or Senior)">Software Engineer (Entry or Senior)</option>
          <option value="Full Stack Web Developer">Full Stack Web Developer</option>
        </select>
        <label htmlFor="country">Страна</label>
        <select id="country" name="country" required value={data.country} onChange={e => setData('country', e.target.value)}>
          <option value="">Выберите страну</option>
          <option value="position1">Россия</option>
          <option value="position2">Беларусь</option>
          <option value="position3">Казахстан</option>
          <option value="position3">Другое...</option>
        </select>
        <fieldset>
          <legend>Блок идентификации:</legend>
          <label htmlFor="inn">Индивидуальный номер налогоплательщика:</label>
          <input type="text" id="inn" name="inn" value={data.inn} onChange={e => setData('inn', e.target.value)} />
          <label>
            <input type="checkbox" name="no_inn" id="no_inn" value="1" onChange={togglePassportBlock} />
            Не имею ИНН
          </label>
          {showPassportBlock && (
            <div id="passport_block">
              <label htmlFor="passport">Серия и номер паспорта:</label>
              <input type="text" id="passport" name="passport" value={data.passport} onChange={e => setData('passport', e.target.value)} />
            </div>
          )}
        </fieldset>
        <label htmlFor="phone_number">Номер телефона*</label>
        <input type="tel" id="phone_number" name="phone_number" value={data.phone_number} onChange={e => setData('phone_number', e.target.value)} required />
        <label htmlFor="email">Электронная почта*</label>
        <input type="email" id="email" name="email" value={data.email} onChange={e => setData('email', e.target.value)} required />
        {errors.email && <div>{errors.email}</div>}
        <label htmlFor="telegram">Telegram</label>
        <input type="text" id="telegram" name="telegram" value={data.telegram} onChange={e => setData('telegram', e.target.value)} />
        <label htmlFor="password">Пароль</label>
        <input type="password" name='password' value={data.password} onChange={e => setData('password', e.target.value)} />
        {errors.password && <div>{errors.password}</div>}
        <label htmlFor="password_confirmation">Пароль</label>
        <input type="password" name='password_confirmation' value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} />
        {errors.password && <div>{errors.password}</div>}
        <br />
        <br />
        <input type="checkbox" name="data_processing_agreement" id="data_processing_agreement" />
        <a href="#">Согласие на обработку данных</a>
        <br />
        <br />
        <button type="submit" disabled={processing}>Регистрация</button>
      </form>
    </>
  );
}

