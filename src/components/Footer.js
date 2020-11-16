import React, { useState } from 'react';
import '../App.css';
import igrect from './images/Ig+logo+rectangular.png';
import c4ii from './images/C4II.png';

const Footer = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="page-footer font-small mdb-color lighten-3 pt-4">
        {/* <!-- Footer Links --> */}
        <div className="container text-center text-md-left">
          {/* <!-- Grid row --> */}
          <div className="row">
            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-4 mr-auto my-md-4 my-0 mt-4 mb-1">
              <img
                src={igrect}
                alt="Ig+logo+rectangular.png"
                width="250px"
                height="80px"
                className=""
              />
              <img
                src={c4ii}
                alt="Ig+logo+rectangular.png"
                width="250px"
                height="110px"
                className=" mt-3"
              />
            </div>

            {/* <!-- Grid column --> */}
            <hr className="clearfix w-100 d-md-none" />

            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-4 mx-auto my-md-4 my-0 mt-4 mb-1">
              {/* <!-- Contact details --> */}
              <h2 className="font-weight-bold text-uppercase mb-4">
                Contact Us
  </h2>

              <ul className="list-unstyled">
                <li>
                  <p className="para-contact-us">
                    <i className="fas fa-home mr-3 "></i>
        NIT Warangal, Telangana
      </p>
                </li>
                <li>
                  <p className="para-contact-us">
                    <i className="fas fa-envelope mr-3"></i>{" "}
        ig-nitw@student.nitw.ac.in
      </p>
                </li>
                <li>
                  <p className="para-contact-us">
                    <i className="fas fa-phone mr-3"></i> +91 79 8786 8575
      </p>
                </li>
                {/* <li>
      <p>
        <i className="fas fa-print mr-3"></i> +9 999 888 77 74</p>
    </li> */}
              </ul>
            </div>


            {/* <!-- Grid column --> */}
            <hr className="clearfix w-100 d-md-none" />
            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1 text-center">

              {/* <ul className="list-unstyled">
                  <li>
                    <h5 className="font-weight-bold text-uppercase mb-4 ">
                      <Link to={`${process.env.PUBLIC_URL}/about`} className="footer-links">About</Link></h5>

                  </li>
                  <li>
                    <h5 className="font-weight-bold text-uppercase mb-4">
                      <Link to={`${process.env.PUBLIC_URL}/events`} className="footer-links">Events </Link></h5>

                  </li>
                </ul> */}

              {/* <!-- Social Links --> */}

              <ul className="list-unstyled">
                <li><a
                  href="https://www.facebook.com/TheInnovationGarage"
                  className="icon-button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a><br /><br /></li>
                <li><a
                  href="https://www.instagram.com/ig.nitw/"
                  className="icon-button"
                >
                  <i className="fab fa-instagram"></i>
                </a><br /><br /></li>
                <li><a
                  href="https://www.linkedin.com/company/ignitw"
                  className="icon-button"
                // id="last-social-icon"
                >
                  <i className="fab fa-linkedin-in "></i>
                </a></li>
                <li><a
                  href="https://linktr.ee/ig.nitw"
                  className="icon-button"
                  id="last-social-icon"
                >
                  <i className="fas fa-link fab"></i>
                </a></li>
              </ul>

            </div>

            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1 scrollTopDiv">
              {/* Scroll to top button */}
              <button onClick={scrollTop} className="scrollTop"
              // style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
              >
                <i className="fas fa-arrow-circle-up scrollTopIcon"></i>
              </button>
            </div>
          </div>
          {/* <!-- Grid row --> */}
        </div>
        {/* <!-- Footer Links --> */}
        <hr />
        {/* <!-- Copyright --> */}
        <div className="footer-copyright text-center py-3 font-weight-bold">
          © 2020 Copyright: InnovationGarage, NIT Warangal
          </div>
        {/* <!-- Copyright --> */}
        <br />
        <br />
      </footer>
      {/* <!-- Footer --></div> */}


    </div>
  );
}

export default Footer;