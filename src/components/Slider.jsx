import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/3f478c_8267b22e36e3423fba39bae74e9c3816~mv2.jpg/v1/fill/w_640,h_688,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/3f478c_8267b22e36e3423fba39bae74e9c3816~mv2.jpg"
          alt="First slide"
          style={{width:"600px",height:"570px"}}
        />
        <Carousel.Caption>
          <h2>Give Your Sadiqat To Saylani</h2>
          <p>Saylani Meat Roti for every poor Man Who can't afford please connect Saylani for given Donation's</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.timeout.com/images/105922576/image.jpg"
          alt="Second slide"
          style={{width:"600px",height:"570px"}}
        />

        <Carousel.Caption>
        <h2>Give Your Sadiqat To Saylani</h2>
          <p>Saylani Meat Roti for every poor Man Who can't afford please connect Saylani for given Donation's</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/54c025bbe4b0f227e39357e9/01aa8856-ba11-462c-ac84-4787079d7203/IMG_9748.JPG?format=1000w"
          alt="Third slide"
          style={{width:"600px",height:"570px"}}
        />

        <Carousel.Caption>
        <h2>Give Your Sadiqat To Saylani</h2>
          <p>Saylani Meat Roti for every poor Man Who can't afford please connect Saylani for given Donation's</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;