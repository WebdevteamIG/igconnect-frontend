import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import oic from '../OICposter.jpeg';
import git from '../Gitworkshop.jpeg';
import { IoIosShareAlt } from 'react-icons/io';
import Navbar from '../Navbar';
import EventsCalender from '../EventsCalender';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import toycathon from '../Toycathon.png';

const content = {
  backgroundColor: 'rgb(56,56,56)',
  padding: '15px',
  color: 'white',
};
const heading = {
  fontWeight: '1000',
  fontSize: '40px',
};
const block = {};
const image = {
  width: '100%',
  height: '100%',
};
const link = {
  color: '#5dbcd2',
  letterSpacing: '1px',
  fontWeight: 'bold',
  fontSize: '25px',
};
const btn = {
  color: 'Black',
  backgroundColor: 'White',
  letterSpacing: '1px',
  fontWeight: 'bold',
  float: 'right',
  position: 'absolute',
  right: 0,
  bottom: 0,
  marginRight: 4,
  marginBottom: 4,
  fontSize: '25px',
};
const team = {
  color: 'Black',
  backgroundColor: 'White',
  borderRadius: 25,
  letterSpacing: '0.5px',
  fontWeight: 'bold',
  float: 'right',
  position: 'absolute',
  right: 0,
  top: 0,
  marginRight: 10,
  marginTop: 20,
  padding: 9,
  fontSize: '25px',
};
const share = {
  fontSize: '25px',
  float: 'Right',
};

const forms = (props) => {
  return (
    <>
      <Navbar />
      <div>
        <Container>
          <Row>
            <Col xl='4' style={block}>
              <img src={toycathon} style={image} alt='InnovationGarage' />
            </Col>
            <Col xl='8' style={content}>
              <h1 style={heading}>CII Startup Registration</h1>
              <h2 style={team}>Team Cybsec</h2>
              <p>22-24th June 2021</p>
              <p>
                Toycathon 2021 is an inter-ministerial initiative organized by
                Ministry of Education’s Innovation Cell with support from All
                India Council for Technical Education, Ministry of Women and
                Child Development, Ministry of Commerce and Industry, Ministry
                of MSME, Ministry of Textiles and Ministry of Information and
                Broadcasting. Toycathon 2021 is a unique opportunity for
                Students, Teachers, Start-ups and Toy experts/professionals in
                India to submit their innovative toys/games concepts and win
                large number of prizes worth Rs. 50 lakhs.
              </p>
              <a
                href='https://nitw.ac.in/cii/forms/6'
                className='btn btn-success'
                style={{
                  float: 'right',
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                View Form
              </a>

              <IoIosShareAlt style={share} />
            </Col>
          </Row>
          <Row>
            <Col xl='8' style={content}>
              <h1 style={heading}>
                OPEN INNOVATION <br></br>CHALLENGE
              </h1>
              <h4 style={team}>Team Cybsec</h4>
              <p>24-12-2020</p>
              <p>
                In line with Atma Nirbhar Bharat, CII, NITW is conducting an
                Open Innovation Challenge for Students and Start-ups for
                developing apps and toys for children to help in their learning
                process. The outline of the event has been sent to the MHRD as
                per the call and this is a brilliant opportunity to impact a lot
                of the student community on a National level.
              </p>
              <a
                href='https://forms.gle/JmDwpaFhnJw5gPPC7'
                className='btn btn-success'
                style={{
                  float: 'right',
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                View Form
              </a>

              <IoIosShareAlt style={share} />
            </Col>
            <Col xl='4' style={block}>
              <img src={oic} style={image} alt='InnovationGarage' />
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col xl='4' style={block}>
              <img src={git} style={image} alt='InnovationGarage' />
            </Col>
            <Col xl='8' style={content}>
              <h1 style={heading}>GIT Workshop</h1>
              <p>24-12-2020</p>
              <p>
                Namaste! Ever heard the terms fork and clone being used by
                software developers? It does sound silly, we digress, but Git is
                one of the most important tools for a software engineer.
                Innovation Garage is here to give you the low down on GitHub and
                Open Source Tools. We’ll teach you cloning, forking and
                installing repositories as well as give you an insight on how to
                participate in Hacktoberfest, a month long celebration of Open
                Source software.
              </p>
              <Link to={`${process.env.PUBLIC_URL}/`} style={link}>
                REGISTER NOW
              </Link>
              <IoIosShareAlt style={share} />
            </Col>
          </Row>
          <Row>
            <Col xl='6'>{/* <EventsCalender /> */}</Col>
          </Row>
        </Container>
      </div>
      <EventsCalender />
      <Footer />
    </>
  );
};
export default forms;
