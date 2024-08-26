import ResetIcon from "../ui/logo/ResetIcon";
import ButtonNotation from "./ButtonNotation";

export default function Card() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="text-xl border-[1px] border-[#E0E0E0] rounded-lg bg-white w-[353px] h-[326px] p-6 transition-shadow duration-400 hover:shadow-lg hover:shadow-[#fbbe2489]">
      <div className="flex justify-end items-end mr-2 mb-2">
        <button
          onClick={refreshPage}
          className="rounded-[4px] w-8 h-8 flex justify-center items-center hover:bg-gray-300 duration-300 group"
        >
          <ResetIcon className="text-[#828282] group-hover:text-black duration-300" />
        </button>
      </div>

      <div className="flex justify-center items-center flex-col">
        <h1 className="font-semibold text-2xl text-slate-800 mb-4">
          Quel note donnerais-tu à ce challenge ?
        </h1>
        <p className="font-normal text-lg text-slate-700 mt-2">
          Bon j'espère que tu vas mettre 5 évidemment, si ce n'est pas le cas
          viens me dire pourquoi !
        </p>
        <ButtonNotation />
      </div>
    </div>
  );
}
