import React, { Component } from 'react'
import igrect from './images/Ig+logo+rectangular.png';
import c4ii from './images/C4II.png'

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Footer --> */}
        <footer className="page-footer font-small mdb-color lighten-3 pt-4">

          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">

            {/* <!-- Grid row --> */}
            <div className="row">

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

                <img src={igrect} alt="Ig+logo+rectangular.png" width="200px" height="80px" className="" />
                <img src={c4ii} alt="Ig+logo+rectangular.png" width="170px" height="110px" className="ml-3 mt-3" />
              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">ABOUT</h5>

                <ul className="list-unstyled">
                  <li>
                    <p >EVENTS</p>
                  </li>
                  <li>
                    <p >PROJECTS</p>
                  </li>
                  <li>
                    <p >TEAM</p>
                  </li>
                </ul>

              </div>

              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 text-left  my-4">
                <h5 className="font-weight-bold text-uppercase mb-4 ">BLOG</h5>
                <ul className="list-unstyled">
                  <li>
                    <p >LATEST</p>
                  </li>
                  <li>
                    <p >TECH</p>
                  </li>
                  <li>
                    <p >DESIGN</p>
                  </li>
                  <li>
                    <p >REPORT</p>
                  </li>
                </ul>

              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

                {/* <!-- Contact details --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">Contact Us</h5>

                <ul className="list-unstyled">
                  <li>

                    <p className="">
                      <i className="fas fa-home mr-3 "></i>
           NIT Warangal, Telangana</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> ig-nitw@student.nitw.ac.in</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone mr-3"></i> +9 999 888 77 72</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-print mr-3"></i> +9 999 888 77 74</p>
                  </li>
                </ul>

              </div>
            </div>
            {/* <!-- Grid row --> */}
          </div>
          {/* <!-- Footer Links --> */}
          <hr />
          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3 font-weight-bold">© 2020 Copyright:
          InnovationGarage
      </div>
          {/* <!-- Copyright --> */}
          <br />
          <br />
        </footer>
        {/* <!-- Footer --></div> */}
      </div>
    )
  }
}




