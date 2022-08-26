import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IData } from "./dto";
import { Container } from "./styles";

export const RepoLink: React.FC<IData> = (data: IData) => {
  return (
    <Container>
      <>
        {data.repo.name ? (
          <Link
            key={data.repo.name}
            to={{
              pathname: "/commits",
              search: `?${data.repo.full_name}`,
            }}
          >
            <div>
              <strong>{data.repo.name}</strong>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ) : (
          <div></div>
        )}
      </>
    </Container>
  );
};
