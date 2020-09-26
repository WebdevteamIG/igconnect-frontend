import React from 'react';
import { Container, Row, Col, ListGroup,ListGroupItem } from 'reactstrap';
import logo from './logo.png';
import title from './title.png';
const footer={
    marginTop:"100px",
    width:"100%",
    backgroundColor:"rgba(96,96,96,0.2)",
    paddingTop:"50px",
    paddingBottom:"50px"
};
const listgroupitem={
backgroundColor:"transparent",
border:"none",
textAlign:"center"
};
const listitem={
    backgroundColor:"transparent",
    border:"none",
    fontWeight:"bold"
};
const listgroup={
marginLeft:"auto",
marginRight:"auto"
};
const Events=(props)=>{return (
    <div style={footer}>
    <Container>
    <Row>
        <Col xl="4">
    <ListGroup style={listgroup}>
        <ListGroupItem style={listgroupitem} >
            <img src={logo} alt="logo"></img>
        </ListGroupItem>
        <ListGroupItem style={listgroupitem} >
            <img src={title} alt="title"></img>
        </ListGroupItem>
        <ListGroupItem style={listgroupitem}>
        © 2020, INNOVATIONGARAGE.
        </ListGroupItem>
    </ListGroup>
    </Col>
    <Col xl="2">
    <ListGroup style={listgroup}>
        <ListGroupItem style={listitem}>
            ABOUT
        </ListGroupItem>
        <ListGroupItem style={listitem}>
            EVENTS
        </ListGroupItem>
        <ListGroupItem style={listitem}>
        PROJECTS
        </ListGroupItem>
        <ListGroupItem style={listitem}>
        TEAM
        </ListGroupItem>
    </ListGroup>
    </Col>
    <Col xl="2">
    <ListGroup style={listgroup}>
        <ListGroupItem style={listitem}>
            BLOG
        </ListGroupItem>
        <ListGroupItem style={listitem}>
            LATEST
        </ListGroupItem>
        <ListGroupItem style={listitem}>
        TECH
        </ListGroupItem>
        <ListGroupItem style={listitem}>
        DESIGN
        </ListGroupItem>
        <ListGroupItem style={listitem}>
            REPORTS
        </ListGroupItem>
    </ListGroup>
    </Col>
    <Col xl="2">
    <ListGroup style={listgroup}>
        
        <ListGroupItem style={listitem}>
            CONTACT US
        </ListGroupItem>
    </ListGroup>
    </Col>
    </Row>
    </Container>
    
    </div>
 );
 }
 export default Events;
 