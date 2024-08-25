import { FaRegStar } from "react-icons/fa6";

export default function Card() {
  return (
    <div className="text-xl border-[1px] border-[#E0E0E0] rounded-lg bg-white w-[353px] h-[326px] flex justify-center items-center flex-col p-4">
      <h1 className="font-semibold text-2xl text-slate-800 mb-4">
        Quel note donnerais-tu à ce challenge ?
      </h1>
      <p className="font-normal text-lg text-slate-700">
        Bon j'espère que tu vas mettre 5 évidemment, si ce n'est pas le cas
        viens me dire pourquoi !
      </p>

      <div style={{ color: "#7b61ff" }} className="mt-6">
        <button>
          <FaRegStar size={48} />
        </button>
        <button>
          <FaRegStar size={48} />
        </button>
        <button>
          <FaRegStar size={48} />
        </button>
        <button>
          <FaRegStar size={48} />
        </button>
        <button>
          <FaRegStar size={48} />
        </button>
      </div>
    </div>
  );
}
