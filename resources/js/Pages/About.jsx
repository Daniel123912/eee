import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function About({auth}) {
  return (
    <DefaultLayout auth={auth}>
  {/* Site header */}
  <header
    className="page-header bg-img size-lg"
    style={{ backgroundImage: 'url(storage/upload/bg-banner2.jpg)' }}
  >
    <div className="container no-shadow">
      <h1 className="text-center">About us</h1>
      <p className="lead text-center">
        Keep reading this page to figure out how we got started and who is
        behind it!
      </p>
    </div>
  </header>
  {/* END Site header */}
  {/* Main container */}
  <main>
    {/* About */}
    <section>
      <div className="container">
        <h5>The first days</h5>
        <p>
          Computer technology revolutionized typography in the 20th century.
          Personal computers in the 1980s like the Macintosh allowed type
          designers to create types digitally using commercial graphic design
          software. Digital technology also enabled designers to create more
          experimental typefaces, alongside the practical fonts of traditional
          typography. Designs for typefaces could be created faster with the new
          technology, and for more specific functions. The cost for developing
          typefaces was drastically lowered, becoming widely available to the
          masses. The change has been called the “democratization of type” and
          has given new designers more opportunities to enter the field.
        </p>
        <p>
          Pellentesque ullamcorper erat non malesuada dictum. Cras nec dui
          metus. Nam non consequat turpis. Aenean ut arcu porttitor, auctor nibh
          tempor, interdum quam. Etiam eu vehicula magna. Quisque ut egestas
          sem. Phasellus rutrum, nibh et efficitur condimentum, eros erat
          pellentesque est, ut malesuada nunc magna vel velit. In hac habitasse
          platea dictumst. Praesent volutpat dignissim tortor dignissim
          imperdiet. Cras accumsan vulputate dolor, nec condimentum nulla
          tincidunt eu.
        </p>
        <h5>How we resolve it?</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          tristique odio. Quisque nec sollicitudin est. Sed vel malesuada diam.
          Donec laoreet scelerisque imperdiet. Sed eleifend porta lorem a
          dictum. Sed lorem lorem, rhoncus eget posuere eget, bibendum ut odio.
          Nulla lacinia nunc et fermentum lobortis. Fusce scelerisque, lacus
          tincidunt pellentesque luctus, tellus risus consectetur dui, ut
          accumsan tellus leo vel mauris. Aenean id tortor lacus.
        </p>
        <h5>What's our solution?</h5>
        <p>
          Quisque lobortis accumsan tempus. Mauris pretium neque eu posuere
          molestie. Maecenas tincidunt eleifend egestas. Vestibulum tellus
          augue, laoreet sit amet quam nec, pulvinar luctus nisl. In consequat
          elit et aliquet posuere. Mauris porttitor est a ipsum vehicula, non
          porttitor quam tincidunt. Proin id orci tortor. Integer sit amet enim
          a nisi sagittis ultrices. Sed efficitur feugiat lobortis. In in lorem
          mauris. Ut placerat velit ut ligula placerat, eu accumsan sapien
          luctus. Vivamus in est sit amet felis dictum dapibus. Sed et eros sed
          massa porttitor volutpat vel at orci. Proin et lacus molestie,
          bibendum nisi eu, bibendum velit.
        </p>
      </div>
    </section>
    {/* END About */}
    {/* Team */}
    <section className="bg-alt">
      <div className="container">
        <header className="section-header">
          <span>Who we are</span>
          <h2>Our team</h2>
          <p>Currently, we're three geek and will grow up soon</p>
        </header>
        <div className="row equal-team-members">
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="team-member">
              <h5>
                Jose Shams <small>Co-founder &amp; CEO</small>
              </h5>
              <img src="storage/upload/avatar-1.jpg" alt="avatar" />
              <ul className="social-icons">
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
              <p>
                Curabitur eros tellus, eleifend eu ligula sed, vestibulum
                venenatis justo. Nunc semper augue non enim lacinia, fermum
                condimenm nulla finibus curabitur quis.
              </p>
            </div>
          </div>
          {/* END Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="team-member">
              <h5>
                Mary Amiri <small>Co-founder &amp; CTO</small>
              </h5>
              <img src="storage/upload/avatar-3.jpg" alt="avatar" />
              <ul className="social-icons">
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
              <p>
                Curabitur eros tellus, eleifend eu ligula sed, vestibulum
                venenatis justo. Nunc semper augue non enim lacinia, fermum
                condimenm nulla finibus curabitur quis.
              </p>
            </div>
          </div>
          {/* END Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="team-member">
              <h5>
                John Doe <small>Marketing manager</small>
              </h5>
              <img src="storage/upload/avatar-2.jpg" alt="avatar" />
              <ul className="social-icons">
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
              <p>
                Curabitur eros tellus, eleifend eu ligula sed, vestibulum
                venenatis justo. Nunc semper augue non enim lacinia, fermum
                condimenm nulla finibus curabitur quis.
              </p>
            </div>
          </div>
          {/* END Team member */}
        </div>
      </div>
    </section>
    {/* END Team */}
  </main>
  {/* END Main container */}
</DefaultLayout>
  )
}
