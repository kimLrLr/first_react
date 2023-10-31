import styled from "styled-components";

const ErrorMessage = styled.span`
  color: crimson;
  font-weight: 600;
  margin-top: 10px;
`;

export const ErrorMsg = ({ Message }) => {
  return <ErrorMessage>{Message}</ErrorMessage>;
};
