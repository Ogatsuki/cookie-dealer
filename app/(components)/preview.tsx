import { urls, missions, errorMessages, explainsAtCorrected } from "../../utils/context/gameContext";
import { FaLock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import Explains from "./explains";

type t__prevProps = {
  levelIndex: number;
  stepIndex: number;
  previewState: number;
}


const Preview: React.FC<t__prevProps> = ({levelIndex, stepIndex, previewState}) => {
  return (
    <section className="mt-13 shadow-md text-white rounded-lg overflow-hidden">
      <h2 className="sr-only">プレビュー画面</h2>
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center align-center h-15 bg-slate-900">
          <div className="flex tracking-widest w-full max-w-2xl bg-slate-800 pl-5 pr-6 py-1 rounded-md border border-slate-600 text-sm">
            <h3 className="sr-only">URL</h3>
            <p className="flex-1 font-bold flex"><FaLock className="mr-3 font-medium text-gray-100" /><span className="text-gray-400 whitespace-pre">https:// </span>{urls[levelIndex][stepIndex]}</p>
          </div>
        </div>
        <div className={`flex-1 flex flex-col px-[20%] ${previewState === 0 ? 'bg-slate-900/80' : ''} ${previewState === 1 ? 'bg-green-700/50' : ''} ${previewState === -1 ? 'bg-red-700/50' : ''}`}>
          <div className="flex flex-col items-center">
            {previewState === 0 && (
              <Explains levelIndex={levelIndex} stepIndex={stepIndex} />
            )}
            <div className="mt-14 mb-22">
              {previewState === 0 && (
                <div className="flex flex-col items-center space-y-3">
                  <h3 className="text-blue-400 font-bold text-2xl">
                    <span aria-hidden="true">Mission</span>
                    <span className="sr-only">ミッション</span>
                  </h3>
                  <p className="whitespace-pre-line">{missions[levelIndex][stepIndex]}</p>
                  <p className="text-sm font-bold text-gray-400 mt-5">↓ 下の選択肢の中から適切なcookieを選んでください。↓</p>
                </div>
              )}
              {previewState === 1 && (
                <>
                  <div className="sr-only">
                    <h3>送信成功</h3>
                    <p>{explainsAtCorrected[levelIndex][stepIndex]}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold text-green-600 text-2xl">送信成功！</h3>
                    <p className="mt-4">{explainsAtCorrected[levelIndex][stepIndex]}</p>
                    <FaCheckCircle className="mt-6 size-[100px] text-green-600" />
                  </div>
                </>
              )}
              {previewState === -1 && (
                <>
                  <div className="sr-only">
                    <h3>送信失敗</h3>
                    <p>{errorMessages[levelIndex][stepIndex]}</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <h3 className="font-bold text-red-500 text-2xl">送信失敗</h3>
                    <p>{errorMessages[levelIndex][stepIndex]}</p>
                    <FaWindowClose />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Preview;