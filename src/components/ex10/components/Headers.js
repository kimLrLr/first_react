import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { useState } from "react";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;

const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 10;
`;

const Menu = styled.ul`
  position: absolute;
  top: 0;
  left: ${(props) => props.$isActive};
  width: 100%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60% 0;
  font-size: 30px;
  font-weight: 600;
  color: ${colors.darkGray};
  transition: 0.5s;
`;

export const Headers = () => {
  const [leftResult, setLeftResult] = useState("100%");

  const onClickMenu = () => {
    leftResult === "100%" ? setLeftResult(0) : setLeftResult("100%");
  };

  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown} />
      </MoreBtn>

      <MenuBtn onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>

      <Menu $isActive={leftResult}>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
      </Menu>
    </SHeader>
  );
};
