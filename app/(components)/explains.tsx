import type { t__Props } from "../type";
import { explains, explains_title } from "../context/gameContext";



const Explains: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-gray-600 whitespace-pre flex flex-col gap-1"><span className="text-lg">{explains_title[levelIndex]}</span><span className="">step : {stepIndex + 1}</span></h2>
      <div className="flex column flex-start border-2 border-green-600/70 bg-green-600/25 p-4 rounded-lg mt-3 shadow-sm">
        <h2 className="min-w-[60px]">説明：</h2>
        <p className="">{explains[levelIndex][stepIndex]}</p>  
      </div>
    </section>
  )
}

export default Explains;