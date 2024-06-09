import { Link } from "@inertiajs/react";

const DefaultLayout = ({ children,auth }) => {


  // const imageUrl = 'https://github.com/Daniel123912/vite/blob/3432210668bc3e698c1f7c7f8619c7d219c6ed68/resources/img/logo.png';
  return (
    <div>
      <header>
        {/* Здесь можно добавить заголовок или навигацию */}
        <nav className="navbar">
      <div className="container">
        <div className="pull-left">
          <a className="navbar-toggle" href="#" data-toggle="offcanvas"><i className="ti-menu"></i></a>
          <div className="logo-wrapper">
            <a className="logo" href={route('home')}><img src="storage/upload/logo.png" alt="logo" /></a>
            <a className="logo-alt" href={route('home')}><img src="storage/upload/logo.png" alt="logo-alt" /></a>
            
          </div>
        </div>
        {/* END Logo */}
        {/* User account */}
        {!auth || auth.user === null ? (
  <div className="pull-right user-login">
  <Link className="btn btn-sm btn-primary"  href={route('login')}>Login</Link> or <Link href={route('recording')}>register</Link>
</div>

) : (                
<div className="pull-right">
    <div className="dropdown user-account">
      <a className="dropdown-toggle" href="#" data-toggle="dropdown">
        <img src="storage/upload/logo-envato.png" alt="avatar" />
      </a>
      <ul className="dropdown-menu dropdown-menu-right">
        <li>
          <Link href={route('dashboard')}>Профиль</Link>
        </li>
        <li>
          <a href="user-register.html">Register</a>
        </li>
        <li>
          <a href="user-forget-pass.html">Forget pass</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
)}
        <ul className="nav-menu">
          <li>
            {/* <a className="active" href="index.html">Home</a> */}
            <ul>
              <li><Link href={route('home')}>Version 1</Link></li>
              {/* <li><a href="index-2.html">Version 2</a></li> */}
            </ul>
          </li>
          <li>
            <a href="#">Position</a>
            <ul>
              <li><Link href={route('browsejobs')}>Browse jobs </Link></li>
              {/* <li><Link href={route('Jobdetail')}>Job detail</Link></li> */}
              {/* <li><Link href={route('Postajob')}>Post a job</Link></li> */}
              <li><Link href="job-manage.html">Manage jobs</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">Resume</a>
            <ul>
              <li><Link href={route('browseresumes')}>Browse resumes</Link></li>
              <li><Link href={route('addvacancyform')}>Resume detail</Link></li>
              <li><Link href={route('resume')}>Create a resume</Link></li>
              {/* <li><Link href="resume-manage.html">Manage resumes</Link></li> */}
            </ul>
          </li>
          <li>
            <a href="#">Company</a>
            <ul>
              <li><Link href={route('browsecompanies')}>Browse companies</Link></li>
              <li><Link href={route('companydetail')}>Company detail</Link></li>
              {/* <li><Link href="company-add.html">Create a company</Link></li>
              <li><Link href="company-manage.html">Manage companies</Link></li> */}
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul>
              <li><Link href={route('about')}>About</Link></li>
              <li><Link href={route('contact')}>Contact</Link></li>
              <li><Link href={route('faq')}>FAQ</Link></li>
              <li><Link href={route('pricing')}>Pricing</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className="site-footer">
    {/* Top section */}
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            An employment website is a web site that deals specifically with
            employment or careers. Many employment websites are designed to
            allow employers to post job requirements for a position to be filled
            and are commonly known as job boards. Other employment sites offer
            employer reviews, career and job-search advice, and describe
            different job descriptions or employers. Through a job website a
            prospective employee can locate and fill out a job application.
          </p>
        </div>
        <div className="col-xs-6 col-md-3">
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
        </div>
        <div className="col-xs-6 col-md-3">
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
        </div>
      </div>
      <hr />
    </div>
    {/* END Top section */}
    {/* Bottom section */}
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
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
        </div>
      </div>
    </div>
    {/* END Bottom section */}
  </footer>
  
    </div>
  );
};

export default DefaultLayout;
DefaultLayout.jsx