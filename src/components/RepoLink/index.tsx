import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./styles";

interface RepoProps {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Repository {
  repo: RepoProps;
}

export const RepoLink: React.FC<Repository> = (data) => {
  return (
    <Container>
      <Link
        key={data.repo.full_name}
        to={{
          pathname: "/repository",
          search: `?${data.repo.full_name}`,
        }}
      >
        <div>
          <strong>{data.repo.full_name}</strong>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </Container>
  );
};
