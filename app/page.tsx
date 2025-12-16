import Explains from "./(components)/explains";
import MoreInfo from "./(components)/moreinfo";
import Preview from "./(components)/preview";
import Options from "./(components)/options";
import Buttons from "./(components)/buttons";


export default function Home() {
  const stepIndex = 0;
  const levelIndex = 0;

  return (
    <div className="p-4 flex justify-center flex-1">
      <div className="w-full max-w-4xl flex flex-col">
        <Explains stepIndex={stepIndex} levelIndex={levelIndex} />
        <MoreInfo stepIndex={stepIndex} levelIndex={levelIndex} />
        <Preview stepIndex={stepIndex} levelIndex={levelIndex} />
        <Options stepIndex={stepIndex} levelIndex={levelIndex} />
        <Buttons stepIndex={stepIndex} levelIndex={levelIndex} />
      </div>
    </div>
  );
}
