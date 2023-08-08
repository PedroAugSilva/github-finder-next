import Clipboard from "@/components/Clipboard";
import { GithubAllRepositoriesReceived } from "@/types";
import Link from "next/link";

interface Props {
  params: {
    username: string;
    name_repos: string;
  };
}

const ReposPage = async ({ params: { username, name_repos } }: Props) => {
  const data: GithubAllRepositoriesReceived = await (
    await fetch(`https://api.github.com/repos/${username}/${name_repos}`)
  ).json();

  return (
    <section className="bg-zinc-800 rounded-md h-max ml-2 px-2 py-4">
      <div className="flex flex-row items-center gap-10 px-2">
        <h1 className="text-2xl text-zinc-300 ml-2"> - {data.name} - </h1>
      </div>
      <div className="flex flex-row items-center center p-2 gap-3">
        <div className="h-60 w-72 bg-zinc-700 rounded-md p-2 flex flex-col text-ellipsis">
          <span className="border-b-2 border-dotted border-zinc-600 text-zinc-400 mb-2">
            Descrição
          </span>
          <p>{data.description}</p>
        </div>

        {/*  */}
        <div className="h-60 w-72 bg-zinc-700 rounded-md p-2 text-ellipsis flex flex-col gap-2">
          <span className="border-b-2 border-dotted border-zinc-600 text-zinc-400 mb-2">
            Informações
          </span>
          <span className=" px-3 border border-white rounded-full w-max">
            {data.visibility}
          </span>
          <span>Linguagem: {data.language}</span>
          <span>⭐: {data.stargazers_count}</span>
        </div>
        {/*  */}
      </div>
      <div className="flex flex-row items-end center px-2 gap-3 w-full">
        <Link
          href="#"
          className="h-8 w-72 bg-indigo-500 rounded-md grid place-items-center"
        >
          <span>Ir para repositório</span>
        </Link>
        <div className=" w-72 flex flex-col items-start">
          <span className="text-sm text-zinc-400">Clonar repostitório:</span>
          <Clipboard value={data.clone_url} />
        </div>
      </div>
    </section>
  );
};

export default ReposPage;
