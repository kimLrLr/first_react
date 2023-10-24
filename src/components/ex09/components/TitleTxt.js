import styled from "styled-components";

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h3`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const SubTitle = styled.div`
  color: #fff;
  font-size: 15px;
`;

export const TitleTxt = () => {
  return (
    <>
      <TitleWrap>
        <MainTitle>Blue bird</MainTitle>
        <SubTitle>Pick Dreams</SubTitle>
      </TitleWrap>
    </>
  );
};
