# 要件定義書：Web技術学習アプリ「Cookie Dealer」

## 1. プロダクト概要
### コンセプト
**「ブラウザのコア・エンジンになり、HTTPリクエストの検問を行う」**
ユーザーはブラウザの内部システムとなり、Webサイトへのアクセス時に発生するHTTPリクエストに対し、手持ちの「Cookie」の中から**「そのドメインに送信して安全かつ適切なもの」**を選択して承認する。

### 目的
*   HTTPステートレス性とCookieによる状態保持の仕組みを直感的に理解する。
*   ドメイン、サブドメイン、3rd Party Cookie（クロスサイトリクエスト）の挙動とセキュリティリスクを体験する。
*   エンジニア採用における基礎技術力（HTTP/Security）と実装力（Next.js/DB）の証明。

---

## 2. コア・ゲームループ
1.  **ミッション提示:** 
    画面上の「ブラウザ（アドレスバー＋ビューポート）」にアクセス状況が表示される。
    *   *例: 「ブログ記事内の広告バナーを表示しようとしています」*
2.  **状況把握:**
    ユーザーは「ブラウザの表示URL」と「リクエスト先のURL（Target）」を確認する。
3.  **Cookie選択（Action）:**
    画面下部に並ぶ「Cookieカード」の中から、リクエスト先に送信可能なものを選択する（あるいは「選択しない」を選ぶ）。
4.  **判定・フィードバック:**
    *   **成功:** 正しいCookieが送信され、コンテンツ（カート画面や広告など）が表示される。
    *   **失敗:** ドメイン不一致エラーや、認証失敗画面が表示される。

---

## 3. レベルデザイン（カリキュラム）

### Level 1: 基本のドメイン一致（1st Party）
*   **状況:** ユーザーが ECサイト (`myshop.com`) のカート画面にアクセス。
*   **ターゲット:** `GET https://myshop.com/cart`
*   **手札:** `google.com`, `myshop.com`, `yahoo.co.jp` のCookie。
*   **正解:** `myshop.com` のCookieを選択。
*   **学習目標:** Cookieは発行元のドメインにしか送られない基本原則。

### Level 2: サブドメインの壁
*   **状況:** ログインサーバー (`login.secure.net`) にアクセス。
*   **ターゲット:** `GET https://login.secure.net/auth`
*   **手札:** 
    1. `mail.secure.net` (兄弟ドメイン - 送信不可)
    2. `secure.net` (親ドメイン - 送信可)
*   **正解:** 親ドメインのCookieを選択。
*   **学習目標:** ドメインの包含関係とスコープの理解。

### Level 3: 3rd Party Cookieの基本
*   **状況:** ブログ (`nice-blog.net`) を閲覧中、埋め込まれた広告画像の読み込みが発生。
*   **ブラウザURL:** `https://nice-blog.net`
*   **ターゲット:** `GET https://ad-provider.com/banner.png` (外部へのリクエスト)
*   **手札:** `nice-blog.net` (1st Party), `ad-provider.com` (3rd Party)。
*   **正解:** `ad-provider.com` のCookieを選択。
*   **学習目標:** アドレスバーのドメインではなく、リクエスト先のドメインがCookieの送信基準になること（クロスサイトリクエスト）。

### Level 4: トラッキングの実演（プライバシー）
*   **状況:** 再びブログを閲覧中。広告配信サーバーへリクエストを送る。
*   **手札:** 
    1. `ad-provider.com` (値: `history=visited_shoe_store`) ※行動履歴入り
    2. その他無関係なCookie
*   **正解:** 行動履歴入りCookieを選択。
*   **結果:** 成功演出として、ブログ内の広告枠に「靴の広告（リターゲティング広告）」が表示される。
*   **学習目標:** 3rd Party Cookieによって、サイトを跨いで行動が追跡される仕組みの体験。

---

## 4. 機能要件

### フロントエンド (Next.js App Router)
*   **Browser Window UI:**
    *   アドレスバー（https://...）の表示。
    *   コンテンツ表示エリア（iframe風）。Level 3,4ではここに「ブログ記事」と「読み込み中の広告枠」を表示。
    *   成功/失敗時のオーバーレイ演出（Check / Blockアイコン）。
*   **Request Info:**
    *   現在処理中のリクエストメソッド（GET/POST）とターゲットドメインの明示。
*   **Cookie Hand UI:**
    *   ユーザーが保持しているCookieをカード形式で表示。
    *   カード情報: `Domain`, `Name`, `Value`。
    *   クリックで選択/解除のトグル動作。

### バックエンド (Supabase)
*   **認証機能:**
    *   メール/パスワード または GitHub/Google認証。
    *   未ログインでも体験版としてプレイ可能だが、進捗保存にはログインが必要。
*   **進捗管理:**
    *   `profiles` テーブル: ユーザーごとの `max_cleared_level` を保存。
    *   レベルクリア時にAPI経由でステータスを更新。

---

## 6. 技術スタック
*   **Framework:** Next.js (TypeScript)
*   **Styling:** Tailwind CSS, React (Icons)
*   **Backend/Auth:** Supabase
*   **Deployment:** cloud run


## DB, APIの使い方
・supabaseに、どの問題にどの回答を選択したかを記録していく。
