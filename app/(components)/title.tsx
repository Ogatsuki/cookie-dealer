import { explains_title, optionValues } from "../../utils/context/gameContext";

type t__titleProps = {
  levelIndex: number;
  stepIndex: number;
  setLevelIndex: React.Dispatch<React.SetStateAction<number>>;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsNextStep: React.Dispatch<React.SetStateAction<number | null>>;
  setPreviewState: React.Dispatch<React.SetStateAction<number>>;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number | null>>;
  achievedLevelIndex: number | null;
  achievedStepIndex: number | null;
}

export default function Title({ levelIndex, stepIndex, setLevelIndex, setStepIndex, setIsNextStep, setPreviewState, setSelectedOptionIndex, achievedLevelIndex, achievedStepIndex }: t__titleProps) {
  // step遷移のボタンが押されたらisCorrect, errorをリセット（nullにする）
  const whenNextStepPushed = () => {
    setIsNextStep(1);
    setPreviewState(0);
    setSelectedOptionIndex(null);
  }
  const whenPrevStepPushed = () => {
    setIsNextStep(-1);
    setPreviewState(0);
    setSelectedOptionIndex(null);
  }
  // const whenFirstPushed = () => {
  //   setLevelIndex(0);
  //   setStepIndex(0);
  //   setIsNextStep(0);
  // }
  // const whenLastPushed = () => {
  //   setLevelIndex(optionValues.length - 1);
  //   setStepIndex(optionValues[optionValues.length - 1].length - 1);
  //   setIsNextStep(0);
  // }

  const isBtnNextDisabled =
    (achievedLevelIndex === null && achievedStepIndex === null && levelIndex === 0 && stepIndex === 0) ||
    ((achievedLevelIndex !==null && achievedStepIndex !== null) && achievedLevelIndex <= levelIndex && achievedStepIndex < stepIndex);
  
    // console.log("levelIndex:", levelIndex, "stepIndex:", stepIndex , "achievedLevelIndex:", achievedLevelIndex, "achievedStepIndex:", achievedStepIndex, "levelIndex:", levelIndex, "stepIndex:", stepIndex, "isBtnNextDisabled:", isBtnNextDisabled, 'caliculated:', 
    //   (achievedLevelIndex === null && achievedStepIndex === null && levelIndex === 0 && stepIndex === 0) ||
    // ((achievedLevelIndex !==null && achievedStepIndex !== null) && (achievedStepIndex < stepIndex)));

  return (
    <div className="flex flex-col items-center mt-18">
      <h2 className="font-bold text-slate-900 flex gap-1 text-3xl tracking-wider">{explains_title[levelIndex]}</h2>
      <div className="mt-4 flex text-slate-900/80 items-center">
        {/* <button type='button' className={`hover:cursor-pointer flex leading-none text-gray-400 translate-x-1 ${levelIndex === 0 ? 'invisible' : ''}`} onClick={whenFirstPushed}><span className="block rotate-270">▲</span><span className="block rotate-270">▲</span></button> */}
        <button type="button" className={`hover:cursor-pointer ml-3 leading-none text-blue-400 rotate-270 ${levelIndex === 0 && stepIndex === 0 ? 'invisible' : ''}`} onClick={whenPrevStepPushed}>▲</button>
        <div className="mx-5 text-slate-900 text-base flex whitespace-pre leading-none">
          <span className="">Level : {levelIndex + 1}</span> - <span className=""> Step : {stepIndex + 1}</span>
        </div>
        <button type="button" className={`mr-3 leading-none rotate-90 ${isBtnNextDisabled ? 'text-gray-300 hover:cursor-not-allowed' : 'hover:cursor-pointer text-blue-400'} ${levelIndex === optionValues.length - 1 && stepIndex === optionValues[levelIndex].length - 1 ? 'invisible' : ''}`} onClick={whenNextStepPushed} disabled={isBtnNextDisabled}>▲</button>
        {/* <button type='button' className={`flex leading-none ${isBtnNextDisabled ? 'text-gray-300 hover:cursor-not-allowed' : 'hover:cursor-pointer text-gray-500'} ${levelIndex === optionValues.length - 1 ? 'invisible' : ''}`} onClick={whenLastPushed} disabled={isBtnNextDisabled}><span className="block rotate-90">▲</span><span className="block rotate-90">▲</span></button> */}
      </div>
    </div>
  )
}