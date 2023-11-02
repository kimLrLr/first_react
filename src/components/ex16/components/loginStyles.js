import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  height: 600px;
  margin-top: 25%;
  padding: 70px 20px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 5px;
`;

export const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 42%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-weight: 600;
    color: #555;
  }
`;
