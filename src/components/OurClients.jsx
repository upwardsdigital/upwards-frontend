import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const settings = {
    className: "slide",
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    // scrollY: WheelEvent,
    speed: 500,
    cssEase: "linear",
    arrows: false,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 1440,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
    ],
  };

  return (
    <div className="our-clients container">
      <div className="title">
        <h1>НАШИ КЛИЕНТЫ</h1>
        <img src="/images/titles/ourClients.png" />
      </div>
      <Slider className="slider" {...settings}>
        <div>
          <img className="slide-img" src="/images/ourClients/img-3.svg" />
        </div>
        <div>
          <img className="slide-img" src="/images/ourClients/img-2.svg" />
        </div>
        <div>
          <img className="slide-img" src="/images/ourClients/img-4.svg" />
        </div>
        <div>
          <img className="slide-img" src="/images/ourClients/img-3.svg" />
        </div>
        <div>
          <img className="slide-img" src="/images/ourClients/img-4.svg" />
        </div>
        {/* <div>
          <img className="slide-img" src="/images/ourClients/img-5.svg" />
        </div> */}
        <div>
          <img className="slide-img" src="/images/ourClients/img-2.svg" />
        </div>
      </Slider>
    </div>
  );
};

export default OurClients;
