import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Resume({auth}) {
  return (
    <DefaultLayout auth={auth}>
      <form className='resumeForm' >
  <header className="page-header">
    <div className="container page-name">
      <h1 className="text-center">Add your resume</h1>
      <p className="lead text-center">Create your resume and put it online.</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <div className="form-group">
            <input
              type="file"
              className="dropify"
              data-default-file="assets/img/avatar.jpg"
            />
            <span className="help-block">
              Please choose a 4:6 profile picture.
            </span>
          </div>
        </div>
        <div className="col-xs-12 col-sm-8">
          <div className="form-group">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Headline (e.g. Front-end developer)"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Short description about you"
              defaultValue={""}
            />
          </div>
          <hr className="hr-lg" />
          <h6>Basic information</h6>
          <div className="row">
            <div className="form-group col-xs-12 col-sm-6">
              <div className="input-group input-group-sm">
                <span className="input-group-addon">
                  <i className="fa fa-map-marker" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location, e.g. Melon Park, CA"
                />
              </div>
            </div>
            <div className="form-group col-xs-12 col-sm-6">
              <div className="input-group input-group-sm">
                <span className="input-group-addon">
                  <i className="fa fa-globe" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Website address"
                />
              </div>
            </div>
            <div className="form-group col-xs-12 col-sm-6">
              <div className="input-group input-group-sm">
                <span className="input-group-addon">
                  <i className="fa fa-usd" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Salary, e.g. 85"
                />
                <span className="input-group-addon">Per hour</span>
              </div>
            </div>
            <div className="form-group col-xs-12 col-sm-6">
              <div className="input-group input-group-sm">
                <span className="input-group-addon">
                  <i className="fa fa-birthday-cake" />
                </span>
                <input type="text" className="form-control" placeholder="Age" />
                <span className="input-group-addon">Years old</span>
              </div>
            </div>
            <div className="form-group col-xs-12 col-sm-6">
              <div className="input-group input-group-sm">
                <span className="input-group-addon">
                  <i className="fa fa-phone" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="form-group col-xs-12 col-sm-6">
              <div className="input-group input-group-sm">
                <span className="input-group-addon">
                  <i className="fa fa-envelope" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>
          </div>
          <hr className="hr-lg" />
          <h6>Tags list</h6>
          <div className="form-group">
            <input
              type="text"
              defaultValue="HTML,CSS,Javascript"
              data-role="tagsinput"
              placeholder="Tag name"
            />
            <span className="help-block">Write tag name and press enter</span>
          </div>
        </div>
      </div>
      <div className="button-group">
        <div className="action-buttons">
          <div className="upload-button">
            <button className="btn btn-block btn-gray">
              Choose a resume file
            </button>
            <input type="file" />
          </div>
          <div className="upload-button">
            <button className="btn btn-block btn-primary">
              Choose a cover image
            </button>
            <input id="cover_img_file" type="file" />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* END P
   */}


  {/* END Page header */}
  {/* Main container */}
  <main>
    {/* Social media */}
    <section>
      <div className="container">
        <header className="section-header">
          <span>Get connected</span>
          <h2>Social media</h2>
        </header>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-facebook" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-google-plus" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-dribbble" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-pinterest" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-twitter" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-github" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-instagram" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-youtube" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile URL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Social media */}
    {/* Education */}
    <section className=" bg-alt">
      <div className="container">
        <header className="section-header">
          <span>Latest degrees</span>
          <h2>Education</h2>
        </header>
        <div className="row">
          <div className="col-xs-12">
            <div className="item-block">
              <div className="item-form">
                <button className="btn btn-danger btn-float btn-remove">
                  <i className="ti-close" />
                </button>
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="form-group">
                      <input
                        type="file"
                        className="dropify"
                        data-default-file="assets/img/logo-default.png"
                      />
                      <span className="help-block">
                        Please choose a square logo
                      </span>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Degree, e.g. Bachelor"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Major, e.g. Computer Science"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="School name, e.g. Massachusetts Institute of Technology"
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">Date from</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2012"
                        />
                        <span className="input-group-addon">Date to</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2016"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Short description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 duplicateable-content">
            <div className="item-block">
              <div className="item-form">
                <button className="btn btn-danger btn-float btn-remove">
                  <i className="ti-close" />
                </button>
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="form-group">
                      <input
                        type="file"
                        className="dropify"
                        data-default-file="assets/img/logo-default.png"
                      />
                      <span className="help-block">
                        Please choose a square logo
                      </span>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Degree, e.g. Bachelor"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Major, e.g. Computer Science"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="School name, e.g. Massachusetts Institute of Technology"
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">Date from</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2012"
                        />
                        <span className="input-group-addon">Date to</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2016"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Short description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 text-center">
            <br />
            <button className="btn btn-primary btn-duplicator">
              Add education
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* END Education */}
    {/* Work Experience */}
    <section>
      <div className="container">
        <header className="section-header">
          <span>Past positions</span>
          <h2>Work Experience</h2>
        </header>
        <div className="row">
          <div className="col-xs-12">
            <div className="item-block">
              <div className="item-form">
                <button className="btn btn-danger btn-float btn-remove">
                  <i className="ti-close" />
                </button>
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="form-group">
                      <input
                        type="file"
                        className="dropify"
                        data-default-file="assets/img/logo-default.png"
                      />
                      <span className="help-block">
                        Please choose a square logo
                      </span>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Position, e.g. UI/UX Researcher"
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">Date from</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2012"
                        />
                        <span className="input-group-addon">Date to</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2016"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="form-group">
                      <textarea
                        className="summernote-editor"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 duplicateable-content">
            <div className="item-block">
              <div className="item-form">
                <button className="btn btn-danger btn-float btn-remove">
                  <i className="ti-close" />
                </button>
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="form-group">
                      <input
                        type="file"
                        className="dropify"
                        data-default-file="assets/img/logo-default.png"
                      />
                      <span className="help-block">
                        Please choose a square logo
                      </span>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Position, e.g. UI/UX Researcher"
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">Date from</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2012"
                        />
                        <span className="input-group-addon">Date to</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 2016"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="form-group">
                      <textarea
                        className="summernote-editor"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 text-center">
            <br />
            <button className="btn btn-primary btn-duplicator">
              Add experience
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* END Work Experience */}
    {/* Skills */}
    <section className=" bg-alt">
      <div className="container">
        <header className="section-header">
          <span>Expertise Areas</span>
          <h2>Skills</h2>
        </header>
        <div className="row">
          <div className="col-xs-12">
            <div className="item-block">
              <div className="item-form">
                <button className="btn btn-danger btn-float btn-remove">
                  <i className="ti-close" />
                </button>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skill name, e.g. HTML"
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Skill proficiency, e.g. 90"
                        />
                        <span className="input-group-addon">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 duplicateable-content">
            <div className="item-block">
              <div className="item-form">
                <button className="btn btn-danger btn-float btn-remove">
                  <i className="ti-close" />
                </button>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skill name, e.g. HTML"
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Skill proficiency, e.g. 90"
                        />
                        <span className="input-group-addon">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 text-center">
            <br />
            <button className="btn btn-primary btn-duplicator">
              Add experience
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* END Skills */}
    {/* Submit */}
    <section
      className=" bg-img"
      style={{ backgroundImage: "url(assets/img/bg-facts.jpg)" }}
    >
      <div className="container">
        <header className="section-header">
          <span>Are you done?</span>
          <h2>Submit resume</h2>
          <p>
            Please review your information once more and press the below button
            to put your resume online.
          </p>
        </header>
        <p className="text-center">
          <button className="btn btn-success btn-xl btn-round">
            Submit your resume
          </button>
        </p>
      </div>
    </section>
    {/* END Submit */}
  </main>
  {/* END Main container */}
</form>
    </DefaultLayout>
  )
}
