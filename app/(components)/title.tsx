import { explains_title, optionValues } from "../../utils/context/gameContext";

type t__titleProps = {
  levelIndex: number;
  stepIndex: number;
  setLevelIndex: React.Dispatch<React.SetStateAction<number>>;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsNextStep: React.Dispatch<React.SetStateAction<boolean | null>>;
  setPreviewState: React.Dispatch<React.SetStateAction<number>>;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Title({ levelIndex, stepIndex, setLevelIndex, setStepIndex, setIsNextStep, setPreviewState, setSelectedOptionIndex }: t__titleProps) {
  // step遷移のボタンが押されたらisCorrect, errorをリセット（nullにする）
  const whenNextStepPushed = () => {
    setIsNextStep(true);
    setPreviewState(0);
    setSelectedOptionIndex(null);
  }
  const whenPrevStepPushed = () => {
    setIsNextStep(false);
    setPreviewState(0);
    setSelectedOptionIndex(null);
  }
  const whenFirstPushed = () => {
    setLevelIndex(0);
    setStepIndex(0);
  }
  const whenLastPushed = () => {
    setLevelIndex(optionValues.length - 1);
    setStepIndex(optionValues[optionValues.length - 1].length - 1);
  }

  return (
    <div className="flex flex-col items-center mt-18">
      <h2 className="font-bold text-slate-900 flex gap-1 text-2xl tracking-wider">{explains_title[levelIndex]}</h2>
      <div className="mt-3 flex text-slate-900/80 items-center">
        <button type='button' className={`hover:cursor-pointer flex leading-none text-gray-400 translate-x-1 ${levelIndex === 0 ? 'invisible' : ''}`} onClick={whenFirstPushed}><span className="block rotate-270">▲</span><span className="block rotate-270">▲</span></button>
        <button type="button" className={`hover:cursor-pointer ml-3 leading-none text-gray-400 rotate-270 ${levelIndex === 0 && stepIndex === 0 ? 'invisible' : ''}`} onClick={whenPrevStepPushed}>▲</button>
        <div className="mx-5 text-slate-900 text-base flex whitespace-pre leading-none">
          <span className="">Level : {levelIndex + 1}</span> - <span className=""> Step : {stepIndex + 1}</span>
        </div>
        <button type="button" className={`hover:cursor-pointer mr-3 leading-none text-gray-400 rotate-90 ${levelIndex === optionValues.length - 1 && stepIndex === optionValues[levelIndex].length - 1 ? 'invisible' : ''}`} onClick={whenNextStepPushed}>▲</button>
        <button type='button' className={`hover:cursor-pointer flex leading-none text-gray-400 ${levelIndex === optionValues.length - 1 ? 'invisible' : ''}`} onClick={whenLastPushed}><span className="block rotate-90">▲</span><span className="block rotate-90">▲</span></button>
      </div>
    </div>
  )
}