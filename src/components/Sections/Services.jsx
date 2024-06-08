import React, {useContext} from "react";
import styled from "styled-components";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
import AddImage1 from "../../assets/img/pexels-dibert-1117210.jpg";
import {LanguageContext} from "../../context/LanguageContext";

export default function Services() {
  const {language} = useContext(LanguageContext);

  const translations = {
    en: {
      headerTitle: "Our Awesome Services",
      headerDescription: `Our shipping company specializes in providing comprehensive logistics and transportation solutions 
        tailored to meet the diverse needs of our clients. We offer a range of services including customs handling, sea 
        freight, air freight, and land freight, ensuring efficient and reliable delivery of goods both regionally and 
        internationally. Our dedicated team works tirelessly to ensure that your shipments are handled with the utmost care 
        and professionalism, providing you with peace of mind and exceptional service every step of the way.`,
      service1Title: "Customs services",
      service1Subtitle:
        "We handle all customs procedures to ensure your shipments are processed smoothly.",
      service2Title: "Sea shipping",
      service2Subtitle: `We provide sea freight services to transport large quantities of goods from China to the UAE.`,
      service3Title: "Air freight",
      service3Subtitle: `We provide air freight services to ensure fast and safe transportation of goods from the UAE to Syria.`,
      service4Title: "Land shipping",
      service4Subtitle: `We provide land freight services to transport goods flexibly and economically to various Arab countries.`,
      companySectionTitle: "Your Trusted Shipping Partner",
      companySectionDescription: `We are a premier shipping company dedicated to providing comprehensive logistics solutions. Our 
        services include sea freight, air freight, and land transportation, ensuring your goods are delivered safely and on time. 
        With a commitment to excellence, we handle all customs procedures seamlessly, making your shipping experience hassle-free.`,
      contactUs: "Contact Us",
      aboutCompany: "A few words about company",
    },
    ar: {
      headerTitle: "خدماتنا الرائعة",
      headerDescription: `تتخصص شركتنا في تقديم حلول لوجستية ونقل شاملة مصممة لتلبية الاحتياجات المتنوعة لعملائنا. نقدم مجموعة من 
        الخدمات بما في ذلك التخليص الجمركي والشحن البحري والشحن الجوي والشحن البري، لضمان تسليم البضائع بكفاءة وموثوقية على المستويين 
        الإقليمي والدولي. يعمل فريقنا المتفاني بلا كلل لضمان معالجة شحناتكم بأقصى درجات العناية والاحترافية، مما يوفر لكم راحة البال 
        وخدمة استثنائية في كل خطوة.`,
      service1Title: "خدمات الجمارك",
      service1Subtitle: "نقوم بإجراءات الجمارك لضمان معالجة شحناتكم بسلاسة.",
      service2Title: "الشحن البحري",
      service2Subtitle: `نقدم خدمات الشحن البحري لنقل كميات كبيرة من البضائع من الصين إلى الإمارات.`,
      service3Title: "الشحن الجوي",
      service3Subtitle: `نقدم خدمات الشحن الجوي لضمان النقل السريع والآمن للبضائع من الإمارات إلى سوريا.`,
      service4Title: "الشحن البري",
      service4Subtitle: `نقدم خدمات الشحن البري لنقل البضائع بمرونة واقتصادية إلى مختلف الدول العربية.`,
      companySectionTitle: "شريككم الموثوق في الشحن",
      companySectionDescription: `نحن شركة شحن رائدة ملتزمة بتقديم حلول لوجستية شاملة. تشمل خدماتنا الشحن البحري والجوي والبري، لضمان 
        تسليم البضائع بأمان وفي الوقت المحدد. مع التزامنا بالتميز، نتولى جميع إجراءات الجمارك بسلاسة، مما يجعل تجربتكم في الشحن خالية من المتاعب.`,
      contactUs: "اتصل بنا",
      aboutCompany: "بضع كلمات عن الشركة",
    },
  };

  const {
    headerTitle,
    headerDescription,
    service1Title,
    service1Subtitle,
    service2Title,
    service2Subtitle,
    service3Title,
    service3Subtitle,
    service4Title,
    service4Subtitle,
    companySectionTitle,
    companySectionDescription,
    contactUs,
    aboutCompany,
  } = translations[language];

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
            <h1 className="font40 extraBold">{headerTitle}</h1>
            <p className="font13">{headerDescription}</p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faGavel"
                title={service1Title}
                subtitle={service1Subtitle}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faShip"
                title={service2Title}
                subtitle={service2Subtitle}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faPlane"
                title={service3Title}
                subtitle={service3Subtitle}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="faTruck"
                title={service4Title}
                subtitle={service4Subtitle}
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">{aboutCompany}</h4>
                <h2 className="font40 extraBold">{companySectionTitle}</h2>
                <p className="font15">{companySectionDescription}</p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{margin: "30px 0"}}
                >
                  <div style={{width: "190px"}}>
                    <FullButton
                      title={contactUs}
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
      width: 110%;
      height: 400px;
    }
  }
`;
