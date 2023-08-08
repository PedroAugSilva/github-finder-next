import { GithubAllRepositoriesReceived } from "@/types";
import Link from "next/link";

interface Props {
  params: {
    username: string;
  };
}

const Repositories = async ({ params }: Props) => {
  const data: GithubAllRepositoriesReceived[] = await (
    await fetch(`https://api.github.com/users/${params.username}/repos`)
  ).json();

  return (
    <section className="bg-zinc-800 h-80+ rounded-md ml-2 p-2 overflow-auto">
      <div className=" w-max h-max grid grid-flow-row grid-cols-6 gap-2 ">
        {data.map((item, index) => (
          <Link
            key={index}
            href={`/repos/${item.name}`}
            className="bg-zinc-700 border-2 border-transparent hover:border-indigo-600 rounded-md w-28 h-10 truncate px-1.5 break-keep"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Repositories;
