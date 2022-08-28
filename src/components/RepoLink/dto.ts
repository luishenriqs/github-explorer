interface ICommit {
  sha: string;
  url: string;
}

interface IReposOrBranches {
  full_name?: string;
  description?: string;
  branches_url?: string;
  owner?: {
    login: string;
    avatar_url: string;
  };
  commit?: ICommit;
  name?: string;
  protected?: boolean;
}

interface IProps {
  props: IReposOrBranches;
  full_name: string;
}

export type { IProps };
