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
           <Container fluid>  
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
      <Card.Img  src="https://imagevars.gulfnews.com/2018/6/12/1_16a084d14c4.2235678_3348487856_16a084d14c4_large.jpg" />
      <Card.Body>
        <Card.Title>Live Stock</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={4} ms={12} sm={12} xs={12}>
       <Card style={{ width: '25rem' }} className='m-1' >
      <Card.Img  src="https://www.shutterstock.com/image-photo/dubai-uae-november-16-2010-260nw-2232457769.jpg" />
      <Card.Body>
        <Card.Title>Health & Safety</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    </Row>
    </Container> 
    <h1 style={{color:'GrayText', textAlign: 'center'}}>Give Your Sadiqat To Saylani</h1>
          <h4 style={{color:'GrayText', textAlign: 'center'}}>Saylani Meat Roti for every poor Man Who can't afford please connect Saylani for given Donation's</h4>
    <Footer />

     </>
        )
    }
}
export default ShippingServices;