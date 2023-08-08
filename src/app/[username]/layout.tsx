import { GithubUserReceived } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    username: string;
  };
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default async function User({
  params: { username },
  children,
  modal,
}: Props) {
  const data: GithubUserReceived = await (
    await fetch(`https://api.github.com/users/${username}`)
  ).json();

  return (
    <section className="flex items-center justify-center flex-row">
      <section className="p-4 bg-zinc-800 h-80+ rounded-lg flex items-center justify-center flex-col gap-3">
        <Image
          src={data.avatar_url}
          alt="avatar"
          height={148}
          width={148}
          className="border-2 border-violet-500 rounded-full"
        />
        <h1 className="text-2xl">{data.login}</h1>
        <div className="flex w-full items-start justify-center flex-col">
          <span className="text-lg text-zinc-400">
            seguindo: {data.following}
          </span>
          <span className="text-lg text-zinc-400">
            seguidores: {data.followers}
          </span>

          <Link
            href={data.html_url}
            target="_blank"
            className="w-full h-8 flex items-center justify-center bg-indigo-500 mt-5 rounded-md"
          >
            Ir para perfil
          </Link>
        </div>
      </section>
      {children}
      {modal}
    </section>
  );
}
