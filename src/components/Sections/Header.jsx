import React from "react";
import styled from "styled-components";
// Assets
import HeaderImage from "../../assets/img/pexels-tomfisk-3063470.jpg";
import ClientSlider from "../Elements/ClientSlider";

export default function Header() {
  return (
    <div>
      <Wrapper>
        <Img src={HeaderImage} alt="office" />
      </Wrapper>
      <CompanyInfoSection>
        <div className="container">
          <InfoContent>
            <h3 className="font15 semiBold">
              We are<HighlightedText> Kings Land</HighlightedText>
            </h3>
            <h2 className="font40 extraBold">Leading Shipping Solutions</h2>
            <p className="font12">
              Our company provides comprehensive shipping services including
              customs handling, sea freight from{" "}
              <HighlightedText>China</HighlightedText> to the{" "}
              <HighlightedText> UAE</HighlightedText>, air freight from the{" "}
              <HighlightedText> UAE </HighlightedText>
              to <HighlightedText>Syria</HighlightedText>, and land freight to
              various<HighlightedText> Arab countries </HighlightedText>. We
              ensure your shipments are processed smoothly and efficiently.
            </p>
          </InfoContent>
        </div>
      </CompanyInfoSection>
      <div className="lightBg">
        <div className="container">
          <ClientSlider />
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-left: 0;
  padding-right: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  z-index: 9;

  @media (max-width: 1200px) {
    height: 80vh;
  }
  @media (max-width: 768px) {
    height: 80vh;
  }
  @media (max-width: 480px) {
    height: 80vh;
  }
`;
const CompanyInfoSection = styled.section`
  background: #f9f9f9;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InfoContent = styled.div`
  text-align: center;
  max-width: 800px;

  h4 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;
    line-height: 1.6;
  }
`;
const HighlightedText = styled.span`
  color: #7620ff; /* Change this color to your desired highlight color */
`;
