import type { t__Props } from "../type";
import { explains } from "../../utils/context/gameContext";



const Explains: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className="mt-5 flex justify-center">
      <div className="text-slate-800 border-2 border-green-400 bg-[#c8edce] px-8 pt-3 pb-4 rounded-lg shadow-sm max-w-[600px] flex flex-col gap-2">
        <h2 className="font-bold tracking-widest text-[17px]">説明</h2>
        <p className="text-sm">{explains[levelIndex][stepIndex]}</p>  
      </div>
    </section>
  )
}

export default Explains;