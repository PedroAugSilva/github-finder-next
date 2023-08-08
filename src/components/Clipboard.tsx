"use client";
import { useState } from "react";
interface Props {
  value: string;
}

const Clipboard = ({ value }: Props) => {
  const [isCopied, setCopied] = useState<boolean>(false);

  const copyText = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
  };

  return (
    <div className=" rounded-md h-8 border overflow-hidden border-zinc-500 bg-zinc-700 w-72 flex flex-row items-center">
      <input
        type="text"
        value={value}
        readOnly
        className="flex-1 h-full bg-transparent outline-none px-2 text-sm"
      />
      <button
        data-copied={isCopied}
        className="h-full w-16 border-l border-zinc-500 bg-zinc-600 data-[copied=true]:bg-emerald-600"
        onClick={copyText}
      >
        copiar
      </button>
    </div>
  );
};

export default Clipboard;
