import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.4s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const SubTitle = styled.div`
  text {
    font-size: 24px;
    color: #3a3a3a;
    line-height: 56px;
  }
`;

export const RepositoryInfo = styled.header`
  margin-top: 30px;
  margin-bottom: 80px;
  margin-top: 10px;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s;
  &:hover {
    transform: translateX(10px);
  }
  header {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    div {
      display: flex;
      flex-direction: column;
      strong {
        font-size: 18px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-bottom: 50px;
    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 18px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    a {
      font-size: 16px;
      color: #3d3d4d;
    }
    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
    }
  }
`;
