import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IProps } from "./dto";
import { Container } from "./styles";

export const RepoLink: React.FC<IProps> = (data: IProps) => {
  const pathname = data.props.branches_url ? "/branches" : "/commits";

  const search = data.full_name;

  return (
    <Container>
      {data.props.name && (
        <Link
          key={data.props.name}
          to={{
            pathname: `${pathname}`,
            search: `?${search}`,
          }}
        >
          <div>
            <strong>{data.props.name}</strong>
          </div>
          <FiChevronRight size={20} />
        </Link>
      )}
    </Container>
  );
};
