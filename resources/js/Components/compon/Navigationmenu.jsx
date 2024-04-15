import 'bootstrap/dist/css/bootstrap.min.css'; 
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Navigationmenu() {
  return (
    
    <nav className="navbar">
      <div className="container">
        <div className="pull-left">
          <a className="navbar-toggle" href="#" data-toggle="offcanvas"><i className="ti-menu"></i></a>
          <div className="logo-wrapper">
            <InertiaLink className="logo" href="/">
              {/* <img src="{imageUrl}" alt="logo" /> */}
            </InertiaLink>
            <InertiaLink className="logo-alt" href="/">
              {/* <img src="{imageUrl}" alt="logo-alt" /> */}
            </InertiaLink>
          </div>
        </div>
        <div className="pull-right user-login">
          <a className="btn btn-sm btn-primary" href="user-login.html">Login</a> or <a href="user-register.html">register</a>
        </div>
        <ul className="nav-menu">
          <li>
            <InertiaLink className="active" href="/">Home</InertiaLink>
            <ul>
              <li><InertiaLink className="active" href="/">Version 1</InertiaLink></li>
              <li><InertiaLink href="/index-2.html">Version 2</InertiaLink></li>
            </ul>
          </li>
          <li>
            <a href="#">Position</a>
            <ul>
              <li><InertiaLink href="/job-list-1.html">Browse jobs - 1</InertiaLink></li>
              <li><InertiaLink href="/job-list-2.html">Browse jobs - 2</InertiaLink></li>
              <li><InertiaLink href="/job-list-3.html">Browse jobs - 3</InertiaLink></li>
              <li><InertiaLink href="/job-detail.html">Job detail</InertiaLink></li>
              <li><InertiaLink href="/job-add.html">Post a job</InertiaLink></li>
              <li><InertiaLink href="/job-manage.html">Manage jobs</InertiaLink></li>
            </ul>
          </li>
          <li>
            <a href="#">Resume</a>
            <ul>
              <li><InertiaLink href="/resume-list.html">Browse resumes</InertiaLink></li>
              <li><InertiaLink href="/resume-detail.html">Resume detail</InertiaLink></li>
              <li><InertiaLink href="/resume-add.html">Create a resume</InertiaLink></li>
              <li><InertiaLink href="/resume-manage.html">Manage resumes</InertiaLink></li>
            </ul>
          </li>
          <li>
            <a href="#">Company</a>
            <ul>
              <li><InertiaLink href="/company-list.html">Browse companies</InertiaLink></li>
              <li><InertiaLink href="/company-detail.html">Company detail</InertiaLink></li>
              <li><InertiaLink href="/company-add.html">Create a company</InertiaLink></li>
              <li><InertiaLink href="/company-manage.html">Manage companies</InertiaLink></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul>
              <li><InertiaLink href="/page-about.html">About</InertiaLink></li>
              <li><InertiaLink href="/page-contact.html">Contact</InertiaLink></li>
              <li><InertiaLink href="/page-faq.html">FAQ</InertiaLink></li>
              <li><InertiaLink href="/page-pricing.html">Pricing</InertiaLink></li>
              <li><InertiaLink href="/page-typography.html">Typography</InertiaLink></li>
              <li><InertiaLink href="/page-ui-elements.html">UI elements</InertiaLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

