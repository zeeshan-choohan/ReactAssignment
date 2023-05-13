import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends React.Component{
    render(){
        return(
            <>
            <Navbar bg = "light" expand="lg">
      <Container>
      <img
              alt=""
              src="https://freepngimg.com/thumb/goat/8-2-goat-png.png"
              width="70"
              height="50"
              // className="d-inline-block align-top"
              style={{marginRight:"20px"}}
              />
        <Navbar.Brand href="#home" style={{color:"#617A55"}}><b>Saylani Livestock Shipping</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link"><Link to={"/Home"} style={{textDecoration:'none'}}><b style={{color:"#617A55"}}>Home</b></Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/Gallery"} style={{textDecoration:'none'}}><b style={{color:"#617A55"}}>Gallery</b></Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/ShippingServices"} style={{textDecoration:'none'}}><b style={{color:"#617A55"}}>Shipping Services</b></Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/ContactUs"} style={{textDecoration:'none'}}><b style={{color:"#617A55"}}>Contact Us</b></Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/FAQ"} style={{textDecoration:'none'}}><b style={{color:"#617A55"}}>FAQ</b></Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/BankDonation"} style={{textDecoration:'none'}}><b style={{color:"#617A55"}}>Bank Donation's</b></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#link" style={{color:"#617A55"}}><Link to={"/SignIn"} style={{textDecoration:'none'}}><b style={{color:"#617A55"}}>LogOut</b></Link></Nav.Link>
      </Container>
    </Navbar>
            </>
        )
    }
}
export default NavBar;