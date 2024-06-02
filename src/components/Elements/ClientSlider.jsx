import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/noun-round-trip-936561.svg";
import ClientLogo02 from "../../assets/img/clients/noun-airplane-1065274.svg";
import ClientLogo03 from "../../assets/img/clients/noun-container-ship-1327952.svg";
import ClientLogo04 from "../../assets/img/clients/noun-crane-496204.svg";
import ClientLogo05 from "../../assets/img/clients/noun-freighter-496203.svg";
import ClientLogo06 from "../../assets/img/clients/noun-container-ship-5297419.svg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
  @media (max-width: 1024px) {
    height: 90px; /* Adjust width for medium screens */
  }

  @media (max-width: 768px) {
    height: 80px; /* Adjust width for smaller screens */
  }

  @media (max-width: 600px) {
    height: 80px; /* Adjust width for even smaller screens */
  }

  @media (max-width: 480px) {
    height: 80px; /* Adjust width for mobile screens */
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
  @media (max-width: 1024px) {
    height: 90%; /* Adjust width for medium screens */
  }

  @media (max-width: 768px) {
    height: 80%; /* Adjust width for smaller screens */
  }

  @media (max-width: 600px) {
    height: 80%; /* Adjust width for even smaller screens */
  }

  @media (max-width: 480px) {
    height: 80%; /* Adjust width for mobile screens */
  }
`;
