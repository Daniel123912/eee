

export default function SiteHeader() {
  return (
    <header className="site-header size-lg text-center" style={{ backgroundImage: 'url(../src/assets/bg-banner1.jpg)' }}>
      <div className="container">
        <div className="col-xs-12">
          <br /><br />
          <h2>We offer <mark>1,259</mark> job vacancies right now!</h2>
          <h5 className="font-alt">Find your desire one in a minute</h5>
          <br /><br /><br />
          <form className="header-job-search">
            <div className="input-keyword">
              <input type="text" className="form-control" placeholder="Job title, skills, or company" />
            </div>
            <div className="input-location">
              <input type="text" className="form-control" placeholder="City, state or zip" />
            </div>
            <div className="btn-search">
              <button className="btn btn-primary" type="submit">Find jobs</button>
              <a href="job-list.html">Advanced Job Search</a>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}
