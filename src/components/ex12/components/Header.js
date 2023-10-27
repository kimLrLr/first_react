import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

const Sheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  /* position: fixed; */
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 30px;
`;

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin-left: 150px;
    font-weight: 900;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>로고</Link>
      </Logo>

      <MenuWrap>
        <li>
          <Link to={"/sub01"}>메뉴1</Link>
        </li>
        <li>
          <Link to={"/sub02"}>메뉴2</Link>
        </li>
      </MenuWrap>
    </Sheader>
  );
};
