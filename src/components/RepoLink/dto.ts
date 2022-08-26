interface ICommit {
  sha: string;
  url: string;
}

interface IProps {
  full_name?: string;
  description?: string;
  owner?: {
    login: string;
    avatar_url: string;
  };
  commit?: ICommit;
  name?: string;
  protected?: boolean;
}

interface IData {
  repo: IProps;
}

export type { IData };
