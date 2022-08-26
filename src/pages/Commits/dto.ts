interface IRepositories {
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

interface ICommit {
  sha: string;
  url: string;
}

interface IBranches {
  commit: ICommit;
  name: string;
  protected: boolean;
}

export type { IRepositories, IBranches };
