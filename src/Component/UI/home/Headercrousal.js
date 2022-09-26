import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Headercrousal = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            src="//cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
            className="d-block w-100"
            alt="secondslide"
          ></img>
          <Carousel.Caption>
          <h5 className='text-white'>First slide label</h5>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h5 className='text-white'>Second slide label</h5>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h5 className='text-white'>Third slide label</h5>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Headercrousal;
