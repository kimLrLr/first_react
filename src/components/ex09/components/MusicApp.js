import styled from "styled-components";
import { MusicHeader } from "./MusicHeader";
import { TitleImgEx } from "./TitleImgEx";
import { TitleTxt } from "./TitleTxt";
import { PlayBarEx } from "./PlayBarEx";

const MainWrap = styled.div`
  background-color: #333;
  border-radius: 20px;
  width: 25vw;
  height: 80vh;
  margin: 100px auto;
  padding: 40px;
`;

export const MusicApp = () => {
  return (
    <MainWrap>
      <MusicHeader />
      <TitleImgEx />
      <TitleTxt />
      <PlayBarEx />
    </MainWrap>
  );
};
