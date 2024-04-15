import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Browseresumes({auth}) {
  return (
    <DefaultLayout auth={auth}>
    <header
      className="page-header bg-img"
      style={{ backgroundImage: 'url(storage/upload/bg-banner1.jpg)' }}
    >
      <div className="container page-name">
        <h1 className="text-center">Просмотр резюме</h1>
        <p className="lead text-center">
          Используйте следующее поле поиска, чтобы найти резюме, которые лучше
          всего подходят вашей должности
        </p>
      </div>
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="form-group col-xs-12 col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Ключевые слова: имя, навыки или теги"
              />
            </div>
            <div className="form-group col-xs-12 col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Местоположение: город, штат или почтовый индекс"
              />
            </div>
            <div className="form-group col-xs-12 col-sm-4">
              <select className="form-control selectpicker" multiple="">
                <option selected="">Все категории</option>
                <option>Разработчик</option>
                <option>Дизайнер</option>
                <option>Служба поддержки</option>
                <option>Финансы</option>
                <option>Медицина</option>
                <option>Продажи</option>
                <option>Маркетинг</option>
                <option>Информационные технологии</option>
                <option>Другие</option>
              </select>
            </div>
            <div className="form-group col-xs-12 col-sm-4">
              <h6>Почасовая ставка</h6>
              <div className="checkall-group">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="rate1"
                    name="rate"
                    defaultChecked=""
                  />
                  <label htmlFor="rate1">Все ставки</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="rate2" name="rate" />
                  <label htmlFor="rate2">
                    $0 - $50 <small>(364)</small>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="rate3" name="rate" />
                  <label htmlFor="rate3">
                    $50 - $100 <small>(684)</small>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="rate4" name="rate" />
                  <label htmlFor="rate4">
                    $100 - $200 <small>(195)</small>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="rate5" name="rate" />
                  <label htmlFor="rate5">
                    $200+ <small>(39)</small>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group col-xs-12 col-sm-4">
              <h6>Ученая степень</h6>
              <div className="checkall-group">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="degree1"
                    name="degree"
                    defaultChecked=""
                  />
                  <label htmlFor="degree1">Все степени</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="degree2" name="degree" />
                  <label htmlFor="degree2">
                    Степень бакалавра <small>(216)</small>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="degree3" name="degree" />
                  <label htmlFor="degree3">
                    Степень магистра <small>(569)</small>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="degree4" name="degree" />
                  <label htmlFor="degree4">
                    Ученая степень доктора <small>(439)</small>
                  </label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="degree5" name="degree" />
                  <label htmlFor="degree5">
                    Ученая степень доктора философии <small>(84)</small>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group col-xs-12 col-sm-4">
              <h6>Сортировать по</h6>
              <div className="radio">
                <input
                  type="radio"
                  name="sortby"
                  id="sortby1"
                  defaultValue="option1"
                  defaultChecked=""
                />
                <label htmlFor="sortby1">Релевантности</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="sortby"
                  id="sortby2"
                  defaultValue="option2"
                />
                <label htmlFor="sortby2">Наивысшая ставка первой</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="sortby"
                  id="sortby3"
                  defaultValue="option3"
                />
                <label htmlFor="sortby3">Наименьшая ставка первой</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="sortby"
                  id="sortby4"
                  defaultValue="option4"
                />
                <label htmlFor="sortby4">Наивысшая степень первой</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="sortby"
                  id="sortby5"
                  defaultValue="option5"
                />
                <label htmlFor="sortby5">Наименьшая степень первой</label>
              </div>
            </div>
          </div>
          <div className="button-group">
            <div className="action-buttons">
              <button className="btn btn-primary">Применить фильтр</button>
            </div>
          </div>
        </form>
      </div>
    </header>
    {/* END Заголовок страницы */}
    {/* Основной контейнер */}
    <main>
      <section className="no-padding-top bg-alt">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <br />
              <h5>
                Мы нашли <strong>357</strong> соответствий, вы просматриваете{" "}
                <i>10</i> до <i>20</i>
              </h5>
            </div>
            {/* Детали резюме */}
            <div className="col-xs-12">
              <a className="item-block" href="resume-detail.html">
                <header>
                  <img
                    className="resume-avatar"
                    src="storage/upload/avatar.jpg"
                    alt=""
                  />
                  <div className="hgroup">
                    <h4>Джон Доу</h4>
                    <h5>Разработчик фронт-энда</h5>
                  </div>
                </header>
                <div className="item-body">
                  <p>
                    Более 20 лет опыта работы в области фронтенд-разработки для
                    крупных компаний. Разработка хорошо спроектированных,
                    доступных и стандартизированных веб-сайтов и приложений.
                    Высокоэффективный коммуникатор и лидер команды с доказанным
                    опытом выполнения качественной работы в срок и в рамках
                    бюджета в качестве удаленного сотрудника. Опыт и успех как в
                    агентских, так и в крупных корпоративных средах.
                  </p>
                  <div className="tag-list">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap</span>
                    <span>Wordpress</span>
                  </div>
                </div>
                <footer>
                  <ul className="details cols-3">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Менло-парк, Калифорния</span>
                    </li>
                    <li>
                      <i className="fa fa-money" />
                      <span>$55 / час</span>
                    </li>
                    <li>
                      <i className="fa fa-certificate" />
                      <span>Магистр информатики</span>
                    </li>
                  </ul>
                </footer>
              </a>
            </div>
            {/* END Детали резюме */}
          </div>
          <div className="row">
            {/* Детали резюме */}
            <div className="col-sm-12 col-md-6">
              <a className="item-block" href="resume-detail.html">
                <header>
                  <img
                    className="resume-avatar"
                    src="storage/upload/avatar-1.jpg"
                    alt=""
                  />
                  <div className="hgroup">
                    <h4>Бикеш Солтанян</h4>
                    <h5>Разработчик Java</h5>
                  </div>
                </header>
                <div className="item-body">
                  <p>
                    Я разрабатываю хорошо спроектированные, доступные и
                    стандартизированные веб-сайты и приложения. Высокоэффективный
                    коммуникатор и лидер команды с доказанным опытом выполнения
                    качественной работы в срок и в рамках бюджета в качестве
                    удаленного сотрудника.
                  </p>
                  <div className="tag-list">
                    <span>J2EE</span>
                    <span>J2SE</span>
                    <span>Android</span>
                  </div>
                </div>
                <footer>
                  <ul className="details cols-2">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Ферфилд, Айова</span>
                    </li>
                    <li>
                      <i className="fa fa-money" />
                      <span>$60 / час</span>
                    </li>
                  </ul>
                </footer>
              </a>
            </div>
            {/* END Детали резюме */}
            {/* Детали резюме */}
            <div className="col-sm-12 col-md-6">
              <a className="item-block" href="resume-detail.html">
                <header>
                  <img
                    className="resume-avatar"
                    src="storage/upload/avatar-2.jpg"
                    alt=""
                  />
                  <div className="hgroup">
                    <h4>Крис Хернандезиян</h4>
                    <h5>Разработчик .Net</h5>
                  </div>
                </header>
                <div className="item-body">
                  <p>
                    Я разрабатываю хорошо спроектированные, доступные и
                    стандартизированные веб-сайты и приложения. Высокоэффективный
                    коммуникатор и лидер команды с доказанным опытом выполнения
                    качественной работы в срок и в рамках бюджета в качестве
                    удаленного сотрудника.
                  </p>
                  <div className="tag-list">
                    <span>VB.Net</span>
                    <span>C#</span>
                    <span>WPF</span>
                    <span>ASP.Net</span>
                    <span>MVC.Net</span>
                  </div>
                </div>
                <footer>
                  <ul className="details cols-2">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Сиэтл, Вашингтон</span>
                    </li>
                    <li>
                      <i className="fa fa-money" />
                      <span>$50 / час</span>
                    </li>
                  </ul>
                </footer>
              </a>
            </div>
            {/* END Детали резюме */}
          </div>
          <div className="row">
            {/* Детали резюме */}
            <div className="col-sm-12 col-md-6">
              <a className="item-block" href="resume-detail.html">
                <header>
                  <img
                    className="resume-avatar"
                    src="storage/upload/avatar-3.jpg"
                    alt=""
                  />
                  <div className="hgroup">
                    <h4>Мэри Амири</h4>
                    <h5>Специалист по качеству</h5>
                  </div>
                </header>
                <div className="item-body">
                  <p>
                    Я разрабатываю хорошо спроектированные, доступные и
                    стандартизированные веб-сайты и приложения. Высокоэффективный
                    коммуникатор и лидер команды с доказанным опытом выполнения
                    качественной работы в срок и в рамках бюджета в качестве
                    удаленного сотрудника.
                  </p>
                  <div className="tag-list">
                    <span>Testcase</span>
                    <span>Unit test</span>
                    <span>jUnit</span>
                    <span>Git</span>
                  </div>
                </div>
                <footer>
                  <ul className="details cols-2">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Фремонт, Калифорния</span>
                    </li>
                    <li>
                      <i className="fa fa-money" />
                      <span>$70 / час</span>
                    </li>
                  </ul>
                </footer>
              </a>
            </div>
            {/* END Детали резюме */}
            {/* Детали резюме */}
            <div className="col-sm-12 col-md-6">
              <a className="item-block" href="resume-detail.html">
                <header>
                  <img
                    className="resume-avatar"
                    src="storage/upload/avatar-4.jpg"
                    alt=""
                  />
                  <div className="hgroup">
                    <h4>Сара Луизгарден</h4>
                    <h5>Разработчик UI/UX</h5>
                  </div>
                </header>
                <div className="item-body">
                  <p>
                    Я разрабатываю хорошо спроектированные, доступные и
                    стандартизированные веб-сайты и приложения. Высокоэффективный
                    коммуникатор и лидер команды с доказанным опытом выполнения
                    качественной работы в срок и в рамках бюджета в качестве
                    удаленного сотрудника.
                  </p>
                  <div className="tag-list">
                    <span>Photoshop</span>
                    <span>Illustrator</span>
                    <span>Sketch</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                  </div>
                </div>
                <footer>
                  <ul className="details cols-2">
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Дублин, Калифорния</span>
                    </li>
                    <li>
                      <i className="fa fa-money" />
                      <span>$85 / час</span>
                    </li>
                  </ul>
                </footer>
              </a>
            </div>
            {/* END Детали резюме */}
          </div>
          {/* Навигация по страницам */}
          <nav className="text-center">
            <ul className="pagination">
              <li>
                <a href="#">«</a>
              </li>
              <li className="active">
                <a href="#">
                  1 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">»</a>
              </li>
            </ul>
          </nav>
          {/* END Навигация по страницам */}
        </div>
      </section>
    </main>
    {/* END Основной контейнер */}
    {/* Футер */}
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="pull-right">
              <ul className="footer-links">
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Поддержка</a>
                </li>
                <li>
                  <a href="#">Условия</a>
                </li>
              </ul>
            </div>
            <div className="pull-left">
              <span className="badge badge-primary">© 2024. TheJobs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* END Футер */}
    {/* Модальное окно: войти */}
    <div
      className="modal fade"
      id="modal-login"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form action="#" method="post">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">Войти в учетную запись</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Пароль"
                />
              </div>
              <p className="text-center">
                <a href="user-forget-pass.html">Забыли пароль?</a>
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-block">Войти</button>
              <button className="btn btn-primary btn-block">
                Войти с помощью Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* END Модальное окно: войти */}
    {/* Модальное окно: регистрация */}
    <div
      className="modal fade"
      id="modal-register"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form action="#" method="post">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">
                Зарегистрировать новую учетную запись
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Имя" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Пароль"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Повторите пароль"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-block">
                Зарегистрироваться
              </button>
              <button className="btn btn-primary btn-block">
                Зарегистрироваться с помощью Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </DefaultLayout>
  )
}
