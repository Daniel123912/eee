import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Pricing({auth}) {
  return (
    <DefaultLayout auth={auth}>
  {/* Site header */}
  <header
    className="page-header bg-img size-lg"
    style={{ backgroundImage: 'url(storage/upload/bg-banner2.jpg)' }}
  >
    <div className="container no-shadow">
      <h1 className="text-center">Pricing tables</h1>
      <p className="lead text-center">
        We've got an awesome pricing table and package selection. You can have
        three or four package type.
      </p>
    </div>
  </header>
  {/* END Site header */}
  {/* Main container */}
  <main>
    {/* Three types */}
    <section>
      <div className="container">
        <header className="section-header">
          <span>Plans</span>
          <h2>Three types</h2>
        </header>
        <ul className="pricing">
          <li>
            <h6>Basic Package</h6>
            <div className="price">
              <sup>$</sup>0<span>&nbsp;</span>
            </div>
            <hr />
            <p>
              <strong>1</strong> job posting
            </p>
            <p>
              <strong>No</strong> featured job
            </p>
            <p>
              <strong>5 days</strong> listing duration
            </p>
            <br />
            <a className="btn btn-primary btn-block" href="#">
              Select plan
            </a>
          </li>
          <li>
            <h6>Medium Package</h6>
            <div className="price">
              <sup>$</sup>5<sup>.99</sup>
              <span>per month</span>
            </div>
            <hr />
            <p>
              <strong>5</strong> job posting
            </p>
            <p>
              <strong>1</strong> featured job
            </p>
            <p>
              <strong>30 days</strong> listing duration
            </p>
            <br />
            <a className="btn btn-primary btn-block" href="#">
              Select plan
            </a>
          </li>
          <li>
            <h6>Big Package</h6>
            <div className="price">
              <sup>$</sup>15<sup>.99</sup>
              <span>per month</span>
            </div>
            <hr />
            <p>
              <strong>20</strong> job posting
            </p>
            <p>
              <strong>5</strong> featured job
            </p>
            <p>
              <strong>75 days</strong> listing duration
            </p>
            <br />
            <a className="btn btn-primary btn-block" href="#">
              Select plan
            </a>
          </li>
        </ul>
      </div>
    </section>
    {/* END Three types */}
    {/* Four types */}
    <section className="bg-alt">
      <div className="container">
        <header className="section-header">
          <span>Plans</span>
          <h2>Four types</h2>
        </header>
        <ul className="pricing cols-4">
          <li>
            <h6>Basic Package</h6>
            <div className="price">
              <sup>$</sup>0<span>&nbsp;</span>
            </div>
            <hr />
            <p>
              <strong>1</strong> job posting
            </p>
            <p>
              <strong>No</strong> featured job
            </p>
            <p>
              <strong>5 days</strong> listing duration
            </p>
            <br />
            <a className="btn btn-primary btn-block" href="#">
              Select plan
            </a>
          </li>
          <li>
            <h6>Medium Package</h6>
            <div className="price">
              <sup>$</sup>5<sup>.99</sup>
              <span>per month</span>
            </div>
            <hr />
            <p>
              <strong>5</strong> job posting
            </p>
            <p>
              <strong>1</strong> featured job
            </p>
            <p>
              <strong>30 days</strong> listing duration
            </p>
            <br />
            <a className="btn btn-primary btn-block" href="#">
              Select plan
            </a>
          </li>
          <li>
            <h6>Big Package</h6>
            <div className="price">
              <sup>$</sup>15<sup>.99</sup>
              <span>per month</span>
            </div>
            <hr />
            <p>
              <strong>20</strong> job posting
            </p>
            <p>
              <strong>5</strong> featured job
            </p>
            <p>
              <strong>75 days</strong> listing duration
            </p>
            <br />
            <a className="btn btn-primary btn-block" href="#">
              Select plan
            </a>
          </li>
          <li>
            <h6>Mega Package</h6>
            <div className="price">
              <sup>$</sup>24<sup>.99</sup>
              <span>per month</span>
            </div>
            <hr />
            <p>
              <strong>80</strong> job posting
            </p>
            <p>
              <strong>10</strong> featured job
            </p>
            <p>
              <strong>120 days</strong> listing duration
            </p>
            <br />
            <a className="btn btn-primary btn-block" href="#">
              Select plan
            </a>
          </li>
        </ul>
      </div>
    </section>
    {/* END Four types */}
  </main>
  {/* END Main container */}
</DefaultLayout>

  )
}
