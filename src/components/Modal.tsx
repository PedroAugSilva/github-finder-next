"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const handleExitModal = () => {
    router.back();
  };

  return (
    // overlay
    <section className="absolute w-screen h-screen inset-0 grid place-items-center bg-black/40 backdrop-blur-sm">
      <div className="w-max h-max relative">
        <button
          className="px-2 py-0.5 bg-red-500 absolute rounded-md top-4 right-4"
          onClick={handleExitModal}
        >
          Voltar
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
