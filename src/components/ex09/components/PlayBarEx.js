import styled from "styled-components";

const PlayWrap = styled.div`
  padding: 30px 0;
`;

const PlayBar = styled.div`
  border: 3px solid #999;
  border-radius: 20px;
`;

const PlayTime = styled.div`
  border: 3px solid salmon;
  border-radius: 20px;
  width: 13%;
  position: relative;
  top: -5.5px;
  z-index: 10;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: relative;
  top: -30px;
  left: 0;
`;

const StartTime = styled.div``;

const EndTime = styled.div``;

export const PlayBarEx = () => {
  return (
    <div>
      <PlayWrap>
        <PlayBar></PlayBar>
        <PlayTime></PlayTime>
      </PlayWrap>
      <TimeWrap>
        <StartTime>00:03</StartTime>
        <EndTime>03:40</EndTime>
      </TimeWrap>
    </div>
  );
};
