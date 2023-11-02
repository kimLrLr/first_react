import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  border-bottom: 1px solid #dbdbdb;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 28px;
`;

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin-left: 100px;
    font-weight: 900;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <MenuWrap>
        <li>
          <Link to={"/login"}>로그인</Link>
        </li>
        <li>
          <Link to={"/signup"}>회원가입</Link>
        </li>
      </MenuWrap>
    </Sheader>
  );
};
