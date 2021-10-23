import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import oic from './OICposter.jpeg'
import git from './Gitworkshop.jpeg'
import { IoIosShareAlt } from 'react-icons/io';
import Navbar from './Navbar'
import EventsCalender from './EventsCalender';
import Footer from './Footer';
import { Link} from 'react-router-dom'
import toycathon from './Toycathon.png'
import eco1 from './eco1.jpeg'

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
    <Navbar />
    <div>
    <Container>
    <Row>
        <Col xl="8" style={content}>
        <h1 style={heading}>ECOVISION</h1>
        <p>25-10-2021 to 30-10-2021</p>
        <br></br>
        <p>Single-use plastic degrades into microplastic which pollutes the environment. It is alarming to note that microplastic is now found on the most remote mountaintops and in the deepest oceans. Single-use plastic destroys the ecological balance and has extremely detrimental long-term implications. </p> 
        <br></br>
<p>ECOVISION is an initiative by CII in alignment with the call from the Ministry of Education towards the elimination of single-use plastic. We aim to spread awareness and celebrate the fusion of nature with sustainable and eco-friendly technologies. </p>
<br></br>
<p>As part of the ECOVISION initiative, CII will host talks from subject matter experts to highlight the problems and opportunities for sustainable innovation followed by a hackathon in which students showcase their innovative projects. 

This is a golden opportunity for engineering enthusiasts to showcase their creativity through ideas that push for our sustainable development and stand a chance to win prototype translational support.</p>

        <Link to={`${process.env.PUBLIC_URL}/events/ecovision`} style={link}>Learn more</Link>
        <IoIosShareAlt style={share}/>
        </Col>
        <Col xl="4" style={block}>
        <img src={eco1} style={image} alt="InnovationGarage" />

        </Col>
    </Row>
     <Row>
    <Col xl="4" style={block}>
        <img src={toycathon} style={image} alt="InnovationGarage" />

        </Col>
        <Col xl="8" style={content}>
        <h1 style={heading}>TOYCATHON'21</h1>
        <p>22-24th June 2021</p>
        <p>Toycathon 2021 is an inter-ministerial initiative organized by Ministry of Education’s Innovation Cell with support from All India Council for Technical Education, Ministry of Women and Child Development, Ministry of Commerce and Industry, Ministry of MSME, Ministry of Textiles and Ministry of Information and Broadcasting.

Toycathon 2021 is a unique opportunity for Students, Teachers, Start-ups and Toy experts/professionals in India to submit their innovative toys/games concepts and win large number of prizes worth Rs. 50 lakhs.</p>
        {/* <Link to="https://toycathon.mic.gov.in" >LEARN MORE</Link> */}
        <a href="https://toycathon.mic.gov.in" style={link}>Learn More</a>
        
        <IoIosShareAlt style={share}/>
        </Col>

    </Row>
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