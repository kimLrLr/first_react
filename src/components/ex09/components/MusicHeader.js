import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  text-align: center;
`;

const HeaderArrow = styled.div`
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HeaderMenuBtn = styled.div`
  width: 45px;
  height: 45px;
  background-color: #333;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MusicHeader = () => {
  return (
    <div>
      <HeaderWrap>
        <HeaderArrow>
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "#333" }} />
        </HeaderArrow>
        <HeaderMenuBtn>
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </HeaderMenuBtn>
      </HeaderWrap>
    </div>
  );
};
