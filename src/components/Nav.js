import React from 'react'
import {
  Bootstrap,
  Button,
  DropdownButton,
  MenuItem,
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  FormGroup,
  FormControl
} from 'react-bootstrap';

const style={
      padding: 'inherit'
}

function Naver(){
  return (
      <div>
      

          <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#about" style={style}>Kyle Frable</a>
        <a href="#contact" style={style}>Contact</a>
        <a href="#contact" style={style}>Projects</a>
        <a href="#contact" style={style}>skills</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {/*<Nav>
      <ul className='nav'>
        <li class = 'list'><a href="#contact">Contact</a></li>
        <li class = 'list'><a href="/">HOME</a></li>
        <li class = 'list'><a href="/style">STYLE</a></li>
      </ul>
       </Nav>*/} 
      {/*<Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>*/}
    </Navbar.Collapse>
  </Navbar>
     {/* <Nav>
      <ul className='nav'>
        <li class = 'list'><a href="#contact">Contact</a></li>
        <li class = 'list'><a href="/">HOME</a></li>
        <li class = 'list'><a href="/style">STYLE</a></li>
      </ul>
       </Nav>*/} 

       
        
          
          
      

        
      </div>
    )
}

export default Naver