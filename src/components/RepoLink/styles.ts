import styled from "styled-components";

export const Container = styled.div`
  a {
    margin-top: 10px;
    background: #c28f8b;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.4s;
    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    strong {
      color: #3a3a3a;
    }
  }
`;
