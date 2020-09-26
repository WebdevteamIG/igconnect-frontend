import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import group from './group.png';
import { IoIosShareAlt } from 'react-icons/io';
// import Calender from 'reactjs-event-calendar';
const content={
    backgroundColor:"rgb(56,56,56)",
    padding:"35px",
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
    height:"70%"
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
    <div>
    <Container>
    <Row>
        <Col xl="8" style={content}>
        <h1 style={heading}>OPEN INNOVATION <br></br>CHALLENGE</h1>
        <p>24-12-2020</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <a href="/" style={link}>REGISTER NOW</a>
        <IoIosShareAlt style={share}/>
        </Col>
        <Col xl="4" style={block}>
        <img src={group} style={image} alt="InnovationGarage" />

        </Col>
    </Row>
    <br></br>
    <br></br>
    <Row>
    <Col xl="4" style={block}>
        <img src={group} style={image} alt="InnovationGarage" />

        </Col>
        <Col xl="8" style={content}>
        <h1 style={heading}>OPEN INNOVATION <br></br>CHALLENGE</h1>
        <p>24-12-2020</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <a href="/" style={link}>REGISTER NOW</a>
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
 );
 }
 export default Events;
 