import type { t__Props } from "../type";

const urls = [
  // Level 1: ドメインの一致
  [
    "myshop.com/cart", 
    "login.service.org",
  ],
  // Level 2: サブドメイン
  [
    "blog.example.com", 
    "app.example.com/dashboard",
  ],
  // Level 3: 3rd Party Cookie
  [
    "news.site.com", 
    "ec-shop.com",
  ],
  // Level 4: Privacy
  [
    "movie-database.com", 
    "movie-database.com/recommend",
  ],
  // Level 5: SameSite
  [
    "bank.com/transfer", 
    "evil.com", // このURLは使用されないが、構造を維持
  ]
];

const missions =[
  // Level 1
  [
    "myshop.comのカートページにアクセスしようとしています。\nこのサイト用に発行された正しいCookieを選択して送信してください。", 
    "サービスへのログインが必要です。\n'service.org' ドメインのセッションCookieを選択してください。",
  ],
  // Level 2
  [
    "blog.example.com にアクセスします。\n親ドメイン(.example.com)で設定されたCookieは、サブドメインにも送信されるでしょうか？\n適切なものを選択してください。", 
    "app.example.com にアクセスします。\n'blog.example.com' で発行されたCookieはここ（兄弟ドメイン）に送るべきではありません。\n正しいCookieを選んでください。",
  ],
  // Level 3
  [
    "ニュースサイトにアクセスしたところ、広告サーバー (ad-server.com) へのリクエストが発生しました。\nこの広告サーバーに送るべきCookieを選択してください。", 
    "別のECサイトにアクセスしたところ、また広告サーバー (ad-server.com) へのリクエストが発生しました。\n先ほどと同じ広告サーバーのCookieが存在します。送るべきCookieを選択してください。",
  ],
  // Level 4
  [
    "映画データベースサイトにアクセスしました。\nあなたの趣味（MovieGenre）に関するCookieを選択して送信してください。何かが変わるかもしれません。", 
    "映画データベースサイトの「おすすめ」ページにアクセスしました。\nよりパーソナライズされたおすすめを見るために、趣味に関するCookieを送信してください。",
  ],
  // Level 5
  [
    "SNSで送られてきた怪しいリンクをクリックし、銀行サイトへの送金リクエストが自動的に行われようとしています。\n銀行サイトのセッションCookieは送信されるでしょうか？（※ブラウザはデフォルトでSameSite=Laxを適用しています）", 
    "5-2 適切なcookieを設定してアクセスしてください。",
  ]
];

const errorMessages = [
  // Level 1
  [
    "【送信失敗: ドメイン不一致】\n\n選択したCookieのDomain属性と、リクエスト先のHost（myshop.com）が一致しません。\nブラウザは関係のないドメインへのCookie送信をブロックしました。",
    "【送信失敗: ドメイン不一致】\n\n'service.org' 以外のCookieを送ろうとしました。\n似ているドメイン名に騙されないよう、Domain属性をよく確認してください。"
  ],
  // Level 2
  [
    "【送信失敗】\n\nサブドメイン（blog.example.com）には、そのドメイン自身または「親ドメイン（.example.com）」で設定されたCookieが送信可能です。\nスコープの広いCookieを選んでみてください。",
    "【送信失敗】\n\n'blog.example.com' のCookieは、兄弟関係にある 'app.example.com' には送信されません。\nサブドメイン間のCookieは隔離されています。"
  ],
  // Level 3
  [
    "【送信失敗: ドメイン不一致】\n\n広告サーバーはニュースサイトとは別のドメインです。選択したCookieは送られません。リクエスト先のドメインとCookieのDomain属性が一致することを確認してください。",
    "【送信失敗: ドメイン不一致】\n\nECサイトとは関係のない広告サーバーへのリクエストです。そのCookieは送られません。リクエスト先のドメインとCookieのDomain属性が一致することを確認してください。"
  ],
  // Level 4
  [
    "【送信失敗: 不適切な情報】\n\n選択したCookieでは、あなたの趣味をサイトに伝えることができません。正しい情報を含むCookieを選びましょう。",
    "【送信失敗: 情報不足】\n\nパーソナライズされたおすすめを表示するには、あなたの趣味に関する情報が必要です。適切なCookieを選択してください。"
  ],
  // Level 5
  [
    "【送信失敗: SameSite属性によるブロック】\n\nSameSite属性が `Lax` (または `Strict`) のCookieは、外部サイトからのナビゲーション（GETリクエスト）で安全のため送信されません。\nこれにより、意図しないクロスサイトリクエストによる情報漏洩や操作を防ぐことができます。", 
    "text-error-5-2"
  ]
]

const explains = [
  // Level 1
  [
    "正解！\nDomain属性が 'myshop.com' と完全に一致しているため、安全に送信されました。\nこれがHTTPステート管理の基本です。",
    "正解です。\n'service.org' のCookieが正しく送信されました。\nたとえ 'service.com' のような似たドメインがあっても、ブラウザは厳密に区別します。",
  ],
  // Level 2
  [
    "Excellent!\nDomain属性が '.example.com'（親ドメイン）のCookieは、そのすべてのサブドメイン（blog.を含む）に対して送信されます。\nこれを「ワイルドカード」のようなものとイメージしましょう。",
    "正解！\n兄弟ドメイン（blogとapp）の間では、お互いのCookieは見えません。\nこれにより、異なるサービスのセッションが混ざるのを防いでいます。",
  ],
  // Level 3
  [
    "正解です。\n広告サーバーへのリクエストには、その広告サーバー自身のドメインに紐づくCookieが送信されました。\nこれにより、ニュースサイトのCookieとは独立して動作します。",
    "正解です。\n異なるWebサイト（ニュースサイトとECサイト）を閲覧しているにも関わらず、同じ広告サーバーのCookieが送信されています。\nこれが、3rd Party Cookieによる「サイト横断トラッキング」の仕組みです。"
  ],
  // Level 4
  [
    "正解です！\nあなたの趣味（映画のジャンル）に関するCookieが送信され、サイトがあなたの好みに合わせた「おすすめ」を提示しました。\nCookieはユーザー体験を向上させる一方で、あなたの嗜好を記録していることを意識しましょう。",
    "正解です！\n趣味のCookieを送信することで、よりパーソナライズされたおすすめが表示されました。\nCookie内の情報がどのように利用されているかを実感できたでしょうか？",
  ],
  // Level 5
  [
    "正解です！\nSameSite属性が `Lax` (または `Strict`) のCookieは、外部サイトからのナビゲーション（GETリクエスト）で安全のため送信されません。\nこれにより、意図しないクロスサイトリクエストによる情報漏洩や操作を防ぐことができます。", 
    "text-explain-5-2",
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