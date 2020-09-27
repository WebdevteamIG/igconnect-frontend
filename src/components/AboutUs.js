import React, { Component } from 'react'
import Navbar from './Navbar'
import igpic from './igpic.png'
import {Container} from 'reactstrap'
import Footer from './Footer'
import './example.css'

export default class AboutUs extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Container>
      <div >
        <center>
          <h1 className="about">About Us</h1>
          <img src={igpic} alt="IG PIC" />
          <br /><br /><br /><br />
          <h1 style={{color: "blue"}}>Dr V.A.Sastry Centre for Innovation and
Incubation(CII)</h1><br /><br />
          <h1 className="about">Mission</h1>
          <p>To promote innovations leading to new processes, products, designs and technologies in collaboration with
industry and thereby facilitate application of knowledge to the society. </p>
          <h1 className="about">OBJECTIVES</h1>
          </center>
          <ol>
            <li>To promote greater industry – academic interaction, by inviting leading industries to set up their
research labs at this Centre and carry out their research projects by using the talent on the campus.</li>
      <li>To encourage the first generation entrepreneurs desirous of R&D partnership with NITW or otherwise to
establish their research labs at this Centre</li>
<li>To promote innovation projects of B.Tech, and M.Tech. Students by providing appropriate facilities,
infrastructure and financial assistance as per the norms of the Institute.</li>
<li>To facilitate the ‘on campus interaction’ between the scientists of industries and faculty and students of
NITW in order to enable orientation of R&D activities of NITW to potential needs of the industry.</li>
          </ol> <br /><br /><br />
          <center>
          <h1 className="about">Facilities and Space at CII</h1>
          <p>The Centre for Innovation and Incubation, popularly known as Dr V.A.Sastry Innovation Centre (in the name of
an alumnus of 1964 B.Tech batch who donated Rs 1 crore for this building) is a G+2 building, with a floor space
of approx. 30,000 sft. The CII facilitates the following at present.</p>
            <p>Industries, who wish to establish their research labs, will be provided the necessary lab space depending upon
their requirement. The industrialists/entrepreneurs can have access to use the other Institute facilities on
payment of charges as per the norms of the Institute. The creative talent of students and the experience and
expertise of the faculty are the key factors to motivate industries to open their R&D labs at the Centre for
Innovation and Incubation of NITW.</p>
<br /><br />
<h1 className="about">Role of CII in building an entrepreneurial eco-system in the campus</h1>
<p>NIT,Warangal being a premier technical institution plays a vital role in the process of technology
entrepreneurship by offering variety of services through CII in the area of start-up creation, business incubation,
easy access to capital and knowledge access to many young potential innovators and entrepreneurs and helping
them being groomed to succeed with new and innovative ideas. Moreover, emphasis has also been given by the
institute towards entrepreneurial focused education by offering Entrepreneurship Development and Venture
Creation as elective courses for developing entrepreneurial competencies. Further, various support mechanisms
are also provided in the form of structured mentorship programs, short training to build the confidence in 
students to convert ideas to innovations and start-up establishment. Incubation facilities are also open to the
local start-ups in and around as part of the social responsibility at minimal expenses, thereby contributing
significantly in promoting the entrepreneurship culture in institute and within the country.</p><br /><br />
<h1 className="about">Start-up companies graduated</h1>
<table style={{border: "2px solid black"}}>
  <thead style={{border: "2px solid black"}}>
    <th>Person name</th>
    <th>Name of the Company</th>
    <th>Place</th>
    <th>Website</th>
  </thead>
  <tbody style={{border: "2px solid black"}}>
    <tr style={{border: "2px solid black"}}>
      <td>Soumya
Harichandan</td>
<td>Cusmat </td>
<td>Hyderabad,
Telangana</td>
<td><a href="http://www.cusmat.com/">http://www.cusmat.com/</a></td>
    </tr>
    <tr>
      <td>Shubham Saxena</td>
      <td>Archphilic</td>
      <td>Hyderabad,
Telangana</td>
<td><a href="http://www.archphillic.com/">http://www.archphillic.com/</a></td>
    </tr>
    <tr>
      <td>Aradh Vemula </td>
      <td>Centaur
Automotive</td>
<td>Hyderabad,
Telangana</td>
<td><a href="https://in.linkedin.com/in/aradhvemula">https://in.linkedin.com/in/aradhvemula</a></td>
    </tr>
  </tbody>
</table>
<br /> <br /> <br />
<h1 className="about">Innovation Garage (IG)</h1>
<p>The CII also provides the platform for the students to carry out innovative projects through innovation Garage
(IG). Innovation garage is a multidisciplinary 24X7 maker’s space for the students to work on the innovative
projects and develop prototypes. </p><br /><br />
          </center>
      </div>
      </Container>
      <Footer />
      </>
    )
  }
}

