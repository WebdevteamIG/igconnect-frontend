import React from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import header from './images/ecovision-header.png'
import turtle from './images/ecovision-turtle.png'
import './ecovision.css'
import text from './images/text.png'
import zeus from './images/ecovision-zeus.png'
import { Container, Row, Col } from 'reactstrap';
import timeline from './images/ecovision-timeline.png'
import Footer from './Footer';
import register from './images/register.png'
import time from './images/time.png'
const Ecovision = () => {
    const headerStyle={
        width: "50%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto"
    }
    const column = {
        width: "70%",
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        height: "auto"
    }
    const zeusStyle = {
        width: "100%",
        height: "auto"

    }
    return(
        <div className="headerStyle">
            <Navbar />
            <img src={header} style={headerStyle} className="headerStyle" alt="" />
            <br />
            <img src={text} style={headerStyle} alt="" />
            <img src={turtle} style={headerStyle} alt="Ecovision Turtle" />

            <br />
            {/*testimonials */}

            <br />
            <Container>
                <Row xs="2">
                    <Col><img src={zeus} style={zeusStyle} /></Col>
                    <Col>
                        <img src={timeline} style={column} />
                        <img src={time} style={zeusStyle} />
                        <a href="https://dare2compete.com/o/IxRc92U?lb=QmKZXO8">
                        <img src={register} style={column} />
                        </a>
                    </Col>
                </Row>
            </Container>
            

            <Footer />
        </div>
        
    );
};

export default Ecovision;