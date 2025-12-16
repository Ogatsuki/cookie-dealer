import type { t__Props } from "../type";

const explains_title = [
  "Level 1 : ドメインの一致",
  "Level 2 : サブドメイン",
  "Level 3 : 3rd Party Cookieと広告",
  "Level 4 : プライバシーとCookie",
  "Level 5 : SameSite属性"
]
const explains = [
  "Cookieは「発行元のドメイン」と「送信先のドメイン」が一致した時にのみ送信されます。\n\nこれがWebセキュリティの基本原則であり、他人のサイトのCookieを勝手に盗み見られないようにするための重要な仕組みです。\nリクエスト先のドメインをよく見て、正しいCookieを選びましょう。",
  "ドメインには階層構造があります。\n\n「親ドメイン（例: .example.com）」で発行されたCookieは、その配下のすべての「サブドメイン（例: blog.example.com）」に対しても送信されます。\n逆に、サブドメインで発行されたCookieは親や兄弟には送られません。\nこの「Cookieのスコープ（有効範囲）」を理解しましょう。",
  "Webページには、そのサイト自身（1st Party）だけでなく、外部の広告サーバーや解析ツール（3rd Party）へのリクエストも含まれています。\n\n3rd Party Cookieは、異なるサイト間でユーザーを追跡（トラッキング）するために使われます。\n複数のサイトを横断するCookieの動きを見てみましょう。",
  "あなたのブラウザにあるCookieは、あなたの趣味や行動履歴を知っています。\n\n特定のCookieを送信することで、Webサイトの表示内容（広告やおすすめ）が変化する様子を体験します。\n便利さとプライバシーのリスクは表裏一体です。",
  "CSRF（クロスサイト・リクエスト・フォージェリ）などの攻撃を防ぐため、現代のブラウザは `SameSite` 属性を重要視します。\n\n`Strict`, `Lax`, `None` の違いと、それぞれがどのようなシチュエーションで送信されるかを学びます。"
];


const Explains: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-gray-600 whitespace-pre flex flex-col gap-1"><span className="text-lg">{explains_title[levelIndex]}</span><span className="">stepIndex : {stepIndex + 1}</span></h2>
      <div className="flex column flex-start border-2 border-green-600/90 bg-green-600/30 p-4 rounded-lg mt-3 shadow-sm">
        <h2 className="min-w-[60px]">説明：</h2>
        <p className="">{explains[levelIndex]}</p>  
      </div>
    </section>
  )
}

export default Explains;