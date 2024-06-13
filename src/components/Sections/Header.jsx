import React, {useContext} from "react";
import styled, {keyframes} from "styled-components";
import HeaderImage from "../../assets/img/pexels-tomfisk-3063470.jpg";
import ClientSlider from "../Elements/ClientSlider";
import {LanguageContext} from "../../context/LanguageContext";

export default function Header() {
  const {language} = useContext(LanguageContext);
  const highlightCountries = (text, language) => {
    const countryNames =
      language === "en"
        ? [
            "China",
            "UAE",
            "Syria",
            "Arab countries",
            "land",
            "sea",
            "air",
            "customs",
          ]
        : [
            "الإمارات",
            "الصين",
            "الإمارات العربية المتحدة",
            "سوريا",
            "الدول العربية",
            "البري",
            "البحري",
            "الجوي",
            "الجمركي",
          ];

    return text
      .split(new RegExp(`(${countryNames.join("|")})`, "g"))
      .map((part, index) =>
        countryNames.includes(part) ? (
          <HighlightedText key={index}>{part}</HighlightedText>
        ) : (
          part
        )
      );
  };

  const translations = {
    en: {
      intro: "We are",
      company: "Kings Land",
      title: "Leading Shipping Solutions",
      description: `Our company provides land, sea and air freight and customs clearance services.`,
    },
    ar: {
      intro: "نحن",
      company: "كينجس لاند",
      title: "حلول الشحن الرائدة",
      description: `تقدم شركتنا خدمات الشحن  البري والبحري والجوي  والتخليص الجمركي`,
    },
  };

  const {intro, company, title, description} = translations[language];

  return (
    <div
      className={`${language === "ar" ? "arabic-text-amiri" : "sans-serif"}`}
    >
      <Wrapper>
        <BlurImg src={HeaderImage} alt="office" />
      </Wrapper>
      <CompanyInfoSection>
        <div className="container">
          <InfoContent>
            <h3 className="font15 semiBold arabic-text-khula">
              {intro} <HighlightedText>{company}</HighlightedText>
            </h3>
            <h2 className="font40 extraBold">{title}</h2>
            <p className="font12">
              {highlightCountries(description, language)}
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
  height: 75vh;
  object-fit: cover;
  z-index: 9;
  animation: ${blurIn} 2s ease-out forwards;

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
