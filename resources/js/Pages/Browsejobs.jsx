import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Browsejobs({auth}) {
  return (
    <DefaultLayout auth={auth}>
     {/* Page header */}
  <header
  className="page-header bg-img"
  style={{ backgroundImage: 'url(storage/upload/bg-banner1.jpg)' }}
>
  <div className="container page-name">
    <h1 className="text-center">Browse jobs</h1>
    <p className="lead text-center">
      Use following search box to find jobs that fits you better
    </p>
  </div>
  <div className="container">
    <form action="#">
      <div className="row">
        <div className="form-group col-xs-12 col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Keyword: job title, skills, or company"
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Location: city, state or zip"
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <select className="form-control selectpicker" multiple="">
            <option selected="">All categories</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Customer service</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Sale</option>
            <option>Marketing</option>
            <option>Information technology</option>
            <option>Others</option>
          </select>
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <h6>Contract</h6>
          <div className="checkall-group">
            <div className="checkbox">
              <input
                type="checkbox"
                id="contract1"
                name="contract"
                defaultChecked=""
              />
              <label htmlFor="contract1">All types</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="contract2" name="contract" />
              <label htmlFor="contract2">
                Full-time <small>(354)</small>
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="contract3" name="contract" />
              <label htmlFor="contract3">
                Part-time <small>(284)</small>
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="contract4" name="contract" />
              <label htmlFor="contract4">
                Internship <small>(169)</small>
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="contract5" name="contract" />
              <label htmlFor="contract5">
                Freelance <small>(480)</small>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group col-xs-12 col-sm-4">
          <h6>Hourly rate</h6>
          <div className="checkall-group">
            <div className="checkbox">
              <input
                type="checkbox"
                id="rate1"
                name="rate"
                defaultChecked=""
              />
              <label htmlFor="rate1">All rates</label>
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
          <h6>Academic degree</h6>
          <div className="checkall-group">
            <div className="checkbox">
              <input
                type="checkbox"
                id="degree1"
                name="degree"
                defaultChecked=""
              />
              <label htmlFor="degree1">All degrees</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="degree2" name="degree" />
              <label htmlFor="degree2">
                Associate degree <small>(216)</small>
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="degree3" name="degree" />
              <label htmlFor="degree3">
                Bachelor's degree <small>(569)</small>
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="degree4" name="degree" />
              <label htmlFor="degree4">
                Master's degree <small>(439)</small>
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="degree5" name="degree" />
              <label htmlFor="degree5">
                Doctoral degree <small>(84)</small>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="button-group">
        <div className="action-buttons">
          <button className="btn btn-primary">Apply filter</button>
        </div>
      </div>
    </form>
  </div>
</header>
{/* END Page header */}
{/* Main container */}
<main>
  <section className="no-padding-top bg-alt">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <br />
          <h5>
            We found <strong>357</strong> matches, you're watching <i>10</i>{" "}
            to <i>20</i>
          </h5>
        </div>
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
              <img src="storage/upload/logo-linkedin.png" alt="" />
              <div className="hgroup">
                <h4>Software Engineer (Entry or Senior)</h4>
                <h5>
                  Linkedin{" "}
                  <span className="label label-warning">Part-time</span>
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
              <img src="storage/upload/logo-envato.png" alt="" />
              <div className="hgroup">
                <h4>Full Stack Web Developer</h4>
                <h5>
                  Envato <span className="label label-info">Freelance</span>
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
              <img src="storage/upload/logo-facebook.png" alt="" />
              <div className="hgroup">
                <h4>Web Applications Developer</h4>
                <h5>
                  Facebook{" "}
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
              <img src="storage/upload/logo-microsoft.jpg" alt="" />
              <div className="hgroup">
                <h4>Sr. SQL Server Developer</h4>
                <h5>
                  Microsoft{" "}
                  <span className="label label-success">Remote</span>
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
      {/* Page navigation */}
      <nav className="text-center">
        <ul className="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <i className="ti-angle-left" />
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li className="active">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#" aria-label="Next">
              <i className="ti-angle-right" />
            </a>
          </li>
        </ul>
      </nav>
      {/* END Page navigation */}
    </div>
  </section>
</main>
{/* END Main container */}
</DefaultLayout>
  )
}
