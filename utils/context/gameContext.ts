'use client'

export const explains_title = [
  "ドメインの一致",
  "サブドメイン",
  "3rd Party Cookieと広告",
  "プライバシーとCookie",
  "SameSite属性"
];

export const explains = [
  // Level 1: ドメインの一致
  [
    "Cookieは「発行元」と「送信先」のドメインが一致しないと送信されません。\n\nこれは、無関係なサイトへの誤配送（情報漏洩）を防ぐための、Webセキュリティの最も基本的なルールです。",
    "Cookieは「発行元」と「送信先」のドメインが一致しないと送信されません。\n\nこれは、無関係なサイトへの誤配送（情報漏洩）を防ぐための、Webセキュリティの最も基本的なルールです。"
  ],
  // Level 2: サブドメイン
  [
    "ドメインには「親子関係」があります。\n\n親ドメイン（例: .example.com）のCookieは、その配下のサブドメイン（子）でも有効ですが、逆に子が親のCookieを読むことや、兄弟間で読むことはできません。",
    "ドメインには「親子関係」があります。\n\n親ドメイン（例: .example.com）のCookieは、その配下のサブドメイン（子）でも有効ですが、逆に子が親のCookieを読むことや、兄弟間で読むことはできません。"
  ],
  // Level 3: 3rd Party Cookieと広告
  [
    "Webページは、記事本体だけでなく、画像や広告など「外部（3rd Party）」のサーバーとも通信して成り立っています。\n\nこれにより、サイトを跨いでも同じ「広告用Cookie」が送信され、あなたの行動を追跡（トラッキング）することが可能になります。",
    "Webページは、記事本体だけでなく、画像や広告など「外部（3rd Party）」のサーバーとも通信して成り立っています。\n\nこれにより、サイトを跨いでも同じ「広告用Cookie」が送信され、あなたの行動を追跡（トラッキング）することが可能になります。"
  ],
  // Level 4: プライバシーとCookie
  [
    "Cookieは便利な「会員証」であると同時に、あなたの行動記録でもあります。\n\nこれを送信することで、サイトの表示（おすすめ等）が自分好みに変化します。便利さとプライバシーはトレードオフの関係にあります。",
    "Cookieは便利な「会員証」であると同時に、あなたの行動記録でもあります。\n\nこれを送信することで、サイトの表示（おすすめ等）が自分好みに変化します。便利さとプライバシーはトレードオフの関係にあります。"
  ],
  // Level 5: SameSite属性
  [
    "「SameSite属性」は、外部サイトからの不審なリクエストを防ぐ盾です。\n\n勝手に送金させるような攻撃（CSRF）から守るため、現代のブラウザは特定の状況でCookie送信を自動的にブロックします。",
    "「SameSite属性」は、外部サイトからの不審なリクエストを防ぐ盾です。\n\n勝手に送金させるような攻撃（CSRF）から守るため、現代のブラウザは特定の状況でCookie送信を自動的にブロックします。"
  ]
];

export const details = [
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
      ["example.com", "theme", "dark_mode"],
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
    "myshop.com のカートページへアクセスします。\nこのサイトの「会員証」となる正しいCookieを送信してください。", 
    "service.org にログインしようとしています。\n似た名前のドメインに惑わされず、正確なドメインのCookieを選んでください。",
  ],
  // Level 2
  [
    "blog.example.com にアクセスします。\n親ドメイン (.example.com) で発行された「広範囲で使えるCookie」はどれですか？", 
    "app.example.com に移動しました。\n隣の部屋（blog.example.com）専用のCookieは、ここ（兄弟ドメイン）には届きません。正しいものを選んでください。",
  ],
  // Level 3
  [
    "ニュース閲覧中に、広告サーバー (ad-server.com) からバナーを読み込みます。\n広告表示に必要なCookieを選んでください。", 
    "別のECサイトに移動しましたが、同じ広告会社 (ad-server.com) のバナーがあります。\nサイトを跨いで追跡に使われるCookieを選択してください。",
  ],
  // Level 4
  [
    "映画情報サイトです。\nあなたの「好み（ジャンル）」が記録されたCookieを送ってみてください。サイトの表示が変わります。", 
    "おすすめページを開きます。\nより正確なレコメンドを受け取るために、設定や履歴を含むCookieを送信してください。",
  ],
  // Level 5
  [
    "【警告】怪しいリンクを踏み、銀行サイトへ送金リクエストが飛びました。\nブラウザの安全機能（SameSite=Lax）により、ブロックされるべき「重要なCookie」はどれですか？", 
    "5-2 サンドボックスモード\n自由な設定で動作を確認してください。",
  ]
];

