export const explains_title = [
  "Level 1 : ドメインの一致",
  "Level 2 : サブドメイン",
  "Level 3 : 3rd Party Cookieと広告",
  "Level 4 : プライバシーとCookie",
  "Level 5 : SameSite属性"
];

export const explains = [
  "Cookieは「発行元のドメイン」と「送信先のドメイン」が一致した時にのみ送信されます。\n\nこれがWebセキュリティの基本原則であり、他人のサイトのCookieを勝手に盗み見られないようにするための重要な仕組みです。\nリクエスト先のドメインをよく見て、正しいCookieを選びましょう。",
  "ドメインには階層構造があります。\n\n「親ドメイン（例: .example.com）」で発行されたCookieは、その配下のすべての「サブドメイン（例: blog.example.com）」に対しても送信されます。\n逆に、サブドメインで発行されたCookieは親や兄弟には送られません。\nこの「Cookieのスコープ（有効範囲）」を理解しましょう。",
  "Webページには、そのサイト自身（1st Party）だけでなく、外部の広告サーバーや解析ツール（3rd Party）へのリクエストも含まれています。\n\n3rd Party Cookieは、異なるサイト間でユーザーを追跡（トラッキング）するために使われます。\n複数のサイトを横断するCookieの動きを見てみましょう。",
  "あなたのブラウザにあるCookieは、あなたの趣味や行動履歴を知っています。\n\n特定のCookieを送信することで、Webサイトの表示内容（広告やおすすめ）が変化する様子を体験します。\n便利さとプライバシーのリスクは表裏一体です。",
  "CSRF（クロスサイト・リクエスト・フォージェリ）などの攻撃を防ぐため、現代のブラウザは `SameSite` 属性を重要視します。\n\n`Strict`, `Lax`, `None` の違いと、それぞれがどのようなシチュエーションで送信されるかを学びます。"
];

export const detail = [
  // Level 1: ドメインの一致
  [
    [
      "💡 ブラウザの裏側：自動選別の仕組み",
      "あなたが「送信」などの操作をしなくても、ブラウザは裏側で毎回この「Cookie選別」を行っています。\n\nリクエストを送る相手（ドメイン）を確認し、手持ちの数あるCookieの中から「宛先」が一致するものだけを選んで、リクエストの「ヘッダー」と呼ばれる荷札部分にこっそり貼り付けています。\nユーザーがいちいち指定しなくてもログイン状態が維持されるのは、ブラウザのこの健気な働きのおかげなのです。"
    ],
    [
      "🔍 1文字違いでも「別世界」",
      "私たち人間には 'service.com' と 'service.org' は同じサービスに見えるかもしれません。\n\nしかし、ブラウザにとってドメインは「インターネット上の絶対的な住所」です。住所が1文字でも違えば、それは全く別の建物であり、別人が住んでいます。\n誤配送（情報の漏洩）を防ぐため、ブラウザは「似ているから」という理由でCookieを共有することは絶対にありません。この厳格さがWebのセキュリティを支えています。"
    ],
  ],
  // Level 2: サブドメイン
  [
    [
      "👪 「親」から「子」へ受け継がれる設定",
      "ドメインのドット（.）は階層を表します。'.example.com' のように親ドメインで発行されたCookieは、「この家系のサイトならどこでも使えるパスポート」のようなものです。\n\nそのため、'blog.' や 'store.' など、子孫にあたるサブドメインすべてで自動的に提示されます。これを専門用語で「スコープ（有効範囲）が広い」と言います。便利ですが、広範囲で使えてしまうため管理には注意が必要です。"
    ],
    [
      "🏠 兄弟間は「他人」",
      "同じ親を持つ 'blog.example.com' と 'app.example.com' ですが、これらは「兄弟」の関係です。\n\n親（.example.com）のCookieは共有しますが、兄弟が個別に持っている「自分の部屋の鍵（Cookie）」は共有しません。\n「ブログの管理画面」と「アプリのダッシュボード」が混ざらないように、セキュリティのためそれぞれの部屋（サブドメイン）は独立して守られているのです。"
    ],
  ],
  // Level 3: 3rd Party Cookie
  [
    [
      "🧩 1つのページ、多数のサーバー",
      "今見ているニュースサイトの画面は、実は1枚の絵ではありません。\n\n記事はニュース社のサーバーから、画像は画像サーバーから、そして広告は「広告サーバー」から…といった具合に、ブラウザは裏で何十箇所ものサーバーと同時に通信しています。\nこの時、広告枠を表示するための通信には、きっちりと「広告サーバー用のCookie」が添えられます。これを「サードパーティCookie」と呼びます。"
    ],
    [
      "🕵️‍♀️ 追跡（トラッキング）の正体",
      "ニュースサイトでもECサイトでも、同じ広告会社のバナーが表示されていれば、裏側では同じ「広告サーバー」へ通信が発生しています。\n\nそこで毎回同じ「IDカード（Cookie）」を提示してしまえば、広告会社は「あ、さっきニュースを見ていた人が、今は靴を買おうとしている」と簡単に分かってしまいます。\nサイトを跨いで行動が見えてしまう、これが「追跡（トラッキング）」の仕組みです。"
    ],
  ],
  // Level 4: プライバシーとCookie
  [
    [
      "🎫 Cookieは「引換券」",
      "サーバーは、送られてきたCookie（引換券）を見て、あなたに渡す料理（Webページ）の中身を変えています。\n\n「アクション映画が好き」という引換券を見せたので、サーバーは瞬時にアクション映画のリストを生成して返信しました。\n静的に見えるWebページも、実は相手に合わせて毎回裏側で作り直されているのです。これを「動的コンテンツ」と呼びます。"
    ],
    [
      "⚖️ 便利さと引き換えの情報",
      "「おすすめ」機能は便利ですが、それは「自分の好みを常に相手に教え続けている」ことと同じです。\n\nCookie自体はただの小さなテキストデータですが、それが蓄積されることで、あなたの趣味・嗜好・生活リズムまで推測できる「詳細なプロフィール」が出来上がってしまいます。\n便利さとプライバシーのリスクは、常にトレードオフの関係にあります。"
    ],
  ],
  // Level 5: SameSite属性
  [
    [
      "🛡️ 「ついうっかり」を守る防波堤",
      "悪意あるサイトが、あなたの銀行口座へ勝手に送金リクエストを飛ばそうとする攻撃（CSRF）があります。\n\nしかし現代のブラウザは、「別のサイトから飛んできたリクエスト」には、大事なCookie（ログイン情報など）を添付しないように設計されています（SameSite=Lax）。\nこの「防波堤」のおかげで、怪しいリンクを踏んでも勝手に送金されることはありません。ブラウザは常に進化してあなたを守っています。"
    ],
    [
      "🌐 SameSite=None とは？",
      "通常の `SameSite=Lax` や `Strict` とは異なり、`SameSite=None` のCookieは、Webサイトを跨いだリクエストでも送信されます。\n\nただし、これには `Secure` 属性（HTTPS通信であること）が必須です。\n広告や埋め込みコンテンツ（例: YouTube動画）など、異なるサイト間での連携が必要な場合に利用されます。利便性が高い一方で、トラッキングに利用される可能性もあるため、使用には注意が必要です。"
    ],
  ]
];

