import type { t__Props } from "../type";

const urls = [
  [
    "myshop.com/cart", "sample1-2.example.com",
  ],
  [
    "sample2-1.com", "sample2-2.example.com",
  ],
  [
    "sample3-1.com", "sample3-2.example.com",
  ]
];

const missions =[
  [
    "myshop.comへのアクセスリクエストが発生しました。\n適切なCookieを選択してリクエストを承認してください。", "1-2適切なcookieを設定して、example.comにアクセスしてください。",
  ],
  [
    "2-1適切なcookieを設定して、example.comにアクセスしてください。", "2-2適切なcookieを設定して、example.comにアクセスしてください。",
  ],
  [
    "3-1適切なcookieを設定して、example.comにアクセスしてください。", "3-2適切なcookieを設定して、example.comにアクセスしてください。",
  ]
];

const errorMessages = [
  [
    "【送信失敗: ドメイン不一致】\n\n選択したCookieのDomain属性と、リクエスト先のHost（myshop.com）が一致しません。\nブラウザはセキュリティのため、関係のないドメインへのCookie送信をブロックしました。\n正しいドメインのCookieを選び直してください。",
    "text-error-1-2"
  ],
  [
    "text-error-2-1",
    "text-error-2-2"
  ],
  [
    "text-error-3-1",
    "text-error-3-2"
  ]
]


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