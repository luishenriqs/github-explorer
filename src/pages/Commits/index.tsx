import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useLocation } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo, SubTitle } from "./styles";

const Commits: React.FC = () => {
  const [commits, setCommits] = useState([]);

  /*DEFINIR UM LOOPING AQUI*/
  /*DEFINIR UM LOOPING AQUI*/
  /*DEFINIR UM LOOPING AQUI*/
  /*DEFINIR UM LOOPING AQUI*/
  const autor = Array(commits[1]);

  console.log(".message====> ", typeof autor, autor[0]?.commit.message);

  const location = useLocation();
  const [, full_name] = location.search.split("?");
  const url = "/repos/" + full_name + "/commits";

  useEffect(() => {
    const loadCommmits = async (): Promise<void> => {
      const response = await api.get(url);
      const commits = response.data;
      setCommits(commits);
    };

    loadCommmits();
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

      <SubTitle>
        <text>Commits</text>
      </SubTitle>

      {autor.map((commts) => (
        <RepositoryInfo>
          <header>
            <div>
              <strong>{commts?.commit.message}</strong>
              <span>Message</span>
            </div>
          </header>
          <ul>
            <li>
              <strong>{commts?.commit.author.name}</strong>
              <span>Name</span>
            </li>
            <li>
              <strong>{commts?.commit.author.emai}</strong>
              <span>Email</span>
            </li>
            <li>
              <strong>{commts?.commit.author.date}</strong>
              <span>Date</span>
            </li>
            <li>
              <strong>{commts?.commit.tree.sha}</strong>
              <span>Hash</span>
            </li>
          </ul>
          <div>
            <a href={commts?.commit.url}>{commts?.commit.url}</a>
            <span>Link</span>
          </div>
        </RepositoryInfo>
      ))}
    </>
  );
};

export default Commits;
