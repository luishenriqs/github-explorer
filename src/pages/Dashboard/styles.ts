import styled, { css } from "styled-components";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin: 40px 0;
  max-width: 900px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: -30px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.div`
  text {
    font-size: 24px;
    color: #3a3a3a;
    line-height: 56px;
  }
`;

export const Repositories = styled.div`
  margin-top: 10px;
  max-width: 900px;

  div {
    flex: 1;
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }
  }
`;
