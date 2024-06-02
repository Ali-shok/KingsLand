import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/pexels-dibert-1117210.jpg";

export default function Services() {
  const companyPhoneNumber = "+971566994800"; // Your actual company number

  const openWhatsAppChat = () => {
    const whatsappUrl = `https://wa.me/${companyPhoneNumber.replace(
      /\+/g,
      ""
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{padding: "60px 0"}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Our shipping company specializes in providing comprehensive
              logistics and transportation solutions tailored to meet the
              diverse needs of our clients. We offer a range of services
              including customs handling, sea freight, air freight, and land
              freight, ensuring efficient and reliable delivery of goods both
              regionally and internationally. Our dedicated team works
              tirelessly to ensure that your shipments are handled with the
              utmost care and professionalism, providing you with peace of mind
              and exceptional service every step of the way.
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faGavel"
                title="Customs services"
                subtitle="We handle all customs procedures to ensure your shipments are processed smoothly."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faShip"
                title="Sea shipping"
                subtitle={
                  <>
                    We provide sea freight services to transport large
                    quantities of goods from{" "}
                    <span className="gray-text">China</span> to the{" "}
                    <span className="gray-text">UAE</span>.
                  </>
                }
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faPlane"
                title="Air freight"
                subtitle={
                  <>
                    We provide air freight services to ensure fast and safe
                    transportation of goods from the{" "}
                    <span className="gray-text">UAE</span> to{" "}
                    <span className="gray-text">Syria</span>.
                  </>
                }
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faTruck"
                title="Land shipping"
                subtitle={
                  <>
                    We provide land freight services to transport goods flexibly
                    and economically to various{" "}
                    <span className="gray-text">Arab countries</span>.
                  </>
                }
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">
                  Your Trusted Shipping Partner
                </h2>
                <p className="font15">
                  We are a premier shipping company dedicated to providing
                  comprehensive logistics solutions. Our services include sea
                  freight, air freight, and land transportation, ensuring your
                  goods are delivered safely and on time. With a commitment to
                  excellence, we handle all customs procedures seamlessly,
                  making your shipping experience hassle-free.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{margin: "30px 0"}}
                >
                  <div style={{width: "190px"}}>
                    <FullButton
                      title="Contact Us"
                      action={() => openWhatsAppChat()}
                      border
                    />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-top: 80px;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: center;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0px;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: auto;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 1200px) {
    img {
      width: 120%;
      height: 400px;
    }
  }
`;
