import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 200px;
`;
const TitleImg = styled.div`
  width: 500px;
  height: 600px;
  background-image: url("https://cdn.crowdpic.net/detail-thumb/thumb_d_398D2558C2751C55DAB3094C7C67AE66.jpg");
  margin-right: 100px;
`;
const TitleTxt = styled.div`
  h2 {
    font-size: 45px;
  }
`;

export const Sub01 = () => {
  return (
    <Title>
      <TitleImg />

      <TitleTxt>
        <h2>서브페이지1</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
          beatae laborum commodi aut sint enim reiciendis? Fugit optio repellat
          illo odio veniam eaque est. Sunt odio velit dolor suscipit excepturi!
        </h3>
      </TitleTxt>
    </Title>
  );
};
