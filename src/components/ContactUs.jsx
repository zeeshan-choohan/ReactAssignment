import React from 'react';
import  Navbar  from '../components/NavBr';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer'


class ContactUs extends React.Component{
    render(){
        return(
            <>
            <Navbar />

            <Card style={{width: '75rem', margin: '10px auto'}}>
      <Card.Header ><b>CONNECT WITH SAYLANI</b></Card.Header><br/>
      <Form>
      <Row>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label><b>First Name</b></Form.Label>
          <Form.Control  type="text" placeholder="Enter First Name" />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label><b>Last Name</b></Form.Label>
          <Form.Control  type="text" placeholder="Enter Last Name" />
        </Form.Group>

      </Row>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col}  controlId="formGridAddress1">
        <Form.Label><b>Address Permanent</b></Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group as={Col}  controlId="formGridAddress2">
        <Form.Label><b>Address Current</b> </Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label><b>City</b></Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label><b>State</b></Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Sindh</option>
            <option>Punjab</option>
            <option>KPK</option>
            <option>Balochistan</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label><b>Zip</b></Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>


      <Row className="align-items-center">
      <Col xs="auto">
      <Form.Label><b>Gender</b></Form.Label>
      </Col>

        <Col xs="auto">
        <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1" /> </Col>

<Col xs="auto">
        <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios1" /> </Col>
        
        <Col xs="auto">
        <Form.Check
              type="radio"
              label="Other's"
              name="formHorizontalRadios"
              id="formHorizontalRadios3" /> </Col>
        <Col xs="auto">      
     <Button variant="primary" type="submit">
        Submit
      </Button>
      </Col></Row></Form>
      <Card.Body>
      </Card.Body>
    </Card>
    <Footer/>
            </>
        )
    }
}
export default ContactUs;