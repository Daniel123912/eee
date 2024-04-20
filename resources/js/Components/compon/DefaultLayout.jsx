import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

const DefaultLayout = ({ children, auth }) => {
  return (
    <div>
      <header>
        <Navbar expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href={route('home')}>
              <img  src="storage/upload/logo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Version" id="basic-nav-dropdown">
                  <NavDropdown.Item href={route('home')}>Version 1</NavDropdown.Item>
                  {/* <NavDropdown.Item href="index-2.html">Version 2</NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown title="Position" id="basic-nav-dropdown">
                  <NavDropdown.Item href={route('browsejobs')}>Browse jobs</NavDropdown.Item>
                  <NavDropdown.Item href="job-manage.html">Manage jobs</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resume" id="basic-nav-dropdown">
                  <NavDropdown.Item href={route('browseresumes')}>Browse resumes</NavDropdown.Item>
                  <NavDropdown.Item href={route('resume')}>Create a resume</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Company" id="basic-nav-dropdown">
                  <NavDropdown.Item href={route('browsecompanies')}>Browse companies</NavDropdown.Item>
                  <NavDropdown.Item href={route('companydetail')}>Company detail</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href={route('about')}>About</NavDropdown.Item>
                  <NavDropdown.Item href={route('contact')}>Contact</NavDropdown.Item>
                  <NavDropdown.Item href={route('faq')}>FAQ</NavDropdown.Item>
                  <NavDropdown.Item href={route('pricing')}>Pricing</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {!auth || auth.user === null ? (
                  <Link className="btn btn-sm btn-primary" href={route('login')}>
                    Login
                  </Link>
                ) : (
                  <NavDropdown title={<img id ="avatar" src="storage/upload/logo-envato.png" alt="avatar" />} id="basic-nav-dropdown">
                    <NavDropdown.Item href={route('dashboard')}>Профиль</NavDropdown.Item>
                    <NavDropdown.Item href="user-register.html">Register</NavDropdown.Item>
                    <NavDropdown.Item href="user-forget-pass.html">Forget pass</NavDropdown.Item>
                    <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
      <footer className="site-footer">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h6>About</h6>
              <p className="text-justify">
                An employment website is a web site that deals specifically with employment or careers. Many employment
                websites are designed to allow employers to post job requirements for a position to be filled and are
                commonly known as job boards. Other employment sites offer employer reviews, career and job-search
                advice, and describe different job descriptions or employers. Through a job website a prospective
                employee can locate and fill out a job application.
              </p>
            </Col>
            <Col xs={6} md={3}>
              <h6>Company</h6>
              <ul className="footer-links">
                <li>
                  <a href="page-about.html">About us</a>
                </li>
                <li>
                  <a href="page-typography.html">How it works</a>
                </li>
                <li>
                  <a href="page-faq.html">Help center</a>
                </li>
                <li>
                  <a href="page-typography.html">Privacy policy</a>
                </li>
                <li>
                  <a href="page-contact.html">Contact us</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <h6>Trendeing jobs</h6>
              <ul className="footer-links">
                <li>
                  <a href="job-list.html">Front-end developer</a>
                </li>
                <li>
                  <a href="job-list.html">Android developer</a>
                </li>
                <li>
                  <a href="job-list.html">iOS developer</a>
                </li>
                <li>
                  <a href="job-list.html">Full stack developer</a>
                </li>
                <li>
                  <a href="job-list.html">Project administrator</a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <Row>
            <Col md={8} sm={6} xs={12}>
              <p className="copyright-text">
                Copyrights © 2016 All Rights Reserved by{' '}
                <a href="http://themeforest.net/user/shamsoft">ShaMSofT</a>.
              </p>
            </Col>
            <Col md={4} sm={6} xs={12}>
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
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default DefaultLayout;
