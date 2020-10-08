import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import oic from './OICposter.jpeg'
import git from './Gitworkshop.jpeg'
import { IoIosShareAlt } from 'react-icons/io';
import EventHeader from './EventHeader';
import EventsCalender from './EventsCalender';
import Footer from './EventFooter';
import { Link} from 'react-router-dom'
const content={
    backgroundColor:"rgb(56,56,56)",
    padding:"15px",
    color:"white"
};
const heading={
    fontWeight:"1000",
    fontSize:"50px"
}
const block={

};
const image={
    width:"100%",
    height:"100%"
};
const link={
    color:"#5dbcd2",
    letterSpacing:"1px",
    fontWeight:"bold",
    fontSize:"25px"
}
const share={
    fontSize:"25px",
    float:"Right"
};
const Events=(props)=>{return (
    <>
    <EventHeader />
    <div>
    <Container>
    <Row>
        <Col xl="8" style={content}>
        <h1 style={heading}>OPEN INNOVATION <br></br>CHALLENGE</h1>
        <p>24-12-2020</p>
        <p>In line with Atma Nirbhar Bharat, CII, NITW is conducting an Open Innovation Challenge for Students and Start-ups for developing apps and toys for children to help in their learning process. The outline of the event has been sent to the MHRD as per the call and this is a brilliant opportunity to impact a lot of the student community on a National level.</p>
        <Link to={`${process.env.PUBLIC_URL}/events/oic`} style={link}>Learn more</Link>
        <IoIosShareAlt style={share}/>
        </Col>
        <Col xl="4" style={block}>
        <img src={oic} style={image} alt="InnovationGarage" />

        </Col>
    </Row>
    <br></br>
    <br></br>
    <Row>
    <Col xl="4" style={block}>
        <img src={git} style={image} alt="InnovationGarage" />

        </Col>
        <Col xl="8" style={content}>
        <h1 style={heading}>GIT Workshop</h1>
        <p>24-12-2020</p>
        <p>Namaste!

Ever heard the terms fork and clone being used by software developers? It does sound silly, we digress, but Git is one of the most important tools for a software engineer. 

Innovation Garage is here to give you the low down on GitHub and Open Source Tools. We’ll teach you cloning, forking and installing repositories as well as give you an insight on how to participate in Hacktoberfest, a month long celebration of Open Source software.</p>
        <Link to={`${process.env.PUBLIC_URL}/`} style={link}>REGISTER NOW</Link>
        <IoIosShareAlt style={share}/>
        </Col>

    </Row>
    <Row>
        <Col xl="6">
        {/* <EventsCalender /> */}
        </Col>
    </Row>
    </Container>
    </div>
    <EventsCalender />
    <Footer />
    </>
 );
 }
 export default Events;