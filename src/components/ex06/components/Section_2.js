import styled from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  height: 400px;
  /* background-color: lightgray; */
  background: url(${(props) => props.$bgImg}) no-repeat center / cover;
  transition: 0.5s;
  &:hover {
    /* width: 50%; */
    opacity: 0.5;
  }
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con
          $bgImg={
            "https://cdn.crowdpic.net/detail-thumb/thumb_d_67889CC3785F8BF598E9C3F1FE04229E.jpg"
          }
        ></Con>
        <Con
          $bgImg={
            "https://cdn.crowdpic.net/detail-thumb/thumb_d_398D2558C2751C55DAB3094C7C67AE66.jpg"
          }
        ></Con>
        <Con
          $bgImg={
            "https://cdn.crowdpic.net/detail-thumb/thumb_d_58F5B7E428D2C304FC1E44E17A8E12C0.jpg"
          }
        ></Con>
      </ConWrap>
    </Section>
  );
};
