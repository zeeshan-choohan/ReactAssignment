import React from 'react';
import NavBar from './NavBr';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ShippingServices extends React.Component{
    render(){
        return(
            <>
           <NavBar/>
           <Container> 
             <Row> 

        <Col lg={4} ms={12} sm={12} xs={12}>
       <Card style={{ width: '25rem' }} className='m-1'>
      <Card.Img  src="https://cdn.vox-cdn.com/thumbor/c5qc_YiZVLnEcW5yHMZ0wV2utfc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24358185/WAM9943a.jpg" />
      <Card.Body>
        <Card.Title>International Air Animal Shipping</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={4} ms={12} sm={12} xs={12}>
       <Card style={{ width: '25rem' }} className='m-1'>
      <Card.Img  src="https://cdn.vox-cdn.com/thumbor/c5qc_YiZVLnEcW5yHMZ0wV2utfc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24358185/WAM9943a.jpg" />
      <Card.Body>
        <Card.Title>International Air Animal Shipping</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={4} ms={12} sm={12} xs={12}>
       <Card style={{ width: '25rem' }} className='m-1' >
      <Card.Img  src="https://cdn.vox-cdn.com/thumbor/c5qc_YiZVLnEcW5yHMZ0wV2utfc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24358185/WAM9943a.jpg" />
      <Card.Body>
        <Card.Title>International Air Animal Shipping</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    </Row>
    </Container> 

    <Footer />

     </>
        )
    }
}
export default ShippingServices;