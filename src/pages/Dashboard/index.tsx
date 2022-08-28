import React, { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import { RepoLink } from "../../components/RepoLink";
import { Button } from "../../components/Button";
import { Title, Form, Error, SubTitle, Repositories } from "./styles";

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  const repos = repositories[0] ? Object.values(repositories[0]) : [];

  const [inputError, setInputError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError("Digite o nome do autor do repositório");
      localStorage.setItem("@GithubExplorer:repositories", "");
      setRepositories([]);
      return;
    }
    const page = 1;
    try {
      const response = await api.get<IRepository>(
        `/users/${newRepo}/repos?type=owner/page=${page}&per_page=5`
      );
      const repository = response.data;
      setRepositories([repository]);
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca por esse repositório");
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <Button type="submit">Pesquisar</Button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <SubTitle>
        <text>Repositórios</text>
      </SubTitle>

      <Repositories>
        {repos.map((rep) => (
          <RepoLink props={rep} full_name={rep.full_name} />
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
