import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("teal");
  //   console.log(bgColor);

  const [num, setNum] = useState(0);

  const onClickBox = () => {
    // if (bgColor == "teal") {
    //   setBgColor("salmon");
    // } else if (bgColor == "salmon") {
    //   setBgColor("teal");
    // }

    if (num === 0) {
      setBgColor("salmon");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("teal");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Box $bg={bgColor} onClick={onClickBox}></Box>
    </div>
  );
};
