import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/login"}>LOGIN</Link>
        </li>
        <li>
          <Link to={"/signup"}>SIGN UP</Link>
        </li>
      </Nav>
    </SHeader>
  );
};
