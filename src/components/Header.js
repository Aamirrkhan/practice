import React from "react";

export default function Header() {
  return (
    <div>
      <div className="header-box">
        <div className="container">
          <div className="top-header">
            <div className="d-flex  pt-4">
              <div className="left-side">
                <p className="sm-para text-white">
                  Email: <a href="support@gmail.com" className="text-white">support@gmail.com</a>
                </p>
              </div>
              <div className="right-side d-flex">
                <p className="sm-para text-white">English</p>
                <button className="header-btn">Send Flower</button>
              </div>
            </div>
          </div>

          <div className="banner-heading">
              <h1 className="big-head text-white text-center">Funeral Plans To Help You Do Right By Your Family</h1>
              <p className="para text-white sm-whight text-center">We know how hard it is to lose a loved one, so let us help you. It is our sincere endeavor to serve <br></br> our families with the most respectful and professional care in their time of need.</p>
              <button className="header-btn text-center">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
