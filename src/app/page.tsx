"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Form {
  username: string;
}

export default function Home() {
  const { handleSubmit, register } = useForm<Form>();
  const router = useRouter();

  const handleSearchUser: SubmitHandler<Form> = (data) => {
    router.push(`/${data.username}`);
  };

  return (
    <>
      <section className="p-2 bg-zinc-800 rounded-lg flex items-center justify-center flex-col gap-3">
        <h1 className="text-lg">Pesquise um usuário do GitHub</h1>
        <form
          className="flex flex-row items-center gap-2"
          onSubmit={handleSubmit(handleSearchUser)}
        >
          <input
            type="text"
            {...register("username")}
            className="flex-1 h-10 px-2 rounded-md bg-zinc-700 border-2 border-zinc-600 focus:border-indigo-600 outline-none"
            placeholder="Username..."
          />
          <button className="h-10 w-10 bg-indigo-600 rounded-md">Ir</button>
        </form>
      </section>
    </>
  );
}
