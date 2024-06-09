
export default function Maincontainer() {
  return (
    
    <main>
      <header
  className="site-header size-lg text-center"
  style={{ backgroundImage: "url(assets/img/bg-banner1.jpg)" }}
>
  <div className="container">
    <div className="col-xs-12">
      <br />
      <br />
      <h2>
        We offer <mark>1,259</mark> job vacancies right now!
      </h2>
      <h5 className="font-alt">Find your desire one in a minute</h5>
      <br />
      <br />
      <br />
      <form className="header-job-search">
        <div className="input-keyword">
          <input
            type="text"
            className="form-control"
            placeholder="Job title, skills, or company"
          />
        </div>
        <div className="input-location">
          <input
            type="text"
            className="form-control"
            placeholder="City, state or zip"
          />
        </div>
        <div className="btn-search">
          <button className="btn btn-primary" type="submit">
            Find jobs
          </button>
          <a href="job-list.html">Advanced Job Search</a>
        </div>
      </form>
    </div>
  </div>
</header>
  {/* Recent jobs */}
  <section>
    <div className="container">
      <header className="section-header">
        <span>Последний</span>
        <h2>Недавние вакансии</h2>
      </header>
      <div className="row item-blocks-connected">
        {/* Job item */}
        <div className="col-xs-12">
          <a className="item-block" href="job-detail">
            <header>
              <img src="img/logo-google.jpg" alt="" />
              <div className="hgroup">
                <h4>Senior front-end developer</h4>
                <h5>Google</h5>
              </div>
              <div className="header-meta">
                <span className="location">Menlo park, CA</span>
                <span className="label label-success">Full-time</span>
              </div>
            </header>
          </a>
        </div>
        {/* END Job item */}
        {/* Job item */}
        <div className="col-xs-12">
          <a className="item-block" href="job-detail1">
            <header>
              <img src="img/logo-linkedin.png" alt="" />
              <div className="hgroup">
                <h4>Software Engineer (Entry or Senior)</h4>
                <h5>Linkedin</h5>
              </div>
              <div className="header-meta">
                <span className="location">Livermore, CA</span>
                <span className="label label-warning">Part-time</span>
              </div>
            </header>
          </a>
        </div>
        {/* END Job item */}
        {/* Job item */}
        <div className="col-xs-12">
          <a className="item-block" href="job-detail2">
            <header>
              <img src="img/logo-envato.png" alt="" />
              <div className="hgroup">
                <h4>Full Stack Web Developer</h4>
                <h5>Envato</h5>
              </div>
              <div className="header-meta">
                <span className="location">San Francisco, CA</span>
                <span className="label label-info">Freelance</span>
              </div>
            </header>
          </a>
        </div>
        {/* END Job item */}
        {/* Job item */}
        <div className="col-xs-12">
          <a className="item-block" href="job-detail3">
            <header>
              <img src="img/logo-facebook.png" alt="" />
              <div className="hgroup">
                <h4>Web Applications Developer</h4>
                <h5>Facebook</h5>
              </div>
              <div className="header-meta">
                <span className="location">Lexington, MA</span>
                <span className="label label-danger">Internship</span>
              </div>
            </header>
          </a>
        </div>
        {/* END Job item */}
        {/* Job item */}
        <div className="col-xs-12">
          <a className="item-block" href="job-detail4">
            <header>
              <img src="img/logo-microsoft.jpg" alt="" />
              <div className="hgroup">
                <h4>Sr. SQL Server Developer</h4>
                <h5>Microsoft</h5>
              </div>
              <div className="header-meta">
                <span className="location">Palo Alto, CA</span>
                <span className="label label-success">Remote</span>
              </div>
            </header>
          </a>
        </div>
        {/* END Job item */}
      </div>
      <br />
      <br />
      <p className="text-center">
        <a className="btn btn-info" href="job-list-2">
          &gt;Browse all jobs
        </a>
      </p>
    </div>
  </section>
  {/* END Recent jobs */}
  {/* Facts */}
  <section
    className="bg-img bg-repeat no-overlay section-sm"
    style={{ backgroundImage: "url(img/bg-pattern.png)" }}
  >
    <div className="container">
      <div className="row">
        <div className="counter col-md-3 col-sm-6">
          <p>
            <span data-from={0} data-to={6890} />+
          </p>
          <h6>Работа</h6>
        </div>
        <div className="counter col-md-3 col-sm-6">
          <p>
            <span data-from={0} data-to={1200} />+
          </p>
          <h6>Участники</h6>
        </div>
        <div className="counter col-md-3 col-sm-6">
          <p>
            <span data-from={0} data-to={15400} />+
          </p>
          <h6>Компания</h6>
        </div>
      </div>
    </div>
  </section>
  {/* END Facts */}
  {/* How it works */}
  <section className="bg-alt">
    <div className="container">
      <header className="section-header">
        <span>КАТЕГОРИИ</span>
        <h2>Популярные Категории</h2>
        <p>Вот самые популярные категории</p>
      </header>
      <div className="category-grid">
        <a href="job-list-1.html">
          <i className="fa fa-laptop" />
          <h6>Технологии</h6>
          <p>
            Дизайнер, разработчик, ИТ-сервис, Front-end разработчик, Управление
            проектами
          </p>
        </a>
        <a href="job-list-2.html">
          <i className="fa fa-line-chart" />
          <h6>Бухгалтерский учет</h6>
          <p>
            Финансы, Налоговая служба, Менеджер по расчету заработной платы,
            Бухгалтер, Управление персоналом
          </p>
        </a>
        <a href="job-list-2.html">
          <i className="fa fa-newspaper-o" />
          <h6>Media</h6>
          <p>Journalism, Newspaper, Reporter, Writer, Cameraman</p>
        </a>
      </div>
    </div>
  </section>
  {/* END Categories */}
  {/* Newsletter */}
  <section
    className="bg-img text-center"
    style={{ backgroundImage: "url(img/bg-facts.jpg)" }}
  >
    <div className="container">
      <h2>
        <strong>Подписаться</strong>
      </h2>
      <h6 className="font-alt">
        Получайте еженедельно лучшие новые вакансии на свой почтовый ящик
      </h6>
      <br />
      <br />
      <form className="form-subscribe" action="#">
        <div className="input-group">
          <input
            type="text"
            className="form-control input-lg"
            placeholder="Your eamil address"
          />
          <span className="input-group-btn">
            <button className="btn btn-success btn-lg" type="submit">
              Subscribe
            </button>
          </span>
        </div>
      </form>
    </div>
  </section>
  {/* END Newsletter */}
</main>

  )
}
