import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Browsecompanies({auth}) {
  return (
    <DefaultLayout auth={auth}>
  {/* Page header */}
  <header
    className="page-header bg-img"
    style={{ backgroundImage: 'url(storage/upload/bg-banner1.jpg)' }}
  >
    <div className="container page-name">
      <h1 className="text-center">Browse companies</h1>
      <p className="lead text-center">
        Use following search box to find companies that fits you better
      </p>
    </div>
    <div className="container">
      <form action="#">
        <div className="row">
          <div className="form-group col-xs-12 col-sm-4">
            <input type="text" className="form-control" placeholder="Keyword" />
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
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
              We found <strong>86</strong> matches, you're watching <i>10</i> to{" "}
              <i>15</i>
            </h5>
          </div>
          {/* Company detail */}
          <div className="col-xs-12">
            <a className="item-block" href="company-detail.html">
              <header>
                <img src="storage/upload/logo-google.jpg" alt="" />
                <div className="hgroup">
                  <h4>Google</h4>
                  <h5>Internet and computer software</h5>
                </div>
                <span className="open-position">15 open position</span>
              </header>
              <div className="item-body">
                <p>
                  Google Inc. is an American multinational technology company
                  specializing in Internet-related services and products. These
                  include online advertising technologies, search, cloud
                  computing, and software. Most of its profits are derived from
                  AdWords, an online advertising service that places advertising
                  near the list of search results.
                </p>
              </div>
            </a>
          </div>
          {/* END Company detail */}
          {/* Company detail */}
          <div className="col-xs-12">
            <a className="item-block" href="company-detail.html">
              <header>
                <img src="storage/upload/logo-facebook.png" alt="" />
                <div className="hgroup">
                  <h4>Facebook</h4>
                  <h5>Internet</h5>
                </div>
                <span className="open-position">6 open position</span>
              </header>
              <div className="item-body">
                <p>
                  Facebook is a corporation and online social networking service
                  headquartered in Menlo Park, California, in the United States.
                  Its website was launched on February 4, 2004, by Mark
                  Zuckerberg with his Harvard College roommates and fellow
                  students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz
                  and Chris Hughes. The founders had initially limited the
                  website's membership to Harvard students, but later expanded
                  it to colleges in the Boston area, the Ivy League, and
                  Stanford University. It gradually added support for students
                  at various other universities and later to high-school
                  students.
                </p>
              </div>
            </a>
          </div>
          {/* END Company detail */}
          {/* Company detail */}
          <div className="col-xs-12">
            <a className="item-block" href="company-detail.html">
              <header>
                <img src="storage/upload/logo-envato.png" alt="" />
                <div className="hgroup">
                  <h4>Envato</h4>
                  <h5>Internet, Web Design, Web Development</h5>
                </div>
                <span className="open-position">2 open position</span>
              </header>
              <div className="item-body">
                <p>
                  Envato (formerly Eden) operates a group of digital
                  marketplaces that sell creative assets for web designers,
                  including themes, graphics, video, audio, photography and 3D
                  models. It has over 1.5 million active buyers and sellers and
                  over 6 million community members. Its highest-trafficked
                  marketplace, ThemeForest, is the 204th most visited site in
                  the world according to Alexa.
                </p>
              </div>
            </a>
          </div>
          {/* END Company detail */}
          {/* Company detail */}
          <div className="col-xs-12">
            <a className="item-block" href="company-detail.html">
              <header>
                <img src="storage/upload/logo-microsoft.jpg" alt="" />
                <div className="hgroup">
                  <h4>Microsoft</h4>
                  <h5>Computer software and hardware</h5>
                </div>
                <span className="open-position">7 open position</span>
              </header>
              <div className="item-body">
                <p>
                  Microsoft is an American multinational technology company
                  headquartered in Redmond, Washington, that develops,
                  manufactures, licenses, supports and sells computer software,
                  consumer electronics and personal computers and services. Its
                  best known software products are the Microsoft Windows line of
                  operating systems, Microsoft Office office suite, and Internet
                  Explorer and Edge web browsers. Its flagship hardware products
                  are the Xbox game consoles and the Microsoft Surface tablet
                  lineup. It is the world's largest software maker by revenue,
                  and one of the world's most valuable companies.
                </p>
              </div>
            </a>
          </div>
          {/* END Company detail */}
          {/* Company detail */}
          <div className="col-xs-12">
            <a className="item-block" href="company-detail.html">
              <header>
                <img src="storage/upload/logo-linkedin.png" alt="" />
                <div className="hgroup">
                  <h4>Linkedin</h4>
                  <h5>Internet</h5>
                </div>
                <span className="open-position">3 open position</span>
              </header>
              <div className="item-body">
                <p>
                  LinkedIn is a business-oriented social networking service.
                  Founded in December 2002 and launched on May 5, 2003, it is
                  mainly used for professional networking. As of 2015, most of
                  the site's revenue comes from selling access to information
                  about its users to recruiters and sales professionals. In
                  2006, LinkedIn increased to 20 million members. As of October
                  2015, LinkedIn reports more than 400 million acquired users in
                  more than 200 countries and territories.
                </p>
              </div>
            </a>
          </div>
          {/* END Company detail */}
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
              <li>
                <a href="#">2</a>
              </li>
              <li className="active">
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
      </div>
    </section>
  </main>
  {/* END Main container */}
</DefaultLayout>

  )
}
