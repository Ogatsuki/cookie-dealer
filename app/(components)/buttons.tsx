import type { t__Props } from "../type";

const Buttons: React.FC<t__Props> = ({level, step}) => {
  return (
    <div className="mt-16 flex justify-center items-center gap-16">
      <button className="text-sm font-bold text-gray-600">前のstepへ</button>
      <button className="px-4 py-2 bg-blue-700/90 text-white rounded-md text-sm font-bold hover:shadow-md">サーバーに送信</button>
      <button className="text-sm font-bold text-gray-600">次のステップへ</button>
    </div>
  )
}

export default Buttons;