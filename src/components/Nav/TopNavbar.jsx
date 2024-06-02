import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCogs, faEnvelope} from "@fortawesome/free-solid-svg-icons";
// Components
// Assets
import LogoIcon from "../../assets/svg/Logo";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrapper
        className="flexCenter animate darkBg"
        style={y > 100 ? {height: "60px"} : {height: "80px"}}
      >
        <NavInner className="container whiteColor flexSpaceCenter ">
          <Link className="flexNullCenter pointer" to="/">
            <LogoIcon />
            <Title className="font20 extraBold"> Kings Land</Title>
            <LLC className="font11 ">TRADING L.L.C</LLC>
          </Link>

          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <NavLinkStyled to="/" end>
                <FontAwesomeIcon icon={faHome} />
                <NavText>Home</NavText>
              </NavLinkStyled>
            </li>
            <li className="semiBold font15 pointer">
              <NavLinkStyled to="/services">
                <FontAwesomeIcon icon={faCogs} />
                <NavText>Services</NavText>
              </NavLinkStyled>
            </li>

            <li className="semiBold font15 pointer">
              <NavLinkStyled to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
                <NavText>Contact</NavText>
              </NavLinkStyled>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter"></UlWrapperRight>
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
  display: none;
  @media (min-width: 769px) {
    display: flex;
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
  @media (max-width: 300px) {
    display: none;
  }
`;
const LLC = styled.span`
  margin-left: 5px;
  align-self: flex-end;
  padding-bottom: 10px;

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
