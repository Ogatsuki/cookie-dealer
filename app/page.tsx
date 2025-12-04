import Header from "./(components)/header";
import Explains from "./(components)/explains";
import MoreInfo from "./(components)/moreinfo";
import Preview from "./(components)/preview";
import Options from "./(components)/options";
import Buttons from "./(components)/buttons";

export default function Home() {
  const step = 0;
  const level = 0;

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-4xl flex flex-col">
        <Explains step={step} level={level} />
        <MoreInfo step={step} level={level} />
        <Preview step={step} level={level} />
        <Options step={step} level={level} />
        <Buttons step={step} level={level} />
      </div>
    </div>
  );
}
