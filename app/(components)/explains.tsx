import type { t__Props } from "../type";
import { explains } from "../../utils/context/gameContext";



const Explains: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className="mt-5 text-gray-300 flex-start border-2 border-green-700 bg-[#31723c] px-8 pt-3 pb-4 rounded-lg shadow-sm flex flex-col gap-1.5 items-start">
      <h2 className="font-bold tracking-widest text-[17px]">説明</h2>
      <p className="text-sm">{explains[levelIndex][stepIndex]}</p>  
    </section>
  )
}

export default Explains;