export const optionKeys = ["ドメイン", "名前", "値", "Path", "expires", "maxAge", "secure", "httpOnly", "sameSite"] as const;

export const optionValues = [
  // Level 1: ドメインの一致
  [
    // Step 0: myshop.com
    [
      ["google.com", "NID", "511=eV9..."],
      ["myshop.com", "session_id", "user_8823"],
      ["yahoo.co.jp", "B", "d9f8..."],
    ],
    // Step 1: login.service.org
    [
      ["service.com", "auth_token", "invalid_token"],
      ["service.org", "session", "valid_user_x"],
      ["login.service.net", "track_id", "abc-123"],
    ]
  ],
  // Level 2: サブドメイン
  [
    // Step 0: blog.example.com (親ドメインからの継承)
    [
      [".example.com", "theme", "dark_mode"],
      ["other-site.com", "ad_id", "g4g5g6"],
      ["random.net", "uid", "guest"],
    ],
    // Step 1: app.example.com (兄弟ドメインの分離)
    [
      ["blog.example.com", "post_draft", "title='Hello'"],
      ["app.example.com", "dashboard_config", "view='grid'"],
      [".example.net", "global_id", "net_user_1"],
    ]
  ],
  // Level 3: 3rd Party Cookie
  [
    // Step 0: ニュースサイトの広告リクエスト (ad-server.com)
    [
      ["ad-server.com", "ad_id", "abc-123"],
      ["news.site.com", "session_id", "news_user_token"],
      ["other-ad.com", "track_data", "def-456"],
    ],
    // Step 1: ECサイトの広告リクエスト (ad-server.com)
    [
      ["ad-server.com", "ad_id", "abc-123"], // 同じ広告ID
      ["ec-shop.com", "cart_id", "999-XYZ"],
      ["news.site.com", "last_view", "article_x"],
    ]
  ],
  // Level 4: プライバシーとCookie
  [
    // Step 0: 映画データベースサイト (趣味嗜好)
    [
      ["movie-database.com", "MovieGenre", "Action"],
      ["movie-database.com", "session_id", "user_session_abc"],
      ["movie-database.com", "viewed_count", "100"],
    ],
    // Step 1: 映画データベースサイト (おすすめ)
    [
      ["movie-database.com", "MovieGenre", "Comedy"],
      ["movie-database.com", "user_setting", "theme_dark"],
      ["another-site.com", "tracking_id", "xyz"],
    ]
  ],
  // Level 5: SameSite属性
  [
    // Step 0: 銀行サイトへの不正送金リンク
    [
      ["bank.com", "session_id", "bank_user_123", "Lax"], // 正解 (Laxで送信されない)
      ["bank.com", "user_info", "name=Alice", "None"], // Noneは送られる
      ["bank.com", "csrf_token", "random_csrf_val", "Strict"], // Strictは送られない
    ],
    // Step 1: (まだ指示なし)
    [
      ["domain-5-2-1.com", "name-5-2-1", "value-5-2-1", "sameSite-5-2-1"],
      ["domain-5-2-2.com", "name-5-2-2", "value-5-2-2", "sameSite-5-2-2"],
      ["domain-5-2-3.com", "name-5-2-3", "value-5-2-3", "sameSite-5-2-3"],
    ]
  ]
];

export const urls = [
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

export const missions =[
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

export const errorMessages = [
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

export const explainsAtCorrected = [
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


export const isLevelChanged = ({currentLevel, currentStep, movingDirection}: {currentLevel: number, currentStep: number, movingDirection: "forward" | "backward"}) => {
  if (movingDirection === "forward") {
    
  }
}