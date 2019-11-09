import React from "react"

export const Footer = () => (
  <footer>
    <div className="footer-area bg-4 ptb-70">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-5 col-xs-12">
            <div className="footer-widget">
              <h2 className="footer-title">Why to choose us?</h2>
              <p>
                Salon and Barber software gallery is a platform where you can
                find the best software for you and your salon or barbershop. All
                applications were handpicked and carefully considered before
                listed on this page. Whethever you are a hair salon, nail salon or barber shop owner 
                you will definetly find the best app for you and your customers here.
                We took a special care in order satisfy small businesses and booth rental stylists.
              </p>
            </div>
          </div>
          <div className="col-md-7 col-sm-7 col-xs-12">
            <div className="footer-widget">
              <h2 className="footer-title" id="ContactUs">
                Contact Us
              </h2>
              <ul>
                <li>
                  <i className="fa fa-envelope"></i>
                  salon.barber.app.gallery@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom bg-1">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            Copyright &copy; 2019 <a href="#">S&amp;B Gallery</a>. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
)
