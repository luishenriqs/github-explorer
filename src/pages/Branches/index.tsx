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

  console.log("location.search ", location.search);

  for (let i = 0; i < repos.length; i++) {
    console.log("repos[i].full_name ", repos[i].full_name);
    if (location.search === "?" + repos[i].full_name) {
      console.log("repo finded ", repos[i]);
      rep = repos[i];
    }
  }

  console.log("rep ", rep);

  const url = rep ? "/repos/" + rep.full_name + "/branches" : "";

  console.log("url ", url);

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

          {console.log("repos ", repos)}
          {console.log("allBranches ", allBranches)}

          <SubTitle>
            <text>Branches</text>
          </SubTitle>

          {allBranches ? (
            <Repositories>
              {allBranches.map((branch) => (
                <RepoLink repo={branch} />
              ))}
            </Repositories>
          ) : (
            <Repositories>
              <text>Ocorreu algum erro, tente novamente mais tarde</text>
            </Repositories>
          )}
        </>
      )}
    </>
  );
};

export default Branches;
