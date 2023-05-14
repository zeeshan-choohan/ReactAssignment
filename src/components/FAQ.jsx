import React from "react";
import NavBar from "../components/NavBr";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class FAQ extends React.Component{
    render(){
        return(
            <>
           <NavBar/>


           <h1 style={{color:'GrayText', textAlign: 'center'}}>FAQ's About Saylani ?</h1>
           <h4  style={{color:'GrayText', textAlign: 'center'}}>We've got you covered </h4>

           <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{color:'GrayText', textAlign: 'center'}}>Find Fact's</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
                 <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
<Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://saylani-welfare-uk.netlify.app/Lahore-1232x500.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMxxL-sGyIyOF5Mg4pFIWsD8m8btBYSknqhF_2rwlNO-bHZblviICZL0KljTk3QSKdhQ&usqp=CAU" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://hassanhaidry.github.io/Sylani%20Welfate%20Trust%203rd%20assi_files/slider2.png" thumbnail />
        </Col>
      </Row>
    </Container>
    <Footer/>

            </>
        )
    }
}
export default FAQ;