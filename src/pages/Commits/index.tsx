import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo } from "./styles";

const Commits: React.FC = () => {
  const rep = true;

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {rep && (
        <>
          <RepositoryInfo>
            <header>
              <div>
                <strong>{"Código corrigido"}</strong>
              </div>
            </header>
            <ul>
              <li>
                <strong>{"Matheus"}</strong>
                <span>Name</span>
              </li>
              <li>
                <strong>{"vicde2@hotmail.com"}</strong>
                <span>Email</span>
              </li>
              <li>
                <strong>{"2022-06-30T20:23:32Z"}</strong>
                <span>Date</span>
              </li>
              <li>
                <strong>{"130c185430703efb2f79b786d29c12692c5e5857"}</strong>
                <span>Hash</span>
              </li>
            </ul>
          </RepositoryInfo>
        </>
      )}
    </>
  );
};

export default Commits;
