import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 24px;
  font-weight: 900;
`;

const MenuWrap = styled.ul`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  li {
    margin-left: 5%;
  }
  li:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>Logo</Logo>

      <MenuWrap>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </MenuWrap>
    </SHeader>
  );
};
