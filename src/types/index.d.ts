export interface GithubUserReceived {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  bio: string;
  name: string;
  followers: string;
  following: string;
}
export interface GithubAllRepositoriesReceived {
  name: string;
  language: string;
  description: string;
  clone_url: string;
  html_url: string;
  git_url: string;
  stargazers_count: string;
  visibility: string;
}
