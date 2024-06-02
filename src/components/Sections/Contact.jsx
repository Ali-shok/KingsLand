import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
// Assets
import ContactImg1 from "../../assets/img/home1.png";
import ContactImg2 from "../../assets/img/istockphoto-2025352320-612x612 2 (1).png";
import ContactImg3 from "../../assets/img/images (3) 2.png";

export default function Contact() {
  const branches = [
    {
      name: "Aleppo ",
      official: "Fadi Samaan",
      phone: "+963958889006",
      address: " Sulaymaniyah Telephone AL Hawaai", // No address provided for this branch
    },
    {
      name: "Latakia",
      official: "Majd Khalil",
      phone: "+963958889009",
      address: "Beside Customs Directorate, Al Hamd Mosque Street",
    },
    {
      name: "Dubai",
      official: "Mahmoud Ismail",
      phone: "+971566994800",
      location:
        "https://www.google.com/maps/place/25%C2%B015'28.9%22N+55%C2%B020'10.8%22E/@25.2580185,55.3385229,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.2580185!4d55.3363342?hl=ar&entry=ttu", // Assuming coordinates for example
      address:
        "Port Saeed , Bulding (Acico Gulf Real Estate) , Property (602-72), Dubai, United Arab Emirates",
    },
  ];

  const openWhatsAppChat = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;
    window.open(whatsappUrl, "_blank");
  };

  const openLocation = (locationUrl) => {
    window.open(locationUrl, "_blank");
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div
          style={{
            minHeight:
              "calc(100vh - 20px)" /* Subtract the height of the header */,
          }}
          className="container"
        >
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              We have branches all around the world ready to serve you. Get in
              touch with any of our branches.
            </p>
          </HeaderInfo>
          <div className="row" style={{paddingBottom: "30px"}}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <BranchWrapper>
                {branches.map((branch, index) => (
                  <BranchCard key={index}>
                    <BranchInfo>
                      <BranchName>{branch.name}</BranchName>
                      <BranchDetail>{branch.official}</BranchDetail>
                      <BranchDetail
                        onClick={() => openWhatsAppChat(branch.phone)}
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        {branch.phone}
                      </BranchDetail>
                      {branch.address && (
                        <BranchDetail>{branch.address}</BranchDetail>
                      )}
                      {branch.location && (
                        <BranchDetail
                          onClick={() => openLocation(branch.location)}
                        >
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          View Location
                        </BranchDetail>
                      )}
                    </BranchInfo>
                  </BranchCard>
                ))}
              </BranchWrapper>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex"
              style={{overflowY: "auto"}}
            >
              <div style={{width: "50%"}} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{width: "50%"}}>
                <div style={{marginTop: "100px"}}>
                  <div className="image-container" style={{overflow: "hidden"}}>
                    <img src={ContactImg3} alt="office" className="radius6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: calc(100vh - 20px); /* Subtract the height of the header */
  width: 100%;
  margin-top: 80px;
  flex-grow: 1; /* Allow the Wrapper to grow and fill available space */
  display: flex;
  flex-direction: column;
  /* Adjust height and padding to ensure it fills the space */
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const BranchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BranchCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
const BranchInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BranchName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const BranchDetail = styled.p`
  font-size: 16px;
  color: #707070;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
  svg {
    margin-right: 10px;
  }
`;
const ContactImgBox = styled.div`
  margin: 10px 0;
  img {
    width: 100%;
    border-radius: 6px;
  }
`;
