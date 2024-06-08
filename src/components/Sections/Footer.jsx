import React, {useContext} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import LogoImg from "../../assets/svg/Logo";
import {Helmet} from "react-helmet";
import {LanguageContext} from "../../context/LanguageContext";

export default function Footer() {
  const {language} = useContext(LanguageContext);

  const translations = {
    en: {
      title: "Kings Land",
      llc: "LLC",
      copyright: "All Right Reserved",
      contact: "Contact With Us",
    },
    ar: {
      title: "كينجس لاند",
      llc: "ش.ذ.م.م",
      copyright: "جميع الحقوق محفوظة",
      contact: "تواصل معنا",
    },
  };

  const {title, llc, copyright, contact} = translations[language];

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper
      className={`${language === "ar" ? "arabic-text-amiri" : "sans-serif"}`}
    >
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={`${title} - ${copyright}`} />
      </Helmet>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter">
            <Link className="flexCenter animate pointer" to="/">
              <LogoImg />
              <Title className="font20 extraBold">{title}</Title>
              <LLC className="font11">{llc}</LLC>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">{title}</span> {copyright}
            </StyleP>
            <Link className="whiteColor animate pointer font13" to="/contact">
              <FontAwesomeIcon icon={faPhone} style={{marginRight: "5px"}} />
              {contact}
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  padding: 10px 0;
  @media (max-width: 620px) {
    flex-direction: column;
    padding: 10px 0;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px 0;
  }
`;

const StyleP = styled.p`
  @media (max-width: 620px) {
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    margin: 5px 0;
  }
`;
const LLC = styled.span`
  margin-left: 5px;
  align-self: flex-end;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 12px;
    align-self: flex-end;
    margin-left: 0px;
  }
  @media (max-width: 480px) {
    font-size: 6px;
    align-self: flex-end;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    margin-left: 5px;
    margin-right: 0px;
  }
`;
