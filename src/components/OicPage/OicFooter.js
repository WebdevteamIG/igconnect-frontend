import React, { Component } from 'react'

export default class OicFooter extends Component {
  render() {
    return (
      <div>
        <hr />

        <div className="row " id="OicFooter">
          <div className="col-lg-6 col-sm-12 text-center">
            <p> For workshop and event updates follow:
          </p>
            <a className="btn btn-link" href="http://bit.do/nitwopeninnovation">http://bit.do/nitwopeninnovation</a>

          </div>
          <div className="col-lg-6 col-sm-12 text-center" id="secondFooterText">
            <p>For queries, send an email to:
          </p >
            <i className="fas fa-envelope mr-2"></i><span className="font-weight-bold">hod_cii@nitw.ac.in</span></div>

        </div>




      </div>
    )
  }
}
