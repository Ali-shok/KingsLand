import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faShip,
  faPlane,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "faGavel":
      getIcon = <FontAwesomeIcon icon={faGavel} size="3x" />;
      break;
    case "faShip":
      getIcon = <FontAwesomeIcon icon={faShip} size="3x" />;
      break;
    case "faPlane":
      getIcon = <FontAwesomeIcon icon={faPlane} size="3x" />;
      break;
    case "faTruck":
      getIcon = <FontAwesomeIcon icon={faTruck} size="3x" />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
