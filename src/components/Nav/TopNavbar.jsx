import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AbovoLogo from "../../assets/svg/AboveLogo";
import {
  faHome,
  faCogs,
  faEnvelope,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
// Components
// Assets
import {LanguageContext} from "../../context/LanguageContext";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const {language, toggleLanguage} = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translations = {
    en: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      title: "Kings Land",
      llc: "TRADING L.L.C",
    },
    ar: {
      home: "الصفحة الرئيسية",
      services: "الخدمات",
      contact: "اتصل بنا",
      title: "كينجس لاند ",
      llc: "ش.ذ.م.م",
    },
  };

  const {home, services, contact} = translations[language];

  return (
    <>
      <Wrapper
        className={`flexCenter animate darkBg ${
          language === "ar" ? "arabic-text-amiri" : "sans-serif"
        }`}
        style={y > 100 ? {height: "60px"} : {height: "80px"}}
      >
        <NavInner className="container whiteColor flexSpaceCenter ">
          <Link className="flexNullCenter pointer" to="/">
            <AbovoLogo />
          </Link>

          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <NavLinkStyled to="/" end>
                <FontAwesomeIcon icon={faHome} />
                <NavText>{home}</NavText>
              </NavLinkStyled>
            </li>
            <li className="semiBold font15 pointer">
              <NavLinkStyled to="/services">
                <FontAwesomeIcon icon={faCogs} />
                <NavText>{services}</NavText>
              </NavLinkStyled>
            </li>

            <li className="semiBold font15 pointer">
              <NavLinkStyled to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
                <NavText>{contact}</NavText>
              </NavLinkStyled>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <LanguageToggle onClick={toggleLanguage}>
                <FontAwesomeIcon icon={faLanguage} />
                <NavText>{language === "en" ? "AR" : "EN"}</NavText>
              </LanguageToggle>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: height 0.3s ease;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    li {
      margin: 0 5px;
    }
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    li {
      margin: 0 5px;
    }
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;

  &.active {
    color: #707070; /* Change active link color */
  }

  &:hover {
    color: #707070; /* Change hover link color */
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

const NavText = styled.span`
  margin-left: 8px; /* Adjust margin between icon and text */
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Hide text on smaller screens */
  }
`;

const LanguageToggle = styled.div`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #707070; /* Change hover color */
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;
