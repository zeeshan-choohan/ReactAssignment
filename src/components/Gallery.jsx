import React from 'react'
import NavBar from './NavBr';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import SideBar from './SideBar';

class Gallery extends React.Component{
    render(){

        return(
            <>
            <NavBar/>
             <Container> 
             <Row> 

            <Col lg={3} ms={6} sm={6} xs={12}> 
            <Card style={{ width: '18rem'}} className='m-1'>
      <Card.Img  src="https://dc36f83db647f610a033.b-cdn.net/wp-content/uploads/2018/03/Border-Leicester.jpg" />
      <Card.Body>
        <Card.Title>Domestic Animal Shipping</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> 
    </Col>

    <Col lg={3} ms={6} sm={6} xs={12}>
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/c5qc_YiZVLnEcW5yHMZ0wV2utfc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24358185/WAM9943a.jpg" />
      <Card.Body>
        <Card.Title>International Animal Shipping</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}>
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://www.goodmeat.com.au/globalassets/good-meat-v2/images/mobile-hero/animal-wellbeing-transport-600x400.png" />
      <Card.Body>
        <Card.Title>Air Animal Transportation</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}>
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://www.dailyliberal.com.au/images/transform/v1/crop/frm/yqbYpxNMru7TBX8VR5QF63/c4315b39-ed7a-4574-9ac3-6deb03930e42.jpg/r82_114_640_448_w1200_h678_fmax.jpg" />
      <Card.Body>
        <Card.Title>Ground Animal Transportation </Card.Title>
        <Card.Text>
    
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}> 
    <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://imagevars.gulfnews.com/2018/6/12/1_16a084d14c4.2235678_3348487856_16a084d14c4_large.jpg" />
      <Card.Body>
        <Card.Title>Animal  Relocation </Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}>
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/PUQCTTCZNBWGBND4I5A4XVU464.jpg" />
      <Card.Body>
        <Card.Title>Livestock Shipping </Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}>
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/dc/b0/e8/dcb0e8f03caec2e3290f531aba023092--house-sheep.jpg" />
      <Card.Body>
        <Card.Title>Animal Boarding </Card.Title>
        <Card.Text>
       
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}>
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/dubai-uae-november-16-2010-260nw-2232457769.jpg" />
      <Card.Body>
        <Card.Title>Animal Health and Safety </Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}>
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://www.amigologistics.com/image/goat-exports-1.jpg" />
      <Card.Body>
        <Card.Title>Animal Health and Safety </Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}> 
    <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/goats-road-to-another-pasture-stray-intended-milk-cheese-production-island-la-palma-74102030.jpg" />
      <Card.Body>
        <Card.Title>Animal Health and Safety </Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12}> 
    <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/free-range-goats-village-crete-greece-group-herd-pasture-243122192.jpg" />
      <Card.Body>
        <Card.Title>Animal Health and Safety </Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

    <Col lg={3} ms={6} sm={6} xs={12} >
       <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img variant="top" src="https://c8.alamy.com/comp/B1PW00/transport-of-goats-to-the-goat-market-nizwa-sultanate-of-oman-B1PW00.jpg" />
      <Card.Body>
        <Card.Title>Animal Health and Safety </Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Donate Now...</Button>
      </Card.Body>
    </Card> </Col>

             </Row>
             </Container>

             <Footer/>
            </>
        )
    }
}
export default Gallery;