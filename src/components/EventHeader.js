import React, {useState} from 'react';
import './Event_header.css';
import ig from './ig.png';
import title from './title.png';
import nitw from './nitwlogo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
const navbar={
  marginLeft:"10vw",
  marginRight:"10vw"
}

const navlink={
  fontWeight:"bold",
  cursor:"pointer"
};
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
      <Navbar color="white" style={navbar} light expand="md">
        <NavbarBrand href="/"><img src={nitw} alt="Nitw" width="80px" height="80px" /><img alt="ig" src={ig}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img alt="title"  src={title}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/"></NavLink>
            </NavItem>
          </Nav>
          <Nav pullRight navbar>
        <NavItem eventKey={1} >
        <NavLink style={navlink}
  href="/"

>HOME</NavLink>

          </NavItem>
        <NavItem eventKey={2} style={navlink}>
        <NavLink strict 
href="#"
  style={{color:"rgb(93,188,210)"}}
 >EVENTS</NavLink>
        </NavItem>
        <NavItem eventKey={3} style={navlink}>
        <NavLink
  href="/about"

>ABOUT</NavLink>

        </NavItem>
        <NavItem eventKey={4} style={navlink}>
        <NavLink
  href="#blog"

>BLOG</NavLink>

        </NavItem>
      </Nav>
        </Collapse>
      </Navbar>
      </div>
  );
}

export default Header;