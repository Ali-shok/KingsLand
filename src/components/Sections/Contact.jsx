import React, {useContext} from "react";
import styled, {keyframes} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import ContactImg1 from "../../assets/img/pexels-saturnus99-11213541.jpg";
import ContactImg2 from "../../assets/img/pexels-quintingellar-2199293.jpg";
import ContactImg3 from "../../assets/img/pexels-chanaka-318741-906494 (1).jpg";
import {LanguageContext} from "../../context/LanguageContext";
import {Helmet} from "react-helmet";

export default function Contact() {
  const {language} = useContext(LanguageContext);

  const translations = {
    en: {
      title: "Let's get in touch",
      description:
        "We have branches ready to serve you. Get in touch with any of our branches.",
      branches: [
        {
          name: "Aleppo",
          official: "Fadi Samaan",
          phone: "+963958889006",
          address: "Sulaymaniyah Telephone AL Hawaai",
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
            "https://www.google.com/maps/place/25%C2%B015'28.9%22N+55%C2%B020'10.8%22E/@25.2580185,55.3385229,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.2580185!4d55.3363342?hl=ar&entry=ttu",
          address:
            "Port Saeed, Building (Acico Gulf Real Estate), Property (602-72), Dubai, United Arab Emirates",
          end: "View Location",
        },
      ],
    },
    ar: {
      title: "دعونا نتواصل",
      description: ".لدينا فروع جاهزة لخدمتك تواصل مع أي من فروعنا",
      branches: [
        {
          name: "حلب",
          official: "فادي سمعان",
          phone: "+963958889006",
          address: "سليمانية هاتف الهوائي",
        },
        {
          name: "اللاذقية",
          official: "مجد خليل",
          phone: "+963958889009",
          address: "بجانب مديرية الجمارك، شارع مسجد الحمد",
        },
        {
          name: "دبي",
          official: "محمود إسماعيل",
          phone: "+971566994800",
          location:
            "https://www.google.com/maps/place/25%C2%B015'28.9%22N+55%C2%B020'10.8%22E/@25.2580185,55.3385229,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.2580185!4d55.3363342?hl=ar&entry=ttu",
          address:
            "ميناء سعيد، مبنى (عقارات الخليج أكيكو)، عقار (602-72)، دبي، الإمارات العربية المتحدة",
          end: "عرض الموقع",
        },
      ],
    },
  };

  const {title, description, branches} = translations[language];

  const openWhatsAppChat = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;
    window.open(whatsappUrl, "_blank");
  };

  const openLocation = (locationUrl) => {
    window.open(locationUrl, "_blank");
  };

  return (
    <Wrapper
      className={`${language === "ar" ? "arabic-text-amiri" : "sans-serif"}`}
      id="contact"
    >
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="lightBg">
        <div
          style={{
            minHeight:
              "calc(100vh - 20px)" /* Subtract the height of the header */,
          }}
          className="container"
        >
          <HeaderInfo>
            <h1 className="font40 extraBold">{title}</h1>
            <p className="font13">{description}</p>
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
                          {branch.end}
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
                <div
                  className="image-container"
                  style={{overflow: "hidden", objectFit: "cover"}}
                >
                  <ContactImgBox>
                    <BlurImg
                      src={ContactImg1}
                      alt="plane"
                      className="radius6"
                    />
                  </ContactImgBox>
                </div>
                <div
                  className="image-container"
                  style={{overflow: "hidden", objectFit: "cover"}}
                >
                  <ContactImgBox>
                    <BlurImg
                      src={ContactImg2}
                      alt="office"
                      className="radius6"
                    />
                  </ContactImgBox>
                </div>
              </div>
              <div style={{width: "50%"}}>
                <div style={{marginTop: "100px"}}>
                  <div
                    className="image-container"
                    style={{overflow: "hidden", objectFit: "cover"}}
                  >
                    <BlurImg
                      src={ContactImg3}
                      alt="Containers"
                      className="radius6"
                    />
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
    width: 90%;
    border-radius: 6px;
  }
`;
const blurIn = keyframes`
  0% {
    filter: blur(20px);
    opacity: 0;
  }
  50% {
    filter: blur(10px);
    opacity: 0.5;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
`;

const BlurImg = styled.img`
  width: 100%;
  object-fit: cover;
  z-index: 9;
  animation: ${blurIn} 2s ease-out forwards;
`;
