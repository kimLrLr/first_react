import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  overflow: hidden;
`;
const Menu = styled.div`
  width: 400px;
  height: 100vh;
  background-color: aquamarine;
  position: absolute;
  transition: 0.5s;
  top: 0;
  right: ${(props) => props.$rightNum};
`;

const Menu_btn = styled.div`
  font-size: 40px;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  top: 0;
  right: 2%;
`;

export const MyEx = () => {
  const [num, setNum] = useState(0);
  const [rightNum, setRightNum] = useState("-100%");

  const onClickBtn = () => {
    if (num === 0) {
      setRightNum("0%");
      setNum(num + 1);
    } else if (num === 1) {
      setRightNum("-100%");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Wrap>
        <Menu_btn onClick={onClickBtn}>=</Menu_btn>
        <Menu $rightNum={rightNum}></Menu>
      </Wrap>
    </div>
  );
};
