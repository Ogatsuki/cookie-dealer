import type { t__Props } from "../type";

const explains_title = [
  "Level 1 : ドメインの一致",
  "Level 2: テキスト2",
  "Level 3: テキスト3"
]
const explains = [
  "Cookieは「発行元のドメイン」と「送信先のドメイン」が一致した時にのみ送信されます。\n\nこれがWebセキュリティの基本原則であり、他人のサイトのCookieを勝手に盗み見られないようにするための重要な仕組みです。\nリクエスト先のドメインをよく見て、正しいCookieを選びましょう。",
  "text2",
  "text3"
];


const Explains: React.FC<t__Props> = ({level, step}) => {
  return (
    <section className="mt-6 shadow-md">
      <h2 className="font-bold text-gray-600 whitespace-pre flex flex-col gap-1"><span className="text-lg">{explains_title[level]}</span><span className="">Step : {step + 1}</span></h2>
      <div className="flex column flex-start border-2 border-green-600/90 bg-green-600/30 p-4 rounded-lg mt-3">
        <h2 className="min-w-[60px]">説明：</h2>
        <p className="">{explains[level]}</p>  
      </div>
    </section>
  )
}

export default Explains;