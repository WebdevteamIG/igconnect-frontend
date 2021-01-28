import React, { Component } from 'react'

export default class OicWinners extends Component {
  render() {
    return (
      <div>
        <div className="text-center mx-auto">
          <h1 className="commonHeading d-inline">WINNERS</h1>
        </div>

        <div className="text-center mx-auto mt-4" style={{ width: "700px" }} >
          <table className="table  " style={{ border: "none" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Branch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1.</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2.</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3.</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">4.</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">5.</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
