import type { t__Props } from "../type";
import { urls, missions, errorMessages } from "../context/gameContext";


const Preview: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className="mt-10 shadow-md text-white rounded-lg overflow-hidden aspect-video">
      <h2 className="sr-only">プレビュー画面</h2>
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center align-center h-15 bg-slate-900">
          <div className="flex tracking-widest w-full max-w-2xl bg-slate-800 px-6 py-1 rounded-md border border-slate-600 text-sm">
            <h3 className="sr-only">URL</h3>
            <p className="flex-1 font-bold"><span className="text-gray-400">https:// </span>{urls[levelIndex][stepIndex]}</p>
          </div>
        </div>
        <div className="bg-slate-900/80 flex-1 flex flex-col justify-start items-center px-[25%]">
          <h3 className="text-blue-400 font-bold text-2xl mt-24">
            <span aria-hidden="true">Mission</span>
            <span className="sr-only">ミッション</span>
          </h3>
          <p className="whitespace-pre-line mt-5">{missions[levelIndex][stepIndex]}</p>
          <p className="text-xs font-bold text-gray-400 mt-8">↓ 下の選択肢の中から適切なcookieを選んでください。↓</p>
        </div>
        <div className="sr-only">
          <h3>送信失敗</h3>
          <p>{errorMessages[levelIndex][stepIndex]}</p>
        </div>
      </div>
    </section>
  );
}


export default Preview;