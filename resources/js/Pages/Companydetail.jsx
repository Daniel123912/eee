import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Companydetail({auth}) {
  return (
    <DefaultLayout auth={auth}>
  {/* Page header */}
  <header
    className="page-header bg-img size-lg"
    style={{ backgroundImage: 'url(storage/upload/bg-banner2.jpg)' }}
  >
    <div className="container">
      <div className="header-detail">
        <img className="logo" src="storage/upload/logo-google.jpg" alt="" />
        <div className="hgroup">
          <h1>Google</h1>
          <h3>Internet and computer software</h3>
        </div>
        <hr />
        <p className="lead">
          Google Inc. is an American multinational technology company
          specializing in Internet-related services and products. These include
          online advertising technologies, search, cloud computing, and
          software. Most of its profits are derived from AdWords, an online
          advertising service that places advertising near the list of search
          results.
        </p>
        <ul className="details cols-3">
          <li>
            <i className="fa fa-map-marker" />
            <span>Menlo Park, CA</span>
          </li>
          <li>
            <i className="fa fa-globe" />
            <a href="#">Google.com</a>
          </li>
          <li>
            <i className="fa fa-users" />
            <span>50,000 - 70,000 employer</span>
          </li>
          <li>
            <i className="fa fa-birthday-cake" />
            <span>From 1998</span>
          </li>
          <li>
            <i className="fa fa-phone" />
            <span>(+1) 123 456 7890</span>
          </li>
          <li>
            <i className="fa fa-envelope" />
            <a href="#">info@google.com</a>
          </li>
        </ul>
        <div className="button-group">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a className="instagram" href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
          <div className="action-buttons">
            <a className="btn btn-gray" href="#">
              Favorite
            </a>
            <a className="btn btn-success" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* END Page header */}
  {/* Main container */}
  <main>
    {/* Company detail */}
    <section>
      <div className="container">
        <header className="section-header">
          <span>About</span>
          <h2>Company detail</h2>
        </header>
        <p>
          Google was founded by Larry Page and Sergey Brin while they were Ph.D.
          students at Stanford University. Together they own about 14 percent of
          its shares but control 56 percent of the stockholder voting power
          through supervoting stock. They incorporated Google as a privately
          held company on September 4, 1998. An initial public offering followed
          on August 19, 2004. Its mission statement from the outset was "to
          organize the world's information and make it universally accessible
          and useful," and its unofficial slogan was "Don't be evil". In 2004,
          Google moved to its new headquarters in Mountain View, California,
          nicknamed the Googleplex. In August 2015, Google announced plans to
          reorganize its interests as a holding company called Alphabet Inc.
          When this restructuring took place on October 2, 2015, Google became
          Alphabet's leading subsidiary, as well as the parent for Google's
          Internet interests.
        </p>
        <p>
          Rapid growth since incorporation has triggered a chain of products,
          acquisitions and partnerships beyond Google's core search engine
          (Google Search). It offers online productivity software (Google Docs)
          including email (Gmail), a cloud storage service (Google Drive) and a
          social networking service (Google+). Desktop products include
          applications for web browsing (Google Chrome), organizing and editing
          photos (Google Photos), and instant messaging (Hangouts). The company
          leads the development of the Android mobile operating system and the
          browser-only Chrome OS for a class of netbooks known as Chromebooks.
          Google has moved increasingly into communications hardware: it
          partners with major electronics manufacturers in the production of its
          "high-quality low-cost" Nexus devices. In 2012, a fiber-optic
          infrastructure was installed in Kansas City to facilitate a Google
          Fiber broadband service.
        </p>
      </div>
    </section>
    {/* END Company detail */}
    {/* Open positions */}
    <section id="open-positions" className="bg-alt">
      <div className="container">
        <header className="section-header">
          <span>vacancies</span>
          <h2>Open positions</h2>
        </header>
        <div className="row">
          {/* Job item */}
          <div className="col-xs-12">
            <a className="item-block" href="job-detail.html">
              <header>
                <img src="storage/upload/logo-google.jpg" alt="" />
                <div className="hgroup">
                  <h4>Senior front-end developer</h4>
                  <h5>
                    Google{" "}
                    <span className="label label-success">Full-time</span>
                  </h5>
                </div>
                <time dateTime="2016-03-10 20:00">34 min ago</time>
              </header>
              <div className="item-body">
                <p>
                  A rapidly growing, well established marketing firm is looking
                  for an experienced web developer for a full-time position. In
                  this role, you will develop websites, apps, emails and other
                  forms of digital electronic media, all while maintaining brand
                  standards across design projects and other marketing
                  communication materials.
                </p>
              </div>
              <footer>
                <ul className="details cols-3">
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Menlo Park, CA</span>
                  </li>
                  <li>
                    <i className="fa fa-money" />
                    <span>$90,000 - $110,000 / year</span>
                  </li>
                  <li>
                    <i className="fa fa-certificate" />
                    <span>Master or Bachelor</span>
                  </li>
                </ul>
              </footer>
            </a>
          </div>
          {/* END Job item */}
          {/* Job item */}
          <div className="col-xs-12">
            <a className="item-block" href="job-detail.html">
              <header>
                <img src="storage/upload/logo-google.jpg" alt="" />
                <div className="hgroup">
                  <h4>Software Engineer (Entry or Senior)</h4>
                  <h5>
                    Gogle <span className="label label-warning">Part-time</span>
                  </h5>
                </div>
                <time dateTime="2016-03-10 20:00">8 hours ago</time>
              </header>
              <div className="item-body">
                <p>
                  The Special Programs Department II is seeking to hire a
                  Computer Scientist to augment our software development team.
                  Members of the software development team are expected to
                  follow established software engineering principles to
                  methodically deliver mission application software.
                </p>
              </div>
              <footer>
                <ul className="details cols-3">
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Livermore, CA</span>
                  </li>
                  <li>
                    <i className="fa fa-money" />
                    <span>$60,000 - $75,000 / year</span>
                  </li>
                  <li>
                    <i className="fa fa-certificate" />
                    <span>Master or Bachelor</span>
                  </li>
                </ul>
              </footer>
            </a>
          </div>
          {/* END Job item */}
          {/* Job item */}
          <div className="col-xs-12">
            <a className="item-block" href="job-detail.html">
              <header>
                <img src="storage/upload/logo-google.jpg" alt="" />
                <div className="hgroup">
                  <h4>Full Stack Web Developer</h4>
                  <h5>
                    Google <span className="label label-info">Freelance</span>
                  </h5>
                </div>
                <time dateTime="2016-03-10 20:00">2 days ago</time>
              </header>
              <div className="item-body">
                <p>
                  We're seeing a driven, curious, passionate full-stack web
                  developer to help change how people learn creative skills and
                  effortlessly create the images they imagine. You’ll be part of
                  a new rapid prototyping and development team helping to apply
                  lean startup development methodologies and modern web
                  technologies to shape the future of Creative Cloud.
                </p>
              </div>
              <footer>
                <ul className="details cols-3">
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>San Francisco, CA</span>
                  </li>
                  <li>
                    <i className="fa fa-money" />
                    <span>$105,000 / year</span>
                  </li>
                  <li>
                    <i className="fa fa-certificate" />
                    <span>Master</span>
                  </li>
                </ul>
              </footer>
            </a>
          </div>
          {/* END Job item */}
          {/* Job item */}
          <div className="col-xs-12">
            <a className="item-block" href="job-detail.html">
              <header>
                <img src="storage/upload/logo-google.jpg" alt="" />
                <div className="hgroup">
                  <h4>Web Applications Developer</h4>
                  <h5>
                    Google{" "}
                    <span className="label label-danger">Internship</span>
                  </h5>
                </div>
                <time dateTime="2016-03-10 20:00">Feb 26, 2016</time>
              </header>
              <div className="item-body">
                <p>
                  Client needs a back-end Java developer who has worked mainly
                  on Java, J2EE, Spring, Web Services, and other Java related
                  technologies.
                </p>
              </div>
              <footer>
                <ul className="details cols-3">
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Lexington, MA</span>
                  </li>
                  <li>
                    <i className="fa fa-money" />
                    <span>$130,000 - $150,000 / year</span>
                  </li>
                  <li>
                    <i className="fa fa-certificate" />
                    <span>Ph.D. or Master</span>
                  </li>
                </ul>
              </footer>
            </a>
          </div>
          {/* END Job item */}
          {/* Job item */}
          <div className="col-xs-12">
            <a className="item-block" href="job-detail.html">
              <header>
                <img src="storage/upload/logo-google.jpg" alt="" />
                <div className="hgroup">
                  <h4>Sr. SQL Server Developer</h4>
                  <h5>
                    Google <span className="label label-success">Remote</span>
                  </h5>
                </div>
                <time dateTime="2016-03-10 20:00">Feb 16, 2016</time>
              </header>
              <div className="item-body">
                <p>
                  Understand and model complex business requirements into
                  database schemas and work with existing databases in SQL and
                  NOSQL data stores. Develop high performance stored procedures,
                  triggers and other database level code to provide data
                  services to other teams.
                </p>
              </div>
              <footer>
                <ul className="details cols-3">
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Palo Alto, CA</span>
                  </li>
                  <li>
                    <i className="fa fa-money" />
                    <span>$125,000 - $140,000 / year</span>
                  </li>
                  <li>
                    <i className="fa fa-certificate" />
                    <span>Ph.D. or Master</span>
                  </li>
                </ul>
              </footer>
            </a>
          </div>
          {/* END Job item */}
        </div>
      </div>
    </section>
    {/* END Open positions */}
  </main>
  {/* END Main container */}
</DefaultLayout>
  )
}
