type t__ButtonsProps = {
  levelIndex: number;
  stepIndex: number;
  movingDirection: "forward" | "backward" | null;
}

const Buttons: React.FC<t__ButtonsProps> = ({levelIndex, stepIndex, movingDirection}) => {
  return (
    <div className="my-16 flex justify-center items-center gap-16">
      <button className="text-[15px] font-bold text-gray-600" onClick={() => movingDirection("backward")}>前のステップへ</button>
      <button className="px-5 py-3 bg-blue-700/85 text-white rounded-md font-bold hover:shadow-md">サーバーに送信</button>
      <button className="text-[15px] font-bold text-gray-600" onClick={() => movingDirection("forward")}>次のステップへ</button>
    </div>
  )
}

export default Buttons;