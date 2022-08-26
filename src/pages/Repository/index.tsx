import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header, RepositoryInfo } from "./styles";
import logoImg from "../../assets/logo.svg";

interface Repositories {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const location = useLocation();

  const [repositories] = useState<Repositories[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  const repos = repositories[0] ? Object.values(repositories[0]) : [];
  let rep = [];

  for (let i = 0; i < repos.length; i++) {
    if (location.search === "?" + repos[i].full_name) {
      rep = repos[i];
    }
  }

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
        <RepositoryInfo>
          <header>
            <div>
              <strong>{rep.full_name}</strong>
              <p>{rep.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{rep.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{rep.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{rep.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
    </>
  );
};

export default Repository;
