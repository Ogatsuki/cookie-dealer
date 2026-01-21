import type { t__Props } from "../type";
import { explains } from "../../utils/context/gameContext";



const Explains: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className="mt-12 text-gray-300 flex-start ring-3 ring-green-700 bg-green-900/70 px-8 pt-3 pb-4 rounded-lg shadow-sm flex flex-col gap-3 items-center">
      <h2 className="font-bold text-lg">説明</h2>
      <p className="text-[15px]">{explains[levelIndex][stepIndex]}</p>  
    </section>
  )
}

export default Explains;