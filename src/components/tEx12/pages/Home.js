import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";

const Banner = styled.section`
  height: 80vh;
  background-color: lightgray;
`;

const Section = styled.section`
  max-width: 1400px;
  width: 100%;
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 45%;
  height: 600px;
  background-color: lightgray;
  background: url(${(props) => props.$imgUrl}) no-repeat center / cover;
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Section>
        <Con $imgUrl={data[0].img}>
          <Link to={"/sub/0"} />
        </Con>
        <Con $imgUrl={data[1].img}>
          <Link to={"/sub/1"} />
        </Con>
      </Section>
    </div>
  );
};
