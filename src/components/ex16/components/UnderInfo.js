import { Link } from "react-router-dom";
import styled from "styled-components";

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  a {
    font-weight: 700;
    margin-left: 8px;
    color: #555;
  }
`;

export const UnderInfo = ({ userAccountCheck, linkText, accountText }) => {
  return (
    <BottomInfo>
      {userAccountCheck} <Link to={{ linkText }}>{accountText} &rarr;</Link>
    </BottomInfo>
  );
};
