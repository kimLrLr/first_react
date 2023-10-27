import styled from "styled-components";

const MainBgImg = styled.div`
  background-image: url("https://cdn.crowdpic.net/detail-thumb/thumb_d_58F5B7E428D2C304FC1E44E17A8E12C0.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 60vh;
`;

export const Section01 = () => {
  return (
    <>
      <MainBgImg />
    </>
  );
};
