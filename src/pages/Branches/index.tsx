import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link, useLocation } from "react-router-dom";
import { RepoLink } from "../../components/RepoLink";
import { FiChevronLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import { IRepositories, IBranches } from "./dto";
import { Header, RepositoryInfo, SubTitle, Repositories } from "./styles";

const Branches: React.FC = () => {
  const location = useLocation();

  const [repositories] = useState<IRepositories[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  const [branches, setBranches] = useState<IBranches[]>([]);

  const repos = repositories[0] ? Object.values(repositories[0]) : [];
  const allBranches = branches[0] ? Object.values(branches[0]) : [];

  let rep = [];

  for (let i = 0; i < repos.length; i++) {
    if (location.search === "?" + repos[i].full_name) {
      rep = repos[i];
    }
  }

  const full_name = rep.full_name;
  const url = rep ? "/repos/" + full_name + "/branches" : "";

  useEffect(() => {
    const loadBranchs = async (): Promise<void> => {
      const response = await api.get(url);
      const ramos = response.data;
      setBranches([ramos]);
    };
    loadBranchs();
  }, [url]);

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

          <SubTitle>
            <text>Branches</text>
          </SubTitle>

          {allBranches && (
            <Repositories>
              {allBranches.map((branches) => (
                <RepoLink props={branches} full_name={full_name} />
              ))}
            </Repositories>
          )}
        </>
      )}
    </>
  );
};

export default Branches;
