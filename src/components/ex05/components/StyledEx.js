import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  border: 3px solid #333;
`;

const MyBox = styled.h2`
  width: 300px;
  height: 300px;
  background-color: violet;
  border: 10px solid black;
  text-align: center;
  line-height: 300px;
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bgColor={"teal"}></Box>
      <Box $bgColor={"salmon"}></Box>
      <MyBox>마이빡스</MyBox>
    </div>
  );
};