export const errorMessages = [
  // Level 1
  [
    "【宛先不明】\nドメインが一致しません。\nブラウザは「myshop.com」宛ての荷物（Cookie）しか受け取りません。",
    "【誤配送】\nドメインが異なります。\n'service.com' と 'service.org' は、ブラウザにとっては全くの別世界です。"
  ],
  // Level 2
  [
    "【範囲外】\n選択されたCookieは、このサブドメインまで届きません。\n親ドメイン（.example.com）で設定された、スコープの広いCookieを探してください。",
    "【立入禁止】\n兄弟ドメイン（blog）のCookieは、こちら（app）では使えません。\nそれぞれのサブドメインは独立して管理されています。"
  ],
  // Level 3
  [
    "【不着】\nニュースサイト自体のCookieは、広告サーバーには届きません。\n宛先（ad-server.com）と一致するCookieが必要です。",
    "【不着】\nECサイトのCookieは広告サーバーには届きません。\n「どのサイトにいても」広告サーバー宛てに送られるCookieがあります。"
  ],
  // Level 4
  [
    "【効果なし】\nそのCookieでは、あなたの好みを伝えられません。\n「Genre（ジャンル）」などの情報が含まれたものを選びましょう。",
    "【情報不足】\nそのCookieでは情報が足りません。\nパーソナライズに必要な設定情報を含むCookieを選んでください。"
  ],
  // Level 5
  [
    "【不正解】\nこれは攻撃者経由でも送信されてしまう設定（None）か、あるいは別のCookieです。\n「デフォルトで守られる」セッションCookieを選んでください。", 
    "text-error-5-2"
  ]
]

export const explainsAtCorrected = [
  // Level 1
  [
    "正解！\nドメインが完全に一致しているため、安全に送信されました。\nこれがHTTPステート管理の基本です。",
    "正解です。\n'service.org' のCookieが正しく送信されました。\nたとえ 'service.com' のような似たドメインがあっても、ブラウザは厳密に区別します。",
  ],
  // Level 2
  [
    "Excellent!\n親ドメイン（.example.com）のCookieは、すべてのサブドメイン（blog等）で共通して使えます。\n「一族のパスポート」のようなものです。",
    "正解！\n兄弟ドメイン（blogとapp）の間では、お互いのCookieは見えません。\nこれにより、異なるサービスのセッションが混ざるのを防いでいます。",
  ],
  // Level 3
  [
    "正解です。\n広告サーバー自身のドメインに紐づくCookieが送信されました。\nこれはニュースサイトのCookieとは独立して動作します。",
    "正解です。\n異なるWebサイトを閲覧中も、同じ広告サーバーのCookieが送信されています。\nこれが「サイト横断トラッキング」の仕組みです。"
  ],
  // Level 4
  [
    "正解です！\n趣味のジャンルを送信したことで、サイトがあなた好みの「おすすめ」を提示しました。\n利便性の裏で、嗜好データが渡っていることを意識しましょう。",
    "正解です！\nCookieを送信することで、よりパーソナライズされたおすすめが表示されました。\nサイト側でのあなたの「プロフィール」が充実してきています。",
  ],
  // Level 5
  [
    "正解です！\nこのCookie（Lax）は、外部サイトからのナビゲーションでは送信されません。\nブラウザが自動的にブロックし、不正送金（CSRF）を防ぎました。", 
    "text-explain-5-2",
  ]
]


export const updatePosition = (
  levelIndex: number,
  stepIndex: number,
  isNextStep: number,
  setStepIndex: React.Dispatch<React.SetStateAction<number>>,
  setLevelIndex: React.Dispatch<React.SetStateAction<number>>,
  setIsNextStep: React.Dispatch<React.SetStateAction<number | null>>
): void => {
  // changeする場合は+-1. しない場合は0
  const levelChange = details[levelIndex][stepIndex + isNextStep] ? 0 : isNextStep;
  const stepChange = details[levelIndex][stepIndex + isNextStep] ? isNextStep : 0;
  // すでに最下層、最上層かどうかを判定
  const isUndergrand = (levelIndex === 0 && stepIndex === 0 && isNextStep === -1) ? true : false;
  const isAboveSky = (levelIndex === details.length -1 && stepIndex === details[levelIndex].length -1 && isNextStep === 1) ? true : false;

  if (isUndergrand || isAboveSky) {
    console.log(isUndergrand ? "already at the first step of the first level" : "already at the last step of the last level");
  }
  // stepChangeを実行。change有効ならその時点でreturn
  else if (stepChange !== 0) {
    setStepIndex(stepIndex + stepChange);
  }
  else if (levelChange != 0) {
    setLevelIndex(levelIndex + levelChange);
    setStepIndex(levelChange === 1 ? 0 : details[levelIndex - 1].length - 1);
  }

  setIsNextStep(null);
}