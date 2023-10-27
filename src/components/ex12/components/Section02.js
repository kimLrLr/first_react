import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 200px 180px;
`;

const TitleImg01 = styled.div`
  width: 500px;
  height: 500px;
  background-image: url("https://cdn.crowdpic.net/detail-thumb/thumb_d_398D2558C2751C55DAB3094C7C67AE66.jpg");
`;
const TitleImg02 = styled.div`
  width: 500px;
  height: 500px;
  background-color: aquamarine;
  background-image: url(https://cdn.crowdpic.net/detail-thumb/thumb_d_67889CC3785F8BF598E9C3F1FE04229E.jpg);
`;

export const Section02 = () => {
  return (
    <TitleWrap>
      <Link to={"/sub01"}>
        <TitleImg01 />
      </Link>
      <Link to={"/sub02"}>
        <TitleImg02 />
      </Link>
    </TitleWrap>
  );
};
