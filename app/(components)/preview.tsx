import { urls, missions, errorMessages, explainsAtCorrected } from "../../utils/context/gameContext";
import { FaLock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

type t__prevProps = {
  levelIndex: number;
  stepIndex: number;
  cardState: number;
}


const Preview: React.FC<t__prevProps> = ({levelIndex, stepIndex, cardState}) => {
  return (
    <section className="mt-10 shadow-md text-white rounded-lg overflow-hidden aspect-video">
      <h2 className="sr-only">プレビュー画面</h2>
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center align-center h-15 bg-slate-900">
          <div className="flex tracking-widest w-full max-w-2xl bg-slate-800 pl-5 pr-6 py-1 rounded-md border border-slate-600 text-sm">
            <h3 className="sr-only">URL</h3>
            <p className="flex-1 font-bold flex"><FaLock className="mr-3 font-medium text-gray-100" /><span className="text-gray-400 whitespace-pre">https:// </span>{urls[levelIndex][stepIndex]}</p>
          </div>
        </div>
        <div className={`bg-slate-900/80 flex-1 flex flex-col px-[20%] before:content-[''] before:block before:flex-7 after:content-[''] after:block after:flex-10 ${cardState === 1 ? 'bg-green-700/40' : ''} ${cardState === -1 ? 'bg-red-700/40' : ''}`}>
          <div className="flex flex-col items-center">
            {cardState === 0 && (
              <div className="flex flex-col items-center space-y-5">
                <h3 className="text-blue-400 font-bold text-2xl">
                  <span aria-hidden="true">Mission</span>
                  <span className="sr-only">ミッション</span>
                </h3>
                <p className="whitespace-pre-line">{missions[levelIndex][stepIndex]}</p>
              </div>
            )}
            {cardState === 1 && (
              <>
                <div className="sr-only">
                  <h3>送信成功</h3>
                  <p>{explainsAtCorrected[levelIndex][stepIndex]}</p>
                </div>
                <div className="flex flex-col items-center space-y-5">
                  <h3 className="font-bold text-green-500 text-2xl">送信成功</h3>
                  <p>{explainsAtCorrected[levelIndex][stepIndex]}</p>
                </div>
              </>
            )}
            {cardState === -1 && (
              <>
                <div className="sr-only">
                  <h3>送信失敗</h3>
                  <p>{errorMessages[levelIndex][stepIndex]}</p>
                </div>
                <div className="flex flex-col items-center space-y-5">
                  <h3 className="font-bold text-red-500 text-2xl">送信失敗</h3>
                  <p>{errorMessages[levelIndex][stepIndex]}</p>
                </div>
              </>
            )}          
            <p className="text-xs font-bold text-gray-400 mt-8">↓ 下の選択肢の中から適切なcookieを選んでください。↓</p>
            {cardState === 1 && (
              <FaCheckCircle className="size-[100px]" />
            )}
            {cardState === -1 && (
              <FaWindowClose />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Preview;