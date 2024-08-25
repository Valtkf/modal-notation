import ResetIcon from "../ui/logo/ResetIcon";
import ButtonNotation from "./ButtonNotation";

export default function Card() {
  return (
    <div className="text-xl border-[1px] border-[#E0E0E0] rounded-lg bg-white w-[353px] h-[326px] p-6 transition-shadow duration-400 hover:shadow-lg hover:shadow-gray-400">
      <div className="flex justify-end items-end mr-2 mb-6">
        <button>
          <ResetIcon />
        </button>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-semibold text-2xl text-slate-800 mb-4">
          Quel note donnerais-tu à ce challenge ?
        </h1>
        <p className="font-normal text-lg text-slate-700">
          Bon j'espère que tu vas mettre 5 évidemment, si ce n'est pas le cas
          viens me dire pourquoi !
        </p>
        <ButtonNotation />
      </div>
    </div>
  );
}
