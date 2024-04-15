import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Contact({auth}) {
  return (
    <DefaultLayout auth={auth}>
  {/* Site header */}
  <header
    className="page-header bg-img size-lg"
    style={{ backgroundImage: 'url(storage/upload/bg-banner2.jpg)' }}
  >
    <div className="container no-shadow">
      <h1 className="text-center">Contact us</h1>
      <p className="lead text-center">
        Say hi, drop a letter, and follow us in social media websites.
      </p>
    </div>
  </header>
  {/* END Site header */}
  {/* Main container */}
  <main>
    <section>
      <div className="container">
        <div id="contact-map" style={{ height: 500 }} />
        <br />
        <br />
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h4>Contact form</h4>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control input-lg"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
          <div className="col-sm-12 col-md-4">
            <h4>Information</h4>
            <div className="highlighted-block">
              <dl className="icon-holder">
                <dt>
                  <i className="fa fa-map-marker" />
                </dt>
                <dd>3652 Seventh Avenue, Los Angeles, CA</dd>
                <dt>
                  <i className="fa fa-phone" />
                </dt>
                <dd>(+1) 987 654 3210</dd>
                <dt>
                  <i className="fa fa-fax" />
                </dt>
                <dd>(+1) 123 456 7890</dd>
                <dt>
                  <i className="fa fa-envelope" />
                </dt>
                <dd>hi@yoursite.com</dd>
              </dl>
            </div>
            <br />
            <ul className="social-icons size-sm text-center">
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
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* END Main container */}
</DefaultLayout>

  )
}